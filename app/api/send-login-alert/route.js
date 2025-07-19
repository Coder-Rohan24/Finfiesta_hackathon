
import { Recipient, EmailParams, MailerSend,Sender } from "mailersend";
import UserAgent from "user-agent";
export async function POST(req) {
  try {
    // Parse request body
    const body = await req.json();
    const { email, name } = body;

   
    // Get IP address from headers (works on Vercel & Next.js API routes)
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0] : req.connection?.remoteAddress ||"Unknown IP"; // Get first IP in list
    const userAgent = UserAgent.parse(req.headers.get("user-agent"));

    const deviceInfo = `${userAgent.platform} - ${userAgent.browser} (${userAgent.version})`;

    // Initialize MailerSend
    const mailersend = new MailerSend({
      apiKey: process.env.MAILERSEND_API_KEY, // Set in .env.local
    });
    const sentFrom=new Sender("thefinalcall2025@trial-yzkq340vmw2ld796.mlsender.net","FinFiesta");
    const recipients = [new Recipient(email, name)];

    // Email content
    const emailParams = new EmailParams()
      .setFrom(sentFrom) // Replace with verified email
      .setTo(recipients)
      .setSubject("🔔 Login Alert - Your Account Was Accessed")
      .setHtml(`
        <h3>Hello ${name},</h3>
        <p>A new login was detected on your account.</p>
        <p><strong>IP Address:</strong> ${ip}</p>
        <p><strong>Device:</strong> ${deviceInfo}</p>
        <p>If this wasn't you, please change your password immediately.</p>
        <p>Best, <br/> Your Security Team</p>
      `)
      .setText(`
        Hello ${name},
        A new login was detected on your account.

        IP Address: ${ip}
        Device: ${deviceInfo}

        If this wasn't you, please change your password immediately.

        Best,
        Your Security Team
      `);

    // Send email
    await mailersend.email.send(emailParams);

    return Response.json({ message: "Login alert sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return Response.json({ error: "Failed to send login alert" }, { status: 500 });
  }
}
