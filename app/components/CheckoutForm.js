"use client";
import React from 'react';
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useUser } from "@auth0/nextjs-auth0/client";
import axios from 'axios';
const CheckoutForm = ({amount,receiverName}) => {
  const stripe=useStripe();
  const elements=useElements();
  const {user}=useUser();
  console.log(`Amount:${amount}, Receiver:${receiverName},User Email:${user?.email}`);

  const handleSubmit= async(event)=>{
    event.preventDefault();
    if(elements==null){
      return;
    }
    // Submit elements before confirming payment
    const {error: submitError}=await elements.submit();
    if(submitError){
      return;
    }
    try{
      await axios.post('/api/users', {
        senderEmail: user?.email,
        receiverName,
        amount,
        timestamp: new Date().toISOString()
      });
      console.log("Transaction stored successfully!");
    }catch(err){
      console.error("Error storing transaction:", err);
    }
    

    
    // Create Payment Intent
    const res=await fetch('/api/create-intent',{
      method: 'POST',
      body: JSON.stringify({amount}), 
    })
    const secretKey=await res.json();
    // Confirm Payment
    const {error}=await stripe.confirmPayment({
      clientSecret: secretKey,
      elements,
      confirmParams:{
        return_url: "http://localhost:4040/success"
      }
    })
    console.log(error);

  //   if (error) {
  //     console.log("Payment Failed:", error);
  //   } else if (paymentIntent?.status === "succeeded") {
  //     console.log("Payment Successful!");

  //     // Store transaction in database only if payment is successful
      
  //   }

  } 

  
  
  return (
    <div className='payment-container'>
        <h2 style={{color: "white", }}>Amount to pay: {amount}</h2>
        <form onSubmit={handleSubmit} className='payment-form'>
        <PaymentElement/>
        <button className="payment-button">pay</button>
        </form>
    </div>
  );
};

export default CheckoutForm