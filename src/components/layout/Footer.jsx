import { Link } from "react-router";
import { Clock, Globe, Mail } from "lucide-react";
import Logo from "../ui/Logo.jsx";
import { Container } from "../ui/Section.jsx";
import { SafeLink, Text } from "../ui/Placeholder.jsx";
import { FacebookIcon, InstagramIcon, LinkedInIcon, TikTokIcon, WhatsAppIcon, XIcon } from "../../lib/icons.jsx";
import { AGENCY_NAME, footerNav, isPlaceholder, site, whatsappUrl } from "../../data/site.js";
import { services } from "../../data/services.js";

// Social links still set to a [PLACEHOLDER] show dimmed and are not clickable.
// A link set to null is left out.
const socials = [
  { label: "Instagram", href: site.socials.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: site.socials.facebook, Icon: FacebookIcon },
  { label: "LinkedIn", href: site.socials.linkedin, Icon: LinkedInIcon },
  { label: "TikTok", href: site.socials.tiktok, Icon: TikTokIcon },
  { label: "X", href: site.socials.x, Icon: XIcon },
].filter((s) => s.href);

function FooterColumn({ title, links }) {
  return (
    <div>
      <h2 className="font-display text-sm font-semibold tracking-wide text-white">{title}</h2>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link to={l.href} className="text-sm text-primary-300 transition hover:text-accent-300">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const emailHref = isPlaceholder(site.email) ? site.email : `mailto:${site.email}`;

  return (
    <footer className="bg-primary-900 text-primary-300">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo dark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">{site.tagline}.</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 text-accent-400" aria-hidden="true" />
                <SafeLink href={emailHref} className="hover:text-accent-300">
                  <Text>{site.email}</Text>
                </SafeLink>
              </li>
              {site.whatsapp?.number && (
                <li className="flex items-center gap-2.5">
                  <WhatsAppIcon className="size-4 text-accent-400" />
                  <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-accent-300">
                    {site.whatsapp.display}
                  </a>
                </li>
              )}
              <li className="flex items-center gap-2.5">
                <Globe className="size-4 text-accent-400" aria-hidden="true" />
                {site.serviceArea}
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 size-4 shrink-0 text-accent-400" aria-hidden="true" />
                {site.hours}
              </li>
            </ul>
            <ul className="mt-6 flex gap-3" aria-label="Social media">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <SafeLink
                    href={href}
                    aria-label={isPlaceholder(href) ? `${label} (coming soon)` : label}
                    className="flex size-10 items-center justify-center rounded-full border border-white/10 text-primary-200 transition hover:border-accent-400 hover:text-accent-300"
                  >
                    <Icon className="size-4" />
                  </SafeLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            <FooterColumn
              title="Services"
              links={services.map((s) => ({ label: s.title, href: `/services/${s.slug}` }))}
            />
            <FooterColumn title="Company" links={footerNav.company} />
            <div>
              <h2 className="font-display text-sm font-semibold tracking-wide text-white">Get started</h2>
              <p className="mt-5 text-sm leading-relaxed">{site.cta.note}</p>
              <Link
                to={site.cta.href}
                className="mt-4 inline-block text-sm font-semibold text-accent-300 underline-offset-4 hover:underline"
              >
                {site.cta.label}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {AGENCY_NAME.replace(/\.$/, "")}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {footerNav.legal.map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="hover:text-accent-300">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
