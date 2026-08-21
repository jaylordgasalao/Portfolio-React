import { useState } from "react"
import ProjectCard from "./ProjectCard"
import { Search } from "lucide-react"
import ProjectImage from "../../../assets/project1.jpg"

type Props = {
  limit: boolean
  isHome: boolean
}

export default function ProjectHolder({ limit, isHome }: Props) {
  const [searchProject, setSearchProject] = useState("")
  const projects = [
    {
      title: "My Previous Portfolio",
      description:
        "A responsive portfolio built with HTML, CSS, and JavaScript to present my work with a clear, focused interface.",
      link: "https://jaylord-gasalao-portfolio.netlify.app/",
      image: ProjectImage,
    },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchProject.toLowerCase()) ||
      project.description.toLowerCase().includes(searchProject.toLowerCase())

    return matchesSearch
  })

  const loading = "No projects match that search yet."

  return (
    <div className="mt-10">
      {isHome && (
        <div className="mt-16 mb-10 md:mt-32 lg:mt-40">
          <div className="flex flex-col items-center gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#176b63]">Selected work</h3>
            <h1 className="flex items-center gap-2 text-center text-2xl leading-tight font-bold text-[#1d2927] sm:text-3xl md:text-4xl">
              A small collection of things I’ve built
            </h1>

            <p className="max-w-xl text-center text-sm leading-6 text-[#60706a] sm:text-base">
              Practical projects where thoughtful layouts, accessible interactions, and clean code work together.
            </p>
          </div>
        </div>
      )}

      {projects.length == 0 ? (
        <div className="mt-10 text-center">
          <h1 className="text-base text-gray-400 italic md:text-lg">
            {loading}
          </h1>
        </div>
      ) : (
        <>
          <h1
            className={`mt-10 text-base font-bold text-[#1d2927] md:text-lg ${
              limit ? "hidden" : "block"
            }`}
          >
            All Projects
          </h1>

          {!limit && (
            <div className="my-4 w-full">
              <div className="relative max-w-md flex-1">
                <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="w-full rounded-full border border-[#b9c9c1] bg-white py-3 pr-4 pl-10 text-sm outline-none transition focus:border-[#176b63] focus:ring-2 focus:ring-[#c9ddd4]"
                  value={searchProject}
                  onChange={(e) => setSearchProject(e.target.value)}
                />
              </div>
            </div>
          )}

          <div className="mt-8 mb-6 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {(!limit ? filteredProjects : filteredProjects.slice(0, 3)).map(
              (project, i) => (
                <div key={i} className="flex h-full">
                  <ProjectCard
                    ImageSrc={project.image}
                    ImageAlt={`${project.title}`}
                    ProjectTitle={project.title}
                    ProjectDescription={project.description}
                    ProjectLink={project.link}
                  />
                </div>
              )
            )}
          </div>

          <div>
            <p className={`font-medium text-[#52605b] ${!limit ? "hidden" : "block"}`}>Explore more</p>
            <a
              href={"/projects"}
              className={`flex items-center justify-center gap-1 md:justify-start ${
                !limit ? "hidden" : "flex"
              }`}
            >
              <h1 className="rounded-full border border-[#b9c9c1] bg-[#1d2927] px-4 py-2 text-left text-sm text-white hover:bg-[#176b63]">
                See all projects
              </h1>
            </a>
          </div>
        </>
      )}
    </div>
  )
}