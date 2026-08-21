export default function ProjectHeader() {
  return (
      <div className="flex flex-col gap-3 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#176b63]">Portfolio</p>
        <h1 className="text-4xl font-bold tracking-tight text-[#1d2927]">Projects</h1>
        <p className="mx-auto max-w-xl text-base leading-7 text-[#60706a]">
          A selection of web work built while I learn, experiment, and grow as a developer.
        </p>
      </div>
  )
}