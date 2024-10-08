type SectionProps = {
  title: string;
} & React.PropsWithChildren;

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className="py-4">
    <h2 className="text-2xl font-bold">{title}</h2>
    <div className="py-4">{children}</div>
  </div>
);

export default Section;
