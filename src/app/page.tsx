import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faThreads,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { faBlog, faBook } from "@fortawesome/free-solid-svg-icons";

import { SiQiita, SiZenn } from "@icons-pack/react-simple-icons";

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
    name: "はてなブログ",
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
    <>
      <main className="mx-auto max-w-3xl px-6 py-12">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            rikuto (Rikuto Sato)
          </h1>
          <p className="my-4 text-lg leading-8">
            Web developer / Software Engineer
          </p>
          {/* SNS Icons */}
          <div className="mt-8 flex flex-row justify-center gap-x-12">
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
            <div className="mt-4 flex flex-row justify-center gap-x-6">
              {blogs.map((item) => (
                <div className="h-20 w-40 items-center" key={item.name}>
                  <a
                    href={item.link}
                    rel="noopener noreferrer"
                    className="flex justify-center hover:text-gray-500"
                  >
                    {item.component}
                  </a>
                  <p className="hidden justify-center text-xs md:flex md:pt-2">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
