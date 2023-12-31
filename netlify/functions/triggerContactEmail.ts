import type { Handler } from "@netlify/functions";
import fetch from "node-fetch";

const handler: Handler = async function(event) {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required"),
    };
  }

  const requestBody = JSON.parse(event.body) as {
  contactNumber: string; // Correspond à "contact_number" dans le formulaire
  userName: string;      // Correspond à "user_name"
  userEmail: string;     // Correspond à "user_mail"
  userPhone: string;     // Correspond à "user_phone"
  demande: string;       // Correspond à "demande"
  message: string;       // Correspond à "message"
  };

  //automatically generated snippet from the email preview
  //@ts-ignore
  await fetch(`${process.env.URL}/.netlify/functions/emails/contactus`, {
    headers: {
      //@ts-ignore
      "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET as string,
    },
    method: "POST",
    body: JSON.stringify({
      from: "contact@medecine-esthetique.re",
      to: "contact@medecine-esthetique.re",
      subject: "Vous avez un nouveau message : " + requestBody.demande,
      parameters: {
        userName: requestBody.userName,
        userEmail: requestBody.userEmail,
        userPhone: requestBody.userPhone,
        demande: requestBody.demande,
        message: requestBody.message
      },
    }),
  });

  return {
    statusCode: 200,
    body: JSON.stringify("Message envoyé"),
  };
};

export { handler };