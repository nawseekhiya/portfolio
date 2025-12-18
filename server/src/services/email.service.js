import { Resend } from 'resend';
import { env } from '../config/env.js';

const resend = env.RESEND_API_KEY ? new Resend(env.RESEND_API_KEY) : null;

/**
 * Generate styled HTML email template - Light mode
 */
const generateEmailHTML = ({ name, email, subject, message }) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f5; padding: 48px 20px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="max-width: 560px;">
          
          <!-- Header -->
          <tr>
            <td style="padding-bottom: 32px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="font-size: 18px; font-weight: 700; color: #18181b; letter-spacing: -0.02em;">
                      Abhishek Mohanty<span style="color: #3b82f6;">.</span>
                    </span>
                  </td>
                  <td align="right">
                    <span style="display: inline-block; background: rgba(34,197,94,0.1); color: #16a34a; font-size: 11px; padding: 6px 14px; border-radius: 100px; font-weight: 500; border: 1px solid rgba(34,197,94,0.2);">
                      New Inquiry
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Card -->
          <tr>
            <td>
              <table width="100%" cellpadding="0" cellspacing="0" style="background: #ffffff; border-radius: 20px; border: 1px solid #e4e4e7; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                
                <!-- Subject -->
                <tr>
                  <td style="padding: 28px 28px 0 28px;">
                    <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 500; color: #71717a; text-transform: uppercase; letter-spacing: 0.5px;">Regarding</p>
                    <p style="margin: 0; font-size: 18px; font-weight: 600; color: #18181b;">${subject}</p>
                  </td>
                </tr>

                <!-- Sender -->
                <tr>
                  <td style="padding: 24px 28px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="44" valign="top">
                          <div style="width: 44px; height: 44px; background: #3b82f6; border-radius: 50%; text-align: center; line-height: 44px;">
                            <span style="color: white; font-size: 18px; font-weight: 600;">${name.charAt(0).toUpperCase()}</span>
                          </div>
                        </td>
                        <td style="padding-left: 14px;" valign="center">
                          <p style="margin: 0 0 2px 0; font-size: 15px; font-weight: 600; color: #18181b;">${name}</p>
                          <p style="margin: 0; font-size: 13px; color: #71717a;">wants to connect with you</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Divider -->
                <tr>
                  <td style="padding: 0 28px;">
                    <div style="height: 1px; background: #e4e4e7;"></div>
                  </td>
                </tr>

                <!-- Message -->
                <tr>
                  <td style="padding: 24px 28px 28px 28px;">
                    <p style="margin: 0; font-size: 14px; line-height: 1.75; color: #52525b; white-space: pre-wrap;">${message}</p>
                  </td>
                </tr>

                <!-- Reply Button -->
                <tr>
                  <td style="padding: 0 28px 28px 28px;">
                    <a href="mailto:${email}?subject=Re: ${subject}" style="display: inline-block; background: #3b82f6; color: white; font-size: 13px; font-weight: 600; padding: 12px 24px; border-radius: 10px; text-decoration: none;">
                      Reply to ${name.split(' ')[0]} →
                    </a>
                    <span style="display: inline-block; margin-left: 16px; font-size: 13px; color: #71717a;">${email}</span>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding-top: 32px; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #a1a1aa;">
                Someone reached out via your portfolio
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

/**
 * Send notification email when a new contact form is submitted
 */
export const sendContactNotification = async ({ name, email, subject, message }) => {
  if (!resend) {
    console.warn('⚠️  RESEND_API_KEY not set, skipping email notification');
    return null;
  }

  try {
    const result = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: env.NOTIFICATION_EMAIL || 'your-email@example.com',
      replyTo: email,
      subject: `New Contact: ${subject}`,
      html: generateEmailHTML({ name, email, subject, message }),
    });

    console.log(`📧 Email sent successfully (ID: ${result.data?.id})`);
    return result;

  } catch (error) {
    console.error('❌ Failed to send email:', error.message);
    return null;
  }
};
