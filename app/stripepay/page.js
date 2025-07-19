"use client";
import React from 'react'
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm';
import { useSearchParams } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';

const Page = () => {
    const searchparams=useSearchParams();
    const amount=Number(searchparams.get('amount'));
    const name=searchparams.get('receiverName');
    const stripePromise= loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY);
    // console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY);

    const options= {
    mode: 'payment',
    amount: amount,
    currency: 'usd'
    }
  return (
    <Elements stripe={stripePromise} options={options}>
        <CheckoutForm amount={amount} receiverName={name}/>
    </Elements>
  )
}

export default Page