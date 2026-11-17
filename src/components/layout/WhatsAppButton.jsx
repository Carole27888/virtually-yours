import { WhatsAppIcon } from "../../lib/icons.jsx";
import { site, whatsappUrl } from "../../data/site.js";

/** Floating WhatsApp chat bubble, bottom right of every page. */
export default function WhatsAppButton() {
  if (!site.whatsapp?.number) return null;
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed right-4 bottom-4 z-40 flex items-center gap-2 rounded-full border-2 border-white bg-[#25D366] p-3.5 text-white transition-colors hover:bg-[#1EBE5A] sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon className="size-7" />
      <span className="hidden pr-1 text-sm font-semibold sm:group-hover:inline">Chat with us</span>
    </a>
  );
}
