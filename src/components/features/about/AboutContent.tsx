import {
  BriefcaseBusiness,
  Code,
  Mail,
  MapPin,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { FaFacebook, FaGithub } from "react-icons/fa"
import type { IconType } from "react-icons"
import type { ReactNode } from "react"

type ListSectionProps<T> = {
  title: string
  items: T[]
  renderItem: (item: T, idx: number) => ReactNode
}

function ListSection<T>({
  title,
  items,
  renderItem,
}: ListSectionProps<T>) {
  return (
    <div>
      <h2 className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
        {title}
      </h2>

      <ul className="flex flex-col gap-3">
        {items.map(renderItem)}
      </ul>
    </div>
  )
}

type SocialType = {
  name: string
  icon: IconType
  link: string
}

type ContactType = {
  name: string
  icon: LucideIcon
  link?: string
}

export default function AboutPage() {

  const Socials: SocialType[] = [
    {
      name: "Github",
      icon: FaGithub,
      link: "https://github.com/jaylordgasalao",
    },
    {
      name: "Facebook",
      icon: FaFacebook,
      link: "https://www.facebook.com/profile.php?id=61590864119788",
    },
  ]

  const Contacts: ContactType[] = [
    {
      name: "jaylordgasalao934@gmail.com",
      icon: Mail,
      link: "mailto:jaylordgasalao934@gmail.com",
    },
    {
      name: "Cebu, Philippines",
      icon: MapPin,
    },
  ]

  const frontend = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript",
    "HTML5",
    "CSS3",
    "ShadCN",
  ]

  const backend = [
    "Node.js",
    "Express.js",
    "MySQL",
  ]

  return (
    <div>

      <div className="my-10 flex flex-col gap-6 lg:flex-row">
        <div className="w-full rounded-2xl border border-[#dce5df] bg-white p-5 sm:p-7">
          {/* Title */}
          <div className="mb-5 flex items-center gap-2 dark:text-gray-300">
            <BriefcaseBusiness className="h-6 w-6 sm:h-8 sm:w-8" />

            <h1 className="text-lg font-semibold sm:text-xl">
              About
            </h1>
          </div>

          {/* About Description */}
          <p className="text-sm leading-7 text-[#52605b] sm:text-base">
            Hi there, I’m{" "}
            <span className="mx-1 rounded-md border border-gray-200 bg-gray-50 px-2 py-1 text-xs dark:border-gray-600 dark:bg-[#333333] dark:text-gray-300">
              Jaylord Gasalao
            </span>
            , an Information Technology student and aspiring developer
            focused on frontend web development.
            <br />
            <br />
            I enjoy building clean and user-friendly interfaces using
            JavaScript and React, making sure every project is simple,
            responsive, and easy to use. I’ve worked on projects such as
            management systems and ordering interfaces, always aiming to
            improve the overall user experience.
            <br />
            <br />
            While frontend development is my main focus right now, I’m
            also exploring backend development and other technologies to
            grow as a full-stack developer. Outside of coding, I enjoy
            cycling, which helps me stay consistent and disciplined.
          </p>


          <div className="my-6 grid w-fit grid-cols-1 gap-8 sm:grid-cols-2">
            {/* Socials */}

            <ListSection
              title="Socials"
              items={Socials}
              renderItem={({ icon: Icon, name, link }, i) => (
                <li key={i}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-700 transition-colors hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <Icon className="h-4 w-4" />
                    {name}
                  </a>
                </li>
              )}
            />

            {/* Contacts */}

            <ListSection
              title="Contacts"
              items={Contacts}
              renderItem={({ icon: Icon, name, link }, i) => (
                <li key={i}>
                  {link ? (
                    <a
                      href={link}
                      className="flex items-center gap-2 text-sm text-gray-700 transition-colors hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      <Icon className="h-4 w-4" />
                      {name}
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-400">
                      <Icon className="h-4 w-4" />
                      {name}
                    </div>
                  )}
                </li>
              )}
            />
          </div>
        </div>
      </div>


      <div className="w-full rounded-2xl border border-[#dce5df] bg-white p-5 sm:p-7">
        {/* Title */}

        <div className="mb-5 flex items-center gap-2">
          <Code className="h-5 w-5" />

          <h1 className="text-lg font-semibold sm:text-[22px] dark:text-gray-200">
            Tech Stacks
          </h1>
        </div>

        <div className="mb-6 flex flex-col gap-3">
          <h2 className="font-semibold text-gray-800 dark:text-gray-300">
            Frontend
          </h2>

          <div className="flex flex-wrap gap-2">
            {frontend.map((tech) => (
              <p
                key={tech}
                className="rounded-sm px-2 py-1 text-xs text-gray-800 shadow-[0_0_1px_gray] sm:text-[13px] dark:bg-[#333333] dark:text-gray-300"
              >
                {tech}
              </p>
            ))}
          </div>
        </div>


        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-gray-800 dark:text-gray-300">
            Backend
          </h2>

          <div className="flex flex-wrap gap-2">
            {backend.map((tech) => (
              <p
                key={tech}
                className="rounded-sm px-2 py-1 text-xs text-gray-800 shadow-[0_0_1px_gray] sm:text-[13px] dark:bg-[#333333] dark:text-gray-300"
              >
                {tech}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}