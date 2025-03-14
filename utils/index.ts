// "use server";
// import nodemailer from "nodemailer";
// import SMTPTransport from "nodemailer/lib/smtp-transport";
// export const onSendEmail = async (
//   name: string,
//   email: string,
//   subject: string,
//   message: string
// ) => {
//   if (name === "" || email === "" || message === "") {
//     return console.log("All field is required");
//   }

//   try {
//     const transporter = nodemailer.createTransport(
//       new SMTPTransport({
//         service: "gmail",
//         auth: {
//           user: process.env.EMAIL_USER!,
//           pass: process.env.EMAIL_PASS!,
//         },
//       })
//     );

//     const mailOptions = {
//       from: email,
//       to: process.env.EMAIL_TO!,
//       subject: `${subject}`,
//       text: message,
//       html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
//     };

//     await transporter.sendMail(mailOptions);
//     console.log("email berhasil terkirim");
//   } catch (error) {
//     console.log("gagal mengirim email");
//   }
// };
