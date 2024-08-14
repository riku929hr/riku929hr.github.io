import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faThreads,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const contacts = [
  {
    name: "GitHub",
    component: <FontAwesomeIcon icon={faGithub} className="w-10" />,
    link: "https://github.com/riku929hr",
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

export default function SnsIcons() {
  return (
    <div className="mt-8 flex flex-row justify-center gap-x-12">
      {contacts.map((item) => (
        <a key={item.name} href={item.link} className="hover:text-gray-500">
          {item.component}
        </a>
      ))}
    </div>
  );
}
