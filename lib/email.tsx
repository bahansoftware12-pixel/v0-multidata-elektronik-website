import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_FROM,
    pass: process.env.MAIL_PASSWORD,
  },
})

export async function sendAdminNotification(contact: any) {
  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: 'multidataelectronik@gmail.com',
      subject: `Pesan Baru dari Website - ${contact.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #3dd68c; color: white; padding: 20px; text-align: center; border-radius: 8px; }
            .content { background: #f9f9f9; padding: 20px; margin-top: 20px; border-radius: 8px; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
            .info { margin: 10px 0; }
            strong { color: #333; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Pesan Baru dari Website</h2>
            </div>
            <div class="content">
              <div class="info"><strong>Nama:</strong> ${contact.name}</div>
              <div class="info"><strong>Email:</strong> ${contact.email}</div>
              <div class="info"><strong>No. HP:</strong> ${contact.phone}</div>
              <div class="info"><strong>Pesan:</strong></div>
              <p>${contact.message.replace(/\n/g, '<br>')}</p>
              <hr>
              <p style="font-size: 12px; color: #666;">Dikirim pada: ${new Date().toLocaleString('id-ID')}</p>
            </div>
            <div class="footer">
              <p>MULTIDATA Elektronik - Sistem Notifikasi Otomatis</p>
            </div>
          </div>
        </body>
        </html>
      `,
    })
    return { success: true }
  } catch (error) {
    console.error('Email error:', error)
    return { success: false, error }
  }
}

export async function sendAutoReply(contact: any) {
  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: contact.email,
      subject: 'Terima Kasih - MULTIDATA Elektronik',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #3dd68c; color: white; padding: 20px; text-align: center; border-radius: 8px; }
            .content { padding: 20px; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Terima Kasih!</h2>
            </div>
            <div class="content">
              <p>Halo <strong>${contact.name}</strong>,</p>
              <p>Terima kasih telah menghubungi kami. Pesan Anda telah kami terima dan akan kami proses sesegera mungkin.</p>
              <p><strong>Ringkasan Pesan Anda:</strong></p>
              <p style="background: #f0f0f0; padding: 15px; border-left: 4px solid #3dd68c; border-radius: 4px;">
                ${contact.message.replace(/\n/g, '<br>')}
              </p>
              <p>Tim kami akan menghubungi Anda melalui email atau telepon dalam waktu 1x24 jam.</p>
              <p>Untuk respon lebih cepat, Anda juga bisa menghubungi kami via WhatsApp di <strong>+62 812-4304-9073</strong>.</p>
              <p>Salam hangat,<br><strong>Tim MULTIDATA Elektronik</strong></p>
            </div>
            <div class="footer">
              <p>© 2025 MULTIDATA Elektronik. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    })
    return { success: true }
  } catch (error) {
    console.error('Email error:', error)
    return { success: false, error }
  }
}
