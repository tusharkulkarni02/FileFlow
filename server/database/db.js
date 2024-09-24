import mongoose from 'mongoose';

const DBConnection = async () => {
  const MONODB_URI = `mongodb+srv://user:codeforinterview@file-sharing.zyo25xb.mongodb.net/?retryWrites=true&w=majority&appName=file-sharing`;
  try{
    await mongoose.connect(MONODB_URI, { useNewUrlParser: true});
    console.log('Database connected successfully');
  } catch (error){
    console.error('Error while connecting with the database', error.message);
  }
}

export default DBConnection;
