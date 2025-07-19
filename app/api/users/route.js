import connectionToDatabase from "../../../lib/mongoose";  
import User from "../../../models/User";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        await connectionToDatabase();
        const { senderEmail, receiverName, amount, timestamp } = await request.json();

        // Check if user exists
        let existingUser = await User.findOne({ email: senderEmail });
        if (!existingUser) {
            existingUser = new User({ email: senderEmail, transactions: [] });
        }

        // Add transaction
        existingUser.transactions.push({ receiverName, amount, timestamp });
        await existingUser.save();

        return NextResponse.json({ success: true, message: "Transaction stored!" }, { status: 201 });

    } catch (err) {
        console.log(err);
        return NextResponse.json({ success: false, error: "Database error" }, { status: 500 });
    }
}
