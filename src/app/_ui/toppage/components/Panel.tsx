type PanelProps = {
  name: string;
  link: string;
  bgColor: string;
  component: JSX.Element;
  description?: string;
};

const Panel: React.FC<PanelProps> = ({
  name,
  link,
  bgColor,
  component,
  description,
}) => (
  <li key={name} className="my-4">
    <a
      href={link}
      className={`${bgColor} flex h-16 w-full flex-row rounded-lg hover:text-gray-500`}
    >
      <div className="flex w-20 items-center justify-center">{component}</div>
      <div className="w-full content-center">
        <p className="font-bold">{name}</p>
        {description && <p className="text-sm">{description}</p>}
      </div>
    </a>
  </li>
);

export default Panel;
