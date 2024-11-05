import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

import dotenv from 'dotenv';
dotenv.config({ path: './env' });


connectDB()



// In JavaScript, IIFE stands for Immediately Invoked Function Expression. It is a function expression that is defined and executed immediately after its creation.

// The basic syntax of an IIFE is:

// javascript
// Copy code
// (function() {
//   // code here
// })();


/*
(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)  //connect to DB

        app.on("error",(error)=>{             //DB is successfully connected but the express is not able to talk to the database
            console.log("Error :",error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error is:",error)
        throw error
    }
})()

*/