import Link from "next/link";
import TextButton from "./atoms/textButton";

const navItems = {
  "/": {
    name: "home",
  },
  "/myjourney": {
    name: "journey",
  },
  "https://github.com/yetongumich": {
    name: "github",
  },
  "https://scholar.google.com/citations?user=Js_AA5IAAAAJ&hl=en": {
    name: "Gscholar",
  },
};

export function Navbar() {
  return (
    <aside>
      <div
        className="lg:sticky lg:top-20"
        style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
      >
        <nav id="nav">
          <div className="flex flex-row md:gap-[3.125rem] gap-[0.625rem] md:p-[1.25rem] p-[1rem] bg-zinc-950 justify-center">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="font-mono hover:text-teal-400 text-[14px] md:text-[20px] p-[0.3125rem]"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
