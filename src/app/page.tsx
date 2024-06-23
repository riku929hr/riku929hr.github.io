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

const contacts = [
  {
    name: "GitHub",
    component: <FontAwesomeIcon icon={faGithub} className="w-10" />,
    link: "https:://github.com/riku929hr",
  },
  {
    name: "X-Twitter",
    component: <FontAwesomeIcon icon={faXTwitter} className="w-10" />,
    link: "https://twitter.com/riku929hr",
  },
  {
    name: "Threads",
    component: <FontAwesomeIcon icon={faThreads} className="w-10" />,
    link: "https://www.threads.net/@riku929hr",
  },
  {
    name: "LinkedIn",
    component: <FontAwesomeIcon icon={faLinkedin} className="w-10" />,
    link: "https://www.linkedin.com/in/riku929hr",
  },
];

const blogs = [
  {
    name: "Zenn",
    component: <SiZenn size={40} />,
    link: "https://zenn.dev/riku929hr",
  },
  {
    name: "Qiita",
    component: <SiQiita size={40} />,
    link: "https://qiita.com/riku929hr",
  },
  {
    name: "Blog",
    component: <FontAwesomeIcon icon={faBlog} className="w-10" />,
    link: "https://blog.riku929hr.com",
  },
  {
    name: "しずかなインターネット",
    component: <FontAwesomeIcon icon={faBook} className="w-10" />,
    link: "https://sizu.me/riku929hr",
  },
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
      <main className="mx-auto max-w-3xl px-6 py-12">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            rikuto (Rikuto Sato)
          </h1>
          <p className="my-4 text-lg leading-8">
            Web developer / Software Engineer
          </p>
          {/* SNS Icons */}
          <div className="flex flex-row justify-center gap-x-12">
            {contacts.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="hover:text-gray-500"
              >
                {item.component}
              </a>
            ))}
          </div>
          <div className="py-8">
            <h2 className="text-center text-2xl">Blog</h2>
            <div className="mt-4 flex flex-row justify-center gap-x-12">
              {blogs.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  rel="noopener noreferrer"
                  className="hover:text-gray-500"
                >
                  {item.component}
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
