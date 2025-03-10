import { NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY,{
    typescript: false,
    apiVersion: "2023-10-16"
})

export async function POST(req){
    const data=await req.json();
    const amount =data.amount;
    try{
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Number(amount)*100,
            currency: 'USD'
        })
        return NextResponse.json(paymentIntent.client_secret,{status:200})
    }
    catch(err){
        return new NextResponse(err,{status:500})
    }
}