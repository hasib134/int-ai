'use server';
import { db } from "@/firebase/admin";
// import { cookies } from "next/headers";
import { collection } from "firebase/firestore";

export async function sugnUp(params:SignUpParams) {
    const {uid,name,email} = params;
    try{
        const userRecord = await db.collection('users').doc(uid).get();

        if(userRecord.exists){
            return{
                success:false,
                message : 'User already exists.Please sign in instead'
            }
        }

        await db.collection('users').doc(uid).set({
            name,email
        })
    }
    catch(err:any){
        console.log("Error creating a user",err);
        if(err.code==='auth/email-already-exists'){
            return{
                success:false,
                message:'This email already in use' 
            }
        }
        return{
            success:false,
            message :"Failed to create an account"
        }
    }
}