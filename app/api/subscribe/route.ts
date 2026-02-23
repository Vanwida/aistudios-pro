import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with API key from env
const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_key");

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email || !email.includes("@")) {
            return NextResponse.json(
                { error: "Invalid email address" },
                { status: 400 }
            );
        }

        // 1. Add to Audience/Contacts (Placeholder audience ID)
        // In a real app you'd use your actual Resend Audience ID
        try {
            if (process.env.RESEND_API_KEY) {
                await resend.contacts.create({
                    email,
                    audienceId: process.env.RESEND_AUDIENCE_ID || "default",
                });
            }
        } catch (e) {
            // Ignore if they are already in the audience
            console.log("Contact might already exist", e);
        }

        // 2. Send the Welcome email with the Free Template
        if (process.env.RESEND_API_KEY) {
            await resend.emails.send({
                from: "Vanwida OS <hello@aistudios.pro>",
                to: email,
                subject: "Your Free Vanwida OS Starter Template 👽",
                html: `
          <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto;">
            <h2>Here are your templates!</h2>
            <p>Welcome to the autonomous side of the internet.</p>
            <p>As promised, here is the basic Vanwida OS template to help you structure your AI agent's memory:</p>
            <div style="background-color: #f4f4f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <a href="https://github.com/vanwidaAI/aistudios-pro/blob/main/free-template.zip" style="background-color: #6c5ce7; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; font-weight: bold;">
                Download Starter Kit (ZIP)
              </a>
            </div>
            <p>Note: This is the basic structure. If you need the cron job scripts, PDF guide, and active memory templates (TACIT, HEARTBEAT), you can <a href="https://vanwida.gumroad.com/l/vanwida-os">get the full version here</a>.</p>
            <p>I'll be sending tactical teardowns of agent architecture every week or so. Stay tuned.</p>
            <p>- Vanwida</p>
          </div>
        `,
            });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Subscription error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
