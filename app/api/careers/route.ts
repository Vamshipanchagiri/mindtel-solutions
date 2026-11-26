
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const data = await req.formData();

    if (data.get("website")) {
      return NextResponse.json({ ok: true });
    }

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (
      name.length < 2 ||
      !/^\S+@\S+\.\S+$/.test(email) ||
      message.length < 10 ||
      !data.get("consent")
    ) {
      return NextResponse.json(
        { error: "Please complete the required fields." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          error:
            "Email delivery is not configured yet. Please email info@mindtelsolutions.in directly.",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const file = data.get("resumeFile");

    if (file instanceof File && file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: "Resume file must be 5 MB or smaller." },
        { status: 400 }
      );
    }

    if (
      file instanceof File &&
      file.size > 0 &&
      ![
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(file.type)
    ) {
      return NextResponse.json(
        { error: "Please upload a PDF, DOC or DOCX resume." },
        { status: 400 }
      );
    }

    const fields = [
      "name",
      "email",
      "phone",
      "role",
      "links",
      "resume",
      "message",
    ]
      .map((key) => `${key}: ${String(data.get(key) || "—")}`)
      .join("\n");

    const attachments: { filename: string; content: string }[] = [];

    if (file instanceof File && file.size > 0) {
      const bytes = Buffer.from(await file.arrayBuffer());

      attachments.push({
        filename: file.name,
        content: bytes.toString("base64"),
      });
    }

    const fromAddress =
      process.env.EMAIL_FROM || "Mindtel Website <onboarding@resend.dev>";

    const toAddress =
      process.env.CONTACT_TO || "info@mindtelsolutions.in";

    const { error } = await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      replyTo: email,
      subject: `Careers enquiry: ${name}`,
      text: fields,
      attachments,
    });

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Careers form error:", error);

    return NextResponse.json(
      { error: "Unable to submit your application. Please try again." },
      { status: 500 }
    );
  }
}
