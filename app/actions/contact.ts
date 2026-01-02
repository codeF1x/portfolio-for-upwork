"use server";

import { z } from "zod";
import { Resend } from "resend";
import { contactConfig } from "@/lib/config";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  type: z.string().min(1, "Project type is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    type: formData.get("type"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please check your inputs.",
    };
  }

  const { name, email, type, message } = validatedFields.data;

  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Use default Resend testing domain or your verified domain
      to: contactConfig.email, // Send to your configured email
      subject: `New Project Inquiry: ${type} from ${name}`,
      replyTo: email,
      text: `
        Name: ${name}
        Email: ${email}
        Project Type: ${type}
        
        Message:
        ${message}
      `,
    });

    if (data.error) {
      console.error("Resend error:", data.error);
      return {
        success: false,
        message: "Failed to send message. Please try again later.",
      };
    }

    return {
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    };
  } catch (error) {
    console.error("Submission error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
