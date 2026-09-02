import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { success: false, message: 'Corpo da requisição inválido' },
      { status: 400 }
    )
  }

  if (typeof body !== 'object' || body === null) {
    return NextResponse.json(
      { success: false, message: 'Corpo da requisição inválido' },
      { status: 400 }
    )
  }

  const { name, email, message, phone } = body as Record<string, unknown>

  if (
    typeof name !== 'string' || !name.trim() ||
    typeof email !== 'string' || !email.trim() ||
    typeof message !== 'string' || !message.trim() ||
    (phone !== undefined && typeof phone !== 'string')
  ) {
    return NextResponse.json(
      { success: false, message: 'Nome, email e mensagem são obrigatórios' },
      { status: 400 }
    )
  }

  const emailRegex = /^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']+$/
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { success: false, message: 'Email inválido' },
      { status: 400 }
    )
  }

  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safePhone = phone ? escapeHtml(phone) : ''
  const safeMessage = escapeHtml(message)

  try {
    await transporter.sendMail({
      from: `"Stone Gym" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_RECIPIENT,
      replyTo: email,
      subject: `Nova mensagem de ${name} — Stone Gym`.replace(/[\r\n]/g, ' '),
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
                <td style="padding:10px 0;color:#fff;font-size:14px">${safeName}</td>
              </tr>
              <tr style="border-top:1px solid rgba(255,255,255,0.06)">
                <td style="padding:10px 0;color:rgba(255,255,255,0.4);font-size:11px;text-transform:uppercase;letter-spacing:2px">E-mail</td>
                <td style="padding:10px 0;color:#C4B5FD;font-size:14px"><a href="mailto:${safeEmail}" style="color:#C4B5FD">${safeEmail}</a></td>
              </tr>
              ${safePhone ? `<tr style="border-top:1px solid rgba(255,255,255,0.06)">
                <td style="padding:10px 0;color:rgba(255,255,255,0.4);font-size:11px;text-transform:uppercase;letter-spacing:2px">Telefone</td>
                <td style="padding:10px 0;color:#fff;font-size:14px">${safePhone}</td>
              </tr>` : ''}
              <tr style="border-top:1px solid rgba(255,255,255,0.06)">
                <td style="padding:10px 0;color:rgba(255,255,255,0.4);font-size:11px;text-transform:uppercase;letter-spacing:2px;vertical-align:top">Mensagem</td>
                <td style="padding:10px 0;color:rgba(255,255,255,0.8);font-size:14px;line-height:1.6">${safeMessage.replace(/\n/g, '<br/>')}</td>
              </tr>
            </table>
          </div>
          <div style="padding:16px 32px;border-top:1px solid rgba(255,255,255,0.06);text-align:center;color:rgba(255,255,255,0.2);font-size:11px">
            © ${new Date().getFullYear()} Stone Gym. Responda diretamente a este e-mail para contatar ${safeName}.
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
