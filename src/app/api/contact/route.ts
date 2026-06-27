import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

export async function POST(request: Request) {
  const body = await request.json()
  const { name, email, message, phone } = body

  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, message: 'Nome, email e mensagem são obrigatórios' },
      { status: 400 }
    )
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { success: false, message: 'Email inválido' },
      { status: 400 }
    )
  }

  try {
    await transporter.sendMail({
      from: `"Stone Gym" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_RECIPIENT,
      replyTo: email,
      subject: `Nova mensagem de ${name} — Stone Gym`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;background:#0a0a0a;color:#fff;border-radius:16px;overflow:hidden">
          <div style="background:linear-gradient(135deg,#1e0a3c,#3b0764);padding:32px;text-align:center">
            <h1 style="margin:0;font-size:28px;letter-spacing:4px;color:#fff">STONE TRAINING</h1>
            <p style="margin:8px 0 0;color:rgba(255,255,255,0.5);font-size:12px;letter-spacing:2px">NOVA MENSAGEM DE CONTATO</p>
          </div>
          <div style="padding:32px">
            <table style="width:100%;border-collapse:collapse">
              <tr>
                <td style="padding:10px 0;color:rgba(255,255,255,0.4);font-size:11px;text-transform:uppercase;letter-spacing:2px;width:100px">Nome</td>
                <td style="padding:10px 0;color:#fff;font-size:14px">${name}</td>
              </tr>
              <tr style="border-top:1px solid rgba(255,255,255,0.06)">
                <td style="padding:10px 0;color:rgba(255,255,255,0.4);font-size:11px;text-transform:uppercase;letter-spacing:2px">E-mail</td>
                <td style="padding:10px 0;color:#C4B5FD;font-size:14px"><a href="mailto:${email}" style="color:#C4B5FD">${email}</a></td>
              </tr>
              ${phone ? `<tr style="border-top:1px solid rgba(255,255,255,0.06)">
                <td style="padding:10px 0;color:rgba(255,255,255,0.4);font-size:11px;text-transform:uppercase;letter-spacing:2px">Telefone</td>
                <td style="padding:10px 0;color:#fff;font-size:14px">${phone}</td>
              </tr>` : ''}
              <tr style="border-top:1px solid rgba(255,255,255,0.06)">
                <td style="padding:10px 0;color:rgba(255,255,255,0.4);font-size:11px;text-transform:uppercase;letter-spacing:2px;vertical-align:top">Mensagem</td>
                <td style="padding:10px 0;color:rgba(255,255,255,0.8);font-size:14px;line-height:1.6">${message.replace(/\n/g, '<br/>')}</td>
              </tr>
            </table>
          </div>
          <div style="padding:16px 32px;border-top:1px solid rgba(255,255,255,0.06);text-align:center;color:rgba(255,255,255,0.2);font-size:11px">
            © ${new Date().getFullYear()} Stone Gym. Responda diretamente a este e-mail para contatar ${name}.
          </div>
        </div>
      `,
    })

    return NextResponse.json({
      success: true,
      message: 'Mensagem enviada! Entraremos em contato em breve.',
    })
  } catch (err) {
    console.error('Erro ao enviar e-mail:', err)
    return NextResponse.json(
      { success: false, message: 'Erro ao enviar mensagem. Tente novamente.' },
      { status: 500 }
    )
  }
}
