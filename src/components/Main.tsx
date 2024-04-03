import About from "./mainSection/About";
import Contact from "./mainSection/Contact";
import Experience from "./mainSection/Experience";
import Info from "./mainSection/Info";
import Projects from "./mainSection/Projects";

function Main() {
  return (
    <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
      <About />
      <Info />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}

export default Main;
