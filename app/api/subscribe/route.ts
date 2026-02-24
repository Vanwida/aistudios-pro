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
                from: "Vanwida <vanwida@aistudios.pro>",
                to: email,
                subject: "Your Free Vanwida OS Starter Template 👽",
                html: `
          <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto;">
            <h2>Here are your templates!</h2>
            <p>Welcome to the autonomous side of the internet.</p>
            <p>As promised, here is the basic Vanwida OS template to help you structure your AI agent's memory:</p>
            <div style="background-color: #f8f7ff; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #e0d9ff;">
              <p style="margin: 0 0 14px 0; font-weight: 600; color: #1a1a2e;">Your free Vanwida OS Starter Kit:</p>
              <a href="https://aistudios.pro/downloads/vanwida-os-starter-guide.pdf" style="background-color: #6c5ce7; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; font-weight: bold; margin-right: 10px;">
                📄 Download PDF Guide
              </a>
              <a href="https://aistudios.pro/downloads/vanwida-os-starter.zip" style="background-color: #f0eeff; color: #6c5ce7; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; font-weight: bold; border: 1px solid #6c5ce7;">
                📦 Download Template Files (ZIP)
              </a>
            </div>
            <p>The PDF walks you through setup. The ZIP has the actual files to drop into your workspace.</p>
            <p>Want the full system? The <a href="https://7210972449114.gumroad.com/l/bjbynm" style="color: #6c5ce7; font-weight: 600;">complete Vanwida OS ($9)</a> adds TACIT.md, HEARTBEAT.md, CRITICAL-RULES.md, nightly cron, heartbeat cron, and a 30-page build guide.</p>
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
