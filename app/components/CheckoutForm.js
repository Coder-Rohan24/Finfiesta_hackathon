"use client";
import React from 'react';
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";


const CheckoutForm = ({amount}) => {
  const stripe=useStripe();
  const elements=useElements();

  console.log(amount);

  const handleSubmit= async(event)=>{
    event.preventDefault();
    if(elements==null){
      return;
    }
    const {error: submitError}=await elements.submit();
    if(submitError){
      return;
    }
    const res=await fetch('/api/create-intent',{
      method: 'POST',
      body: JSON.stringify({amount}), 
    })
    const secretKey=await res.json();
    const {error}=await stripe.confirmPayment({
      clientSecret: secretKey,
      elements,
      confirmParams:{
        return_url: "http://localhost:4040/success"
      }
    })
    console.log(error);
  }
  
  return (
    <div className='payment-container'>
        <h2 style={{color: "white", }}>Amount to pay: {amount}</h2>
        <form onSubmit={handleSubmit} className='payment-form'>
        <PaymentElement/>
        <button className="payment-button">pay</button>
        </form>
    </div>
  )
}

export default CheckoutForm