import mongoose from "mongoose";

const DBconnect = async()=>{
    try {
        const DB_URL ="mongodb+srv://k16387873:4RN21PQ0fh4CC6NJ@cluster0.7hqmu1s.mongodb.net/";
        await mongoose.connect(DB_URL,{usenewUrlParser : true});
        console.log(`DB connected successfully`);
        
    } catch (error) {
        console.log(`Error to connect to db ${error}`);
        
    }
}

export { DBconnect};