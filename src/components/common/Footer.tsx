import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  const Pages = [
    { name: "Home", href: "/" },
    { name: "About", href: "about" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  const ConnectContent = [
    { name: "Github", link: "https://github.com/jaylordgasalao" },
    { name: "Facebook", link: "https://www.facebook.com/profile.php?id=61590864119788" },
  ];

  return (
    <footer className="border-t border-[#dce5df] px-5 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-1">
          <h2 className="mb-2 text-base font-semibold text-[#1d2927]">
            Jaylord Gasalao
          </h2>
          <p className="text-sm text-[#52605b]">
            Building thoughtful web experiences.
          </p>
          <p className="mt-1 flex items-center gap-1 text-sm text-[#52605b]">
            Cebu, Philippines <MapPin size={14} />
          </p>
        </div>

        <div>
          <h1 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1d2927]">
            Pages
          </h1>
          <ul className="flex flex-col gap-1">
            {Pages.map((page) => (
              <li key={page.name}>
                <Link to={page.href === "/" ? "/" : `/${page.href}`} className="text-sm text-[#52605b] hover:text-[#176b63]">
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1d2927]">
            Elsewhere
          </h1>
          <ul className="flex flex-col gap-1">
            {ConnectContent.map((connect, i) => (
              <li
                key={i}
                className="flex items-center gap-1 text-sm text-[#52605b] hover:text-[#176b63]"
              >
                <a href={connect.link} target="_blank" rel="noreferrer">{connect.name}</a>
                <ArrowUpRight size={13} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-6xl border-t border-[#dce5df] py-5">
        <h1 className="text-xs text-[#71807a]">
          © 2026 Jaylord Gasalao. Built with React and Tailwind CSS.
        </h1>
      </div>
    </footer>
  );
}