import { GITHUB_URL } from "../../data/profile";
import ArrowIcon from "../ui/ArrowIcon";
import SectionHeading from "../ui/SectionHeading";
import ProjectList from "./projects/ProjectList";

function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <SectionHeading title="Projects" />
      <ProjectList />
      <a
        className="inline-flex items-baseline font-semibold leading-tight text-slate-200 hover:text-orange-600 focus-visible:text-orange-600 group/link text-base"
        href={GITHUB_URL}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="More projects on GitHub (opens in a new tab)"
      >
        <span>
          More projects on{" "}
          <span className="inline-block">
            GitHub
            <ArrowIcon />
          </span>
        </span>
      </a>
    </section>
  );
}

export default Projects;
