import { projects } from "../../../data/profile";
import ArrowIcon from "../../ui/ArrowIcon";
import TechList from "../../ui/TechList";

function ProjectList() {
  return (
    <ul className="group/list">
      {projects.map((project) => (
        <li key={project.name} className="mb-12">
          <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <div className="z-10 sm:order-2 sm:col-span-6">
              <h3>
                <a
                  className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-orange-600 focus-visible:text-orange-600 group/link text-base"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${project.name} (opens in a new tab)`}
                >
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span className="inline-block">
                    {project.name}
                    <ArrowIcon />
                  </span>
                </a>
              </h3>
              <p className="mt-2 text-sm leading-normal">
                {project.description}
              </p>
              {project.repo && project.repo !== project.url && (
                <a
                  className="relative z-10 mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-orange-600 focus-visible:text-orange-600"
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${project.name} source code on GitHub (opens in a new tab)`}
                >
                  Source code
                </a>
              )}
              <TechList items={project.tech} />
            </div>
            {project.image ? (
              <img
                alt={`Screenshot of ${project.name}`}
                loading="lazy"
                decoding="async"
                width={192}
                height={96}
                className="rounded border-2 border-slate-200/10 transition group-hover:border-orange-600/30 sm:order-1 sm:col-span-2 sm:translate-y-1 w-48 h-24 object-cover"
                src={project.image}
              />
            ) : (
              <div
                aria-hidden="true"
                className="hidden sm:order-1 sm:col-span-2 sm:flex sm:translate-y-1 h-20 w-full items-center justify-center rounded border-2 border-slate-200/10 bg-slate-800/50 p-2 text-center text-xs font-semibold text-slate-500 transition group-hover:border-orange-600/30"
              >
                {project.name}
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ProjectList;
