import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faThreads,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

type link = {
  name: string;
  component: JSX.Element;
  link: string;
  description?: string;
  bgColor: string;
};

const contacts: link[] = [
  {
    name: "GitHub",
    component: <FontAwesomeIcon icon={faGithub} className="w-6" />,
    link: "https://github.com/riku929hr",
    bgColor: "bg-gray-100",
  },
  {
    name: "X(Twitter)",
    component: <FontAwesomeIcon icon={faXTwitter} className="w-6" />,
    link: "https://twitter.com/riku929hr",
    bgColor: "bg-zinc-100",
  },
  {
    name: "Threads",
    component: <FontAwesomeIcon icon={faThreads} className="w-6" />,
    link: "https://www.threads.net/@riku929hr",
    description: "最近はこちらにも投稿しています",
    bgColor: "bg-orange-100",
  },
  {
    name: "YOUTRUST",
    link: "https://youtrust.jp/users/riku929hr",
    component: <FontAwesomeIcon icon={faBookmark} className="w-4" />,
    description: "詳しい経歴はこちら",
    bgColor: "bg-green-100",
  },
  {
    name: "LinkedIn",
    component: <FontAwesomeIcon icon={faLinkedin} className="w-6" />,
    link: "https://www.linkedin.com/in/riku929hr",
    bgColor: "bg-blue-100",
  },
];

export default function SnsIcons() {
  return (
    <>
      <h2 className="text-2xl font-bold">Contacts</h2>
      <ul className="mt-8">
        {contacts.map((item) => (
          <li key={item.name} className="my-4">
            <a
              href={item.link}
              className={`${item.bgColor} flex h-16 w-full flex-row rounded-lg hover:text-gray-500`}
            >
              <div className="flex w-20 items-center justify-center">
                {item.component}
              </div>
              <div className="w-full content-center">
                <p className="font-bold">{item.name}</p>
                {item.description && (
                  <p className="text-sm">{item.description}</p>
                )}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
