import { Globe } from "lucide-react"

type Props = {
  ImageSrc: string
  ImageAlt: string
  ProjectTitle: string
  ProjectDescription: string
  ProjectLink: string
}

export default function ProjectCard({
  ImageSrc,
  ImageAlt,
  ProjectTitle,
  ProjectDescription,
  ProjectLink,
}: Props) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-[#dce5df] bg-white p-3 transition-transform duration-200 hover:-translate-y-1 hover:border-[#9fc2b5]">
      <img
        src={ImageSrc}
        alt={ImageAlt || "Image Title"}
        className="mb-4 h-44 w-full rounded-xl object-cover"
        width={400}
        height={400}
      />

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-bold text-[#1d2927]">
            {ProjectTitle}
          </h1>

          <p className="text-sm leading-6 text-[#60706a]">
            {ProjectDescription}
          </p>
        </div>

        <button
          className="mt-5 flex w-fit cursor-pointer items-center gap-1 rounded-full bg-[#e5eee8] px-3 py-2 text-xs font-semibold text-[#176b63] transition-colors hover:bg-[#c9ddd4]"
          onClick={() => window.open(ProjectLink, "_blank")}
        >
          <Globe className="w-3" />
          Web Link
        </button>
      </div>
    </article>
  )
}