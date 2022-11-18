import mongoose from 'mongoose'

const connectDB = () => {
   mongoose
      .connect(`${process.env.URL_CONNECT_DB || ""}`)
      .then((data) => {
         console.log(`MongoDB connected with server: ${data.connection.host}`);
      })
      .catch((error) => {
         console.log(`Connect Mongo is error ::: ${error.message}`);
      });
};
export default connectDB;
