import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

export async function POST(req: Request) {
    if (req.method === "POST") {
  
      try {
  
      const {
        first_name,
        last_name,
        email,
        phone,
        company_name,
        help,
        info,
      } = await req.json();
  
  
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: "projectsceptre@gmail.com",
            pass: "lrfo vnay hzft unvn",
          },
        });
  
        const mailOptions = {
          from: email,
          to: "projectsceptre@gmail.com",
          subject: "Contact Form Submission",
          html: `
                      <h1>Contact Form</h1>
                      <p>First Name: ${first_name}</p>
                      <p>Last Name: ${last_name}</p>
                      <p>Work Email: ${email}</p>
                  
                      <p>Company Name: ${company_name}</p>
                      <p>Phone Number: ${phone}</p>
                      <p>Help: ${help}</p>
                  
                      <p>Info: ${info}</p>
                  `,
        };
  
   
        await transporter.sendMail(mailOptions);
  
        return NextResponse.json("email has been sent");
      } catch (error) {
        return NextResponse.json("email has not been sent");
      }
    } else {
      return NextResponse.json('method not allowed');
    }
  
  }
  