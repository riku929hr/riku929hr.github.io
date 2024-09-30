import Header from "@/app/_ui/toppage/Header";
import BlogLinks from "@/app/_ui/toppage/BlogLinks";
import Contacts from "@/app/_ui/toppage/Contacts";
import About from "./_ui/toppage/About";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Header />
      <About />
      <Contacts />
      <BlogLinks />
    </main>
  );
}
