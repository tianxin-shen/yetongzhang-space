import Link from "next/link";

const navItems = {
  "/": {
    name: "home",
  },
  "/myjourney": {
    name: "journey",
  },
  "https://github.com/tianxin-shen": {
    name: "github",
  },
};

export function Navbar() {
  return (
    <aside>
      <div className="lg:sticky lg:top-20">
        <nav id="nav">
          <div className="flex flex-row space-x-10 py-5 bg-neutral-900 flex justify-center">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="font-mono hover:text-teal-400 py-1 px-2 m-1"
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
