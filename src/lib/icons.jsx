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
