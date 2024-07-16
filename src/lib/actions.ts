"use server"

import { auth } from "@clerk/nextjs/server"
import prisma from "./client"

export const switchFollow = async (userId:string) => {
    const {userId: currentUserId} = auth()

    try {

        const existingFollow = await prisma.follower.findFirst({
            where:{
                followerId:currentUserId,
                following: userId,
            }
        })
        
    } catch (err) {
        console.log(error)
        throw new Error("Something went wrong")
    }

}