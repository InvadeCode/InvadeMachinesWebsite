import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (value = '') =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({
      success: false,
      message: 'Method not allowed.',
    });
  }

  try {
    const {
      name = '',
      email = '',
      requirement = '',
      message = '',
      website = '',
    } = request.body || {};

    // Honeypot field. Bots may fill this; genuine visitors will not.
    if (website) {
      return response.status(200).json({ success: true });
    }

    const cleanName = String(name).trim();
    const cleanEmail = String(email).trim().toLowerCase();
    const cleanRequirement = String(requirement).trim();
    const cleanMessage = String(message).trim();

    if (
      !cleanName ||
      !cleanEmail ||
      !cleanRequirement ||
      !cleanMessage
    ) {
      return response.status(400).json({
        success: false,
        message: 'Please complete all required fields.',
      });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(cleanEmail)) {
      return response.status(400).json({
        success: false,
        message: 'Please enter a valid email address.',
      });
    }

    if (
      cleanName.length > 120 ||
      cleanEmail.length > 180 ||
      cleanRequirement.length > 250 ||
      cleanMessage.length > 5000
    ) {
      return response.status(400).json({
        success: false,
        message: 'One or more fields are too long.',
      });
    }

    const { data, error } = await resend.emails.send({
      from:
        process.env.CONTACT_FROM_EMAIL ||
        'Invade Machines Website <noreply@emails.liaisonit.com>',

      to: [
        process.env.CONTACT_TO_EMAIL ||
          'info@invademachines.com',
      ],

      replyTo: cleanEmail,

      subject: `Website inquiry: ${cleanRequirement}`,

      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#12372f;max-width:680px;margin:auto;">
          <h2 style="margin-bottom:24px;">
            New Invade Machines Website Inquiry
          </h2>

          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px;border-bottom:1px solid #ddd;"><strong>Name</strong></td>
              <td style="padding:10px;border-bottom:1px solid #ddd;">${escapeHtml(cleanName)}</td>
            </tr>

            <tr>
              <td style="padding:10px;border-bottom:1px solid #ddd;"><strong>Email</strong></td>
              <td style="padding:10px;border-bottom:1px solid #ddd;">${escapeHtml(cleanEmail)}</td>
            </tr>

            <tr>
              <td style="padding:10px;border-bottom:1px solid #ddd;"><strong>Requirement</strong></td>
              <td style="padding:10px;border-bottom:1px solid #ddd;">${escapeHtml(cleanRequirement)}</td>
            </tr>
          </table>

          <h3 style="margin-top:28px;">Message</h3>

          <p style="white-space:pre-wrap;background:#f3faf7;padding:18px;border-radius:10px;">
            ${escapeHtml(cleanMessage)}
          </p>
        </div>
      `,

      text: `
New Invade Machines Website Inquiry

Name: ${cleanName}
Email: ${cleanEmail}
Requirement: ${cleanRequirement}

Message:
${cleanMessage}
      `.trim(),
    });

    if (error) {
      console.error('Resend error:', error);

      return response.status(500).json({
        success: false,
        message: 'The inquiry could not be sent.',
      });
    }

    return response.status(200).json({
      success: true,
      message: 'Your inquiry has been sent successfully.',
      id: data?.id,
    });
  } catch (error) {
    console.error('Contact API error:', error);

    return response.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.',
    });
  }
}
