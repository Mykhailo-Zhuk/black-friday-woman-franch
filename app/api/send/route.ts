import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();

  const newClient = {
    firstName: body.firstName,
    phoneNumber: body.phoneNumber,
    email: body.email,
    message: body.message ?? undefined,
  };

  try {
    const { data, error } = await resend.emails.send({
      from: "Black Friday WF <onboarding@resend.dev>",
      to: ["cryptostudent2@gmail.com"],
      subject: "Новий клієнт",
      react: EmailTemplate(newClient),
    });

    if (error) {
      return new Response(JSON.stringify({ error, status: 500 }));
    }

    return new Response(JSON.stringify(data));
  } catch (error) {
    return new Response(JSON.stringify({ error, status: 500 }));
  }
}
