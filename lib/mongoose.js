import mongoose from 'mongoose';
const connectionToDatabase = async () => {
    console.log(process.env.MONGODB_URI);
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to the database');
    }catch(err){
        console.log('Error connecting to the database');
        console.log(err);
    }
}

export default connectionToDatabase