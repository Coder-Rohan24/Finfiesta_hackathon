"use client";
import Link from 'next/link';
import React from 'react';
const CheckoutAmount = () => {
    const [name, setName] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const handleName=(e)=>{
        setName(e.target.value);
        console.log(name);
    }
    const handleAmount=(e)=>{
      if(amount==0){setAmount(1);}
        setAmount(Number(e.target.value));
        console.log(amount);
    }
    
  return (
    <>
        <div className="checkformlogincontainer">
      <div className="checkformlogininner">
        <h1 className="checkformloginheader">Send Money Securely</h1>
        <p className="checkformloginsubtext">
          Enter your payment amount and make a secure payment using your preferred payment method.
        </p>

        <form className="checkformloginform">
          {/* <p className="checkformloginformtitle">Sign in to your account</p> */}

          <div className="checkformlogininputcontainer">
            <label htmlFor="email" className="sr-only">Name</label>
            <input type="text" id="email" className="checkformlogininputfield" placeholder="Enter Receiver's Name" value={name} onChange={handleName} />
            <span className="checkformlogininputicon">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
              </svg>
            </span>
          </div>

          <div className="checkformlogininputcontainer">
            <label htmlFor="password" className="sr-only">Amount-</label>
            <input type="text" id="password" className="checkformlogininputfield" placeholder="Enter amount" value={amount} onChange={handleAmount}/>
            <span className="checkformlogininputicon">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
            </span>
          </div>

          <button className="checkformloginbutton"><Link href={`/stripepay?amount=${amount}&receiverName=${encodeURIComponent(name)}`}>Make Payment</Link></button>

        </form>
      </div>
    </div>
    </>
  )
}

export default CheckoutAmount
