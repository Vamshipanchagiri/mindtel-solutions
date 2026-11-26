# Mindtel Solutions website

A complete, responsive Next.js website based on the supplied Mindtel Solutions rebuild blueprint.

## Requirements
- Node.js 20.9 or newer
- npm
- A Resend account/API key for form email delivery

## Run locally
```bash
npm install
cp .env.example .env.local
npm run dev
```
Open http://localhost:3000.

## Configure form email
1. Create an account at https://resend.com and verify a sending domain.
2. Create an API key.
3. Set `RESEND_API_KEY` in `.env.local` or your hosting provider's environment variables.
4. Set `EMAIL_FROM` to an address on your verified domain (for example, `Mindtel Website <website@mindtelsolutions.in>`).
5. Keep `CONTACT_TO=info@mindtelsolutions.in` or change it to the approved inbox.

The contact and careers forms validate required fields, include a honeypot field and send submissions to the configured inbox. The careers form accepts an optional PDF, DOC or DOCX resume attachment (maximum 5 MB) or a shareable resume link. Attachments are sent to the configured inbox through Resend; confirm your email provider attachment limits before launch. Do not expose API keys in client-side variables.

## Deploy with Vercel
1. Push this folder to a GitHub repository.
2. Import the repository at https://vercel.com/new.
3. Add the environment variables from `.env.example` in Project Settings → Environment Variables.
4. Deploy. Vercel detects Next.js automatically.
5. Add `mindtelsolutions.in` and `www.mindtelsolutions.in` in Domains, choose one canonical domain and configure the DNS records Vercel provides.
6. Update `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS domain and redeploy.

## Deploy on another Node host
```bash
npm install
npm run build
npm start
```
Run behind HTTPS with a process manager/reverse proxy. The API routes require a Node.js runtime and the environment variables above; a purely static export will not run the form endpoints.

## Before launch
- Confirm company copy, service scope and technology lists against actual delivery capabilities.
- Confirm legal terms and privacy practices with a lawyer. The included legal pages are drafts.
- Confirm whether support, code ownership and NDA terms match company policy.
- Add approved phone, WhatsApp, LinkedIn and business-hours details if available.
- Verify the sending domain in Resend and test both forms end-to-end.
- Test keyboard navigation, mobile layouts, all internal links and page metadata.
- Configure Google Search Console and submit `/sitemap.xml`.
- Add real case studies only when permission and evidence are available.

## Routes
Home, About, Services (10 detail pages), Industries (8 detail pages), Work (2 concept pages), Insights (4 articles), Careers, Contact, Contact thank-you, FAQ, Privacy Policy, Terms & Conditions, and a custom 404 page.

## Notes
- The two work items are explicitly labelled solution concepts, not client case studies.
- No client names, testimonials, awards, certifications, founding year or team statistics have been fabricated.
- Technologies are presented as options to confirm, not as verified company credentials.
