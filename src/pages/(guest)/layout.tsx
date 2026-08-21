import { Outlet } from "react-router";

import { Header } from "../../components/common/Header";
import { Footer } from "../../components/common/Footer";

const pages = [
  { id: "home", label: "Home", path: "/" },
  { id: "about", label: "About", path: "/about" },
  { id: "projects", label: "Projects", path: "/projects" },
  { id: "contact", label: "Contact", path: "/contact" },
];

export default function GuestLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header pages={pages} />

      <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-10 sm:px-8 lg:px-10 lg:py-16">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}