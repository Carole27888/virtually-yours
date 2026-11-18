/**
 * ICON REGISTRY
 * ------------------------------------------------------------
 * Data files refer to icons by name (e.g. icon: "Camera").
 * Only icons listed here are bundled, which keeps the site fast.
 * To use a new icon from https://lucide.dev/icons, import it
 * below and add it to the `registry` object.
 */
import {
  AlertCircle,
  ArrowRight,
  BarChart3,
  Briefcase,
  Building2,
  CalendarCheck,
  Camera,
  CheckCircle2,
  ClipboardList,
  Clock,
  Eye,
  FileText,
  Globe,
  GraduationCap,
  Heart,
  Inbox,
  Lock,
  Megaphone,
  MonitorSmartphone,
  PhoneCall,
  Rocket,
  Share2,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Shuffle,
  TrendingUp,
  UserCheck,
  Users,
  UserX,
  Wallet,
  Workflow,
  FileSignature,
  FolderCheck,
  KeyRound,
  LogOut,
  Smartphone,
  UserLock,
} from "lucide-react";

const registry = {
  AlertCircle,
  ArrowRight,
  BarChart3,
  Briefcase,
  Building2,
  CalendarCheck,
  Camera,
  CheckCircle2,
  ClipboardList,
  Clock,
  Eye,
  FileText,
  Globe,
  GraduationCap,
  Heart,
  Inbox,
  Lock,
  Megaphone,
  MonitorSmartphone,
  PhoneCall,
  Rocket,
  Share2,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Shuffle,
  TrendingUp,
  UserCheck,
  Users,
  UserX,
  Wallet,
  Workflow,
  FileSignature,
  FolderCheck,
  KeyRound,
  LogOut,
  Smartphone,
  UserLock,
};

export function Icon({ name, className = "size-6", ...rest }) {
  const Cmp = registry[name] || CheckCircle2;
  return <Cmp className={className} aria-hidden="true" strokeWidth={1.75} {...rest} />;
}

/* Brand icons (not included in lucide). */
export function LinkedInIcon({ className = "size-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function InstagramIcon({ className = "size-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className = "size-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07z" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "size-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.49-8.41Z" />
    </svg>
  );
}
