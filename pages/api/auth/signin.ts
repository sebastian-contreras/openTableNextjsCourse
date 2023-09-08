import { userWithEmail } from "@/app/services/fetch";
import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import bcrypt from "bcrypt";
import * as jose from "jose";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    const { email, password } = req.body;
    const errors: string[] = [];
    const validatorSchema = [
      {
        valid: validator.isEmail(email),
        errorMessage: "Email is invalid",
      },
      {
        valid: validator.isLength(password, { min: 3 }),
        errorMessage: "Password is Invalid",
      },
    ];
    validatorSchema.forEach((error) => {
      if (!error.valid) errors.push(error.errorMessage);
    });
    if (errors.length) {
      return res.status(400).json({ errorMessage: errors[0] });
    }

    const userLog = await userWithEmail(email);
    if (userLog == null) {
      return res.status(401).json({ errorMessage: "Email or password invalid" });
    } else {
      const isMatch = await bcrypt.compare(password, userLog.password);
      if (!isMatch) {
        return res.status(401).json({ errorMessage: "Email or password invalid" });
      }
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      const alg = "HS256";
      const token = await new jose.SignJWT({ email: userLog.email })
        .setProtectedHeader({ alg })
        .setExpirationTime("24h")
        .sign(secret);
      return res.status(200).json({
        token,
      });
    }
  }
  return res.status(404).json("Unknow endpoint");
}
