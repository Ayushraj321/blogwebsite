import mongoose from 'mongoose';

const Connection = async () => {
    const URL = process.env.MONGODB_URI || `mongodb+srv://ayushraj2821:mypassword123@cluster0.tif1nuw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;