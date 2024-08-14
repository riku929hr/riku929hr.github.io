import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBlog, faBook } from "@fortawesome/free-solid-svg-icons";

import { SiQiita, SiZenn } from "@icons-pack/react-simple-icons";
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

export default function BlogLinks() {
  return (
    <>
      <h2 className="text-center text-2xl">Blog</h2>
      <div className="mt-4 flex flex-row justify-center gap-x-6">
        {blogs.map((item) => (
          <div className="h-20 w-40 items-center" key={item.name}>
            <a
              href={item.link}
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
    </>
  );
}
