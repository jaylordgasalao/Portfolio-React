import { FaFacebook, FaGithub } from "react-icons/fa";
import type { IconType } from "react-icons";
import { ArrowRight, Mail } from "lucide-react";
import Profile from "../../../assets/profile.jpg";

export default function Hero() {
  const icons: { icon: IconType; link: string }[] = [
    {
      icon: FaFacebook,
      link: "https://www.facebook.com/profile.php?id=61590864119788",
    },
    {
      icon: FaGithub,
      link: "https://github.com/jaylordgasalao",
    },
  ];

  return (
    <section className="grid items-center gap-12 py-6 md:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:py-12">
      {/* LEFT SIDE */}
      <div className="flex w-full flex-col gap-7 text-center md:text-left">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#176b63]">Hello, I’m Jaylord</p>

          <h1 className="mt-3 max-w-xl text-4xl leading-[1.05] font-bold tracking-tight text-[#1d2927] sm:text-5xl lg:text-6xl">
            Always learning, always creating.
          </h1>

          <p className="mt-4 max-w-lg text-base leading-7 text-[#52605b] sm:text-lg">
            I’m an Information Technology student and frontend developer who enjoys turning ideas into clear, responsive, and useful digital experiences.
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
          <a
            href="/projects"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#1d2927] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#176b63] sm:w-auto"
          >
            See my work
            <ArrowRight size={17} />
          </a>

          <a
            href="/contact"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-[#b9c9c1] px-5 py-3 text-sm font-semibold text-[#1d2927] transition hover:border-[#176b63] hover:text-[#176b63] sm:w-auto"
          >
            <Mail size={17} />
            Let’s talk
          </a>
        </div>

        {/* SOCIAL ICONS */}
        <div className="mt-1 flex justify-center gap-4 md:justify-start">
          {icons.map(({ icon: Icon, link }) => (
            <a key={link} href={link} target="_blank">
              <Icon
                size={22}
                className="cursor-pointer text-[#71807a] transition-colors hover:text-[#176b63]"
              />
            </a>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="relative flex w-full justify-center md:justify-end">
        <img
          src={Profile}
          alt="Profile"
          className="aspect-[4/5] w-4/5 max-w-sm rounded-[2rem] object-cover shadow-[16px_16px_0_#c9ddd4] sm:w-2/3 md:w-full"
        />
      </div>
    </section>
  );
}
