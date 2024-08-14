import BlogLinks from "./_ui/toppage/blog-links";
import SnsIcons from "./_ui/toppage/sns-icons";

export default function HomePage() {
  return (
    <>
      <main className="mx-auto max-w-3xl px-6 py-12">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            riku929hr (Rikuto Sato)
          </h1>
          <p className="my-4 text-lg leading-8">
            Web developer / Software Engineer
          </p>
          <SnsIcons />
          <div className="py-8">
            <BlogLinks />
          </div>
        </div>
      </main>
    </>
  );
}
