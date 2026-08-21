import { NavLink } from "react-router";

interface Page {
  id: string;
  label: string;
  path: string;
}

interface HeaderProps {
  pages: Page[];
}

export function Header({ pages }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 shadow bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-6 md:px-6 lg:px-8">
        <div>
          <h1 className="text-lg font-bold tracking-tight text-black md:text-xl">Jaylord Gasalao</h1>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-600">Developer in Progress</p>
        </div>

        <nav className="flex items-center gap-1 bg-white" aria-label="Main navigation">
          {pages.map((page) => (
            <NavLink
              key={page.id}
              to={page.path}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 px-5 py-2 text-sm font-medium transition-colors duration-200"
                  : "px-5 py-2 text-sm font-medium text-black transition-colors duration-200 border-b-2 border-transparent hover:border-black"
              }
            >
              {page.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
