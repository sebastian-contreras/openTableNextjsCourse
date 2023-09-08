import { NextApiRequest, NextApiResponse } from "next";
import * as jose from "jose"
import jwt from "jsonwebtoken"
import { userWithEmail, userWithEmailPublic } from "@/app/services/fetch";
interface userInc{
    id: number,
    firstName: string,
    lastName: string,
    city: string,
    email: string,
    phone: string
}
export default async function handler(req:NextApiRequest,res:NextApiResponse) {
    const bearerToken = req.headers["authorization"] as string
    if(!bearerToken){
        return res.status(401).json("No existe el header")
    }
    const token = bearerToken.split(" ")[1]
    if(!token){
        return res.status(401).json("No existe el token")
    }
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    try {
        await jose.jwtVerify(token,secret)
    } catch (error) {
        return res.status(401).json("Acceso no permitido")
    }
    const payload = jwt.decode(token) as {email:string}
    if(!payload.email){
        return res.status(401).json("Acceso no permitido email")
    }

    const user = await userWithEmailPublic(payload.email)
    return res.status(200).json(user)
}