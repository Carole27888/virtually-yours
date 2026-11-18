/**
 * FOUNDER & TEAM
 * --------------------------------------------------------------
 * Founder photo: put a square image (at least 800 x 800) in
 * /public/images/ and update `photo` below.
 *
 * TO ADD A TEAM MEMBER: copy one object in `team`, fill it in and
 * set `isPlaceholder: false`. `photo` can be null to show initials.
 */

import { AGENCY_NAME } from "./site.js";

export const founder = {
  name: "Carole Mutemi",
  role: `Founder, ${AGENCY_NAME}`,
  location: "Nairobi, Kenya",
  photo: "/images/founder.jpg",
  photoAlt: "Portrait of Carole Mutemi, founder",
  bio: [
    "Carole is an executive assistant and software developer with more than three years of experience supporting international clients.",
    "Working closely with founders, she saw the same pattern again and again: talented people buried in inboxes, follow-ups and admin. She also saw that a great assistant only goes so far without the right systems behind them.",
    `She founded ${AGENCY_NAME} to bring both together: skilled, managed virtual assistants backed by the processes and technology that keep a business running smoothly.`,
  ],
  linkedin: "https://www.linkedin.com/in/caroline-mutemi-70b0422b2",
};

export const team = [
  {
    name: "[Team member name]",
    role: "[Role, e.g. Senior Virtual Assistant]",
    bio: "[One or two sentences about their experience and strengths.]",
    photo: null,
    isPlaceholder: true,
  },
  {
    name: "[Team member name]",
    role: "[Role, e.g. Social Media Specialist]",
    bio: "[One or two sentences about their experience and strengths.]",
    photo: null,
    isPlaceholder: true,
  },
  {
    name: "[Team member name]",
    role: "[Role, e.g. CRM & Automation Specialist]",
    bio: "[One or two sentences about their experience and strengths.]",
    photo: null,
    isPlaceholder: true,
  },
];
