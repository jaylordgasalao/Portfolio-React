import {
  Mail,
  MapPin,
  MessageSquare,
} from "lucide-react"

import type { LucideIcon } from "lucide-react"

import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa"

import type { IconType } from "react-icons"

type Contact = {
  heading: string
  subheading: string
  description: string
  headingIcon: LucideIcon
  descriptionIcon: LucideIcon
  link?: string
}

const contacts: Contact[] = [
  {
    heading: "Email",
    subheading: "jaylordgasalao934@gmail.com",
    description: "The best way to reach me",
    headingIcon: Mail,
    descriptionIcon: Mail,
    link: "mailto:jaylordgasalao934@gmail.com",
  },
  {
    heading: "Based in",
    subheading: "Cebu, Philippines",
    description: "Open to thoughtful collaborations",
    headingIcon: MapPin,
    descriptionIcon: MapPin,
  },
]


type Social = {
  name: string
  href: string
  icon: IconType
}


const socials: Social[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/jaylordgasalao",
    icon: FaGithub,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61590864119788",
    icon: FaFacebook,
  },
]

export function ContactInfo() {
  return (
    <div className="lg:my-0">
      <div className="flex w-full flex-col gap-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#176b63]">Contact</p>
          <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#1d2927]">Let’s keep in touch.</h3>
          <p className="mt-3 max-w-sm text-sm leading-6 text-[#60706a]">
            Whether it’s a project, a question, or a good idea, I’m always happy to hear from you.
          </p>
        </div>

        {contacts.map(
          ({
            headingIcon: Icon,
            descriptionIcon: Icon2,
            heading,
            description,
            subheading,
            link,
          }) => (
            <div
              key={heading}
              className="border-t border-[#dce5df] pt-5"
            >
              <h3 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-[#52605b]">
                <Icon className="h-5 w-5 text-[#176b63]" />
                {heading}
              </h3>

              {/* Contact */}

              {link ? (
                <a
                  href={link}
                  className="mt-2 block text-base font-semibold text-[#1d2927] transition-colors hover:text-[#176b63]"
                >
                  {subheading}
                </a>
              ) : (
                <p className="mt-2 text-base font-semibold text-[#1d2927]">
                  {subheading}
                </p>
              )}

              {/* Description */}

              <p className="mt-2 flex items-center gap-2 text-sm text-[#71807a]">
                <Icon2 className="h-4 w-4" />
                {description}
              </p>
            </div>
          ),
        )}


        <div className="border-t border-[#dce5df] pt-5">
          <h2 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-[#52605b]">
            <MessageSquare className="h-5 w-5 text-[#176b63]" />
            Elsewhere
          </h2>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
            {socials.map(({ icon: Icon, name, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="group flex items-center gap-2 text-sm text-[#52605b] transition-colors hover:text-[#176b63]"
              >
                <Icon className="h-4 w-4 opacity-90 transition-all duration-200 group-hover:text-[#176b63]" />
                <span>{name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}