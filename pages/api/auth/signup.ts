import { NewUser, userWithEmail } from "@/app/services/fetch";
import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import * as jose from "jose"
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const prisma = new PrismaClient();
  if (req.method == "POST") {
    const errors: string[] = [];
    const { firstName, lastName, city, password, email, phone } = req.body;
    const validatorSchema = [
      {
        valid: validator.isLength(firstName, {
          min: 1,
          max: 20,
        }),
        errorMesage: "First name is invalid",
      },
      {
        valid: validator.isLength(lastName, {
          min: 1,
          max: 20,
        }),
        errorMesage: "Last name is invalid",
      },
      {
        valid: validator.isEmail(email),
        errorMesage: "Email is invalid",
      },
      {
        valid: validator.isLength(city, { min: 1 }),
        errorMesage: "City is invalid",
      },
      {
        valid: validator.isMobilePhone(phone),
        errorMesage: "Phone is invalid",
      },
      {
        valid: validator.isLength(password, { min: 6 }),
        errorMesage: "Password is invalid",
      },
    ];

    validatorSchema.forEach((check) => {
      if (!check.valid) {
        errors.push(check.errorMesage);
      }
    });
    if (errors.length) {
      return res.status(400).json({
        errorMesage: errors[0],
      });
    }

    const user = await userWithEmail(email);
    if (user) {
      return  res.status(400).json({
        errorMesage: "Email is associated with another account",
      });
    }
    const hashPassword = await bcrypt.hash(password,10)
    const userNew = await NewUser(firstName, lastName, city, hashPassword, email, phone)
    
        const secret = new TextEncoder().encode(process.env.JWT_SECRET)
        const alg = "HS256"
        const token = await new jose.SignJWT({email:userNew.email}).setProtectedHeader({alg}).setExpirationTime("24h").sign(secret)
    return res.status(200).json({
      token,
    });
  }
  return res.status(404).json("Unknow endpoint");
}
