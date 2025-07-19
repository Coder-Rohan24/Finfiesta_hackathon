import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
    receiverName: { type: String, required: true },
    amount: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now }
});

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    transactions: [transactionSchema] // Store multiple transactions per user
});

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
