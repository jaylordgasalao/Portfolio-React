import {
  Mail,
  Phone,
  MessageSquare,
  Clock,
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
    subheading: "romelbalungag@gmail.com",
    description: "I usually reply within an hour.",
    headingIcon: Mail,
    descriptionIcon: Clock,
    link: "mailto:romelbalungag@gmail.com",
  },
  {
    heading: "Phone",
    subheading: "+63 946 872 9330",
    description: "Available weekdays from 9AM to 6PM.",
    headingIcon: Phone,
    descriptionIcon: Clock,
    link: "tel:+639468729330",
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
    href: "https://github.com/romelBalungag",
    icon: FaGithub,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/romel.balungag.9",
    icon: FaFacebook,
  },
]

export function ContactInfo() {
  return (
    <div className="my-8">
      <div className="flex w-full flex-col gap-4">
        {/* Contact Cards */}

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
              className="flex flex-col gap-3 rounded-lg bg-[#222223] p-6"
            >
              {/* Heading */}

              <h3 className="flex items-center gap-3 text-lg font-medium text-gray-200">
                <Icon className="h-9 w-9 rounded-md bg-[#343434] p-2" />
                {heading}
              </h3>

              {/* Contact */}

              {link ? (
                <a
                  href={link}
                  className="text-[16px] text-gray-300 transition-colors hover:text-white"
                >
                  {subheading}
                </a>
              ) : (
                <p className="text-[16px] text-gray-300">
                  {subheading}
                </p>
              )}

              {/* Description */}

              <p className="flex items-center gap-2 text-sm text-gray-400">
                <Icon2 className="h-4 w-4" />
                {description}
              </p>
            </div>
          ),
        )}


        <div className="flex flex-col gap-3 rounded-lg bg-[#222223] p-6">
          <h2 className="flex items-center gap-3 text-lg font-medium text-gray-200">
            <MessageSquare className="h-9 w-9 rounded-md bg-[#343434] p-2" />
            Connect with me
          </h2>

          <div className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {socials.map(({ icon: Icon, name, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="group flex items-center justify-center rounded-lg border border-gray-600 bg-transparent py-4 transition-all duration-200 hover:bg-[#333333]"
              >
                <Icon className="h-7 w-7 rounded-md p-1 text-gray-300 opacity-90 transition-all duration-200 group-hover:bg-[#464646]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}