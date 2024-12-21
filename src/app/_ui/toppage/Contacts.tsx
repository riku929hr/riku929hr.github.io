import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

import Panel from "./components/Panel";
import Section from "./components/Section";

const contacts = [
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
    name: "mixi2",
    component: <FontAwesomeIcon icon={faBookmark} className="w-4" />,
    link: "https://mixi.social/@riku929hr",
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
    component: (
      <FontAwesomeIcon icon={faLinkedin} className="w-6 text-[#0A66C2]" />
    ),
    link: "https://www.linkedin.com/in/riku929hr",
    bgColor: "bg-blue-100",
  },
];

export default function SnsIcons() {
  return (
    <Section title="Contacts">
      <ul>
        {contacts.map((item) => (
          <Panel key={item.name} {...item} />
        ))}
      </ul>
    </Section>
  );
}
