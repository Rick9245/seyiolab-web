
import { NextResponse } from "next/server";
import { Resend } from "resend";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const company = String(body.company || "").trim();
    const message = String(body.message || "").trim();
    if (name.length < 2) return NextResponse.json({ error: "Merci d’indiquer votre nom." }, { status: 400 });
    if (!emailRegex.test(email)) return NextResponse.json({ error: "Merci d’indiquer un email valide." }, { status: 400 });
    if (message.length < 20) return NextResponse.json({ error: "Merci de détailler votre demande." }, { status: 400 });
    if (!process.env.RESEND_API_KEY) return NextResponse.json({ error: "Le formulaire n’est pas encore configuré." }, { status: 500 });
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Seyio Lab <onboarding@resend.dev>",
      to: "contact@seyiolab.com",
      replyTo: email,
      subject: `Nouveau contact Seyio Lab — ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\nEntreprise: ${company || "-"}\n\nMessage:\n${message}`,
      html: `<h2>Nouveau message depuis seyiolab.com</h2><p><strong>Nom :</strong> ${name}</p><p><strong>Email :</strong> ${email}</p><p><strong>Entreprise :</strong> ${company || "-"}</p><p><strong>Message :</strong></p><p>${message.replace(/\n/g, "<br />")}</p>`
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Impossible d’envoyer le message pour le moment." }, { status: 500 });
  }
}
