import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog, faBook } from "@fortawesome/free-solid-svg-icons";
import { SiQiita, SiSpeakerdeck, SiZenn } from "@icons-pack/react-simple-icons";

import Panel from "./components/Panel";
import Section from "./components/Section";

const blogs = [
  {
    name: "Zenn",
    component: <SiZenn size={24} className="text-[#3EA8FF]" />,
    link: "https://zenn.dev/riku929hr",
    bgColor: "bg-blue-100",
    description: "技術記事の主な投稿先です",
  },
  {
    name: "Qiita",
    component: <SiQiita size={24} className="text-[#55C500]" />,
    link: "https://qiita.com/riku929hr",
    bgColor: "bg-green-100",
  },
  {
    name: "Speaker Deck",
    component: <SiSpeakerdeck className="text-[#009287]" />,
    link: "https://speakerdeck.com/riku929hr",
    bgColor: "bg-teal-100",
    description: "登壇資料などはこちら",
  },
  {
    name: "はてなブログ",
    component: <FontAwesomeIcon icon={faBlog} className="w-6" />,
    link: "https://blog.riku929hr.com",
    bgColor: "bg-gray-100",
    description: "個人ブログです。技術以外のことが多め",
  },
  {
    name: "しずかなインターネット",
    component: <FontAwesomeIcon icon={faBook} className="w-6" />,
    link: "https://sizu.me/riku929hr",
    bgColor: "bg-gray-100",
    description: "ごくたまに書きます",
  },
];

export default function BlogLinks() {
  return (
    <Section title="Blogs">
      <ul className="gap-x-6">
        {blogs.map((item) => (
          <Panel key={item.name} {...item} />
        ))}
      </ul>
    </Section>
  );
}
