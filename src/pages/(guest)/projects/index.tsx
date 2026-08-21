import ProjectHeader from "../../../components/features/projects/ProjectHeader";
import ProjectHolder from "../../../components/features/projects/ProjectHolder";

export default function ProjectsPage() {
  return (
    <div>
      <ProjectHeader />
      <ProjectHolder limit={false} isHome={false} />
    </div>
  )
}