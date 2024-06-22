import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faThreads,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { faBlog, faBook } from "@fortawesome/free-solid-svg-icons";

import { SiQiita, SiZenn } from "@icons-pack/react-simple-icons";

const navigation = [
  { name: "Profile", href: "#" },
  { name: "Works(under construction)", href: "#" },
  { name: "Skill(under construction)", href: "#" },
];

export default function HomePage() {
  return (
    <div className="">
      <header className="hidden bg-sky-50 md:flex">
        <nav className="mx-auto flex max-w-7xl items-center p-6 md:px-8">
          <div className="hidden md:flex md:gap-x-14">
            {navigation.map((item) => (
              <a
                className="text-sm font-semibold leading-6 text-gray-700"
                key={item.name}
                href={item.href}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-7xl px-6 py-12">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            rikuto(Rikuto Sato)
          </h1>
          <p className="my-4 text-lg leading-8">
            Web developer / Software Engineer
          </p>
          {/* SNS Icons */}
          <div className="flex flex-row justify-center gap-x-12">
            <FontAwesomeIcon
              icon={faGithub}
              className="w-10 hover:text-gray-500"
            />
            <FontAwesomeIcon
              icon={faXTwitter}
              className="w-10 hover:text-gray-500"
            />
            <FontAwesomeIcon
              icon={faThreads}
              className="w-10 hover:text-gray-500"
            />
            <FontAwesomeIcon icon={faLinkedin} className="w-10" />
          </div>
          <h2>Blog</h2>
          <div className="flex flex-row justify-center gap-x-12">
            <FontAwesomeIcon icon={faBlog} className="w-10" />
            <SiZenn size={40} />
            <SiQiita size={40} />
            <FontAwesomeIcon icon={faBook} className="w-10" />
          </div>
        </div>
      </main>
    </div>
  );
}
