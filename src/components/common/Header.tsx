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
    <header className="border-b border-[#dce5df] bg-[#f6f8f5]/95">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 px-5 py-5 sm:flex-row sm:items-center sm:px-8 lg:px-10">
        <div>
          <h1 className="text-lg font-bold tracking-tight text-[#1d2927]">Jaylord Gasalao</h1>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#176b63]">Frontend developer</p>
        </div>

        <nav className="flex flex-wrap items-center gap-1" aria-label="Main navigation">
          {pages.map((page) => (
            <NavLink
              key={page.id}
              to={page.path}
              className={({ isActive }) =>
                isActive
                  ? "rounded-full bg-[#1d2927] px-4 py-2 text-sm font-medium text-white transition-colors"
                  : "rounded-full px-4 py-2 text-sm font-medium text-[#52605b] transition-colors hover:bg-[#e5eee8] hover:text-[#1d2927]"
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
