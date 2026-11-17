import { CV_EN_URL, CV_ES_URL, experience } from "../../data/profile";
import ArrowIcon from "../ui/ArrowIcon";
import SectionHeading from "../ui/SectionHeading";
import TechList from "../ui/TechList";

function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <SectionHeading title="Experience" />
      <div>
        <ol className="group/list">
          {experience.map((job) => (
            <li key={job.company} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  {job.period}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    {job.url ? (
                      <a
                        href={job.url}
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-orange-600 focus-visible:text-orange-600 group/link text-base"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${job.role} at ${job.company} (opens in a new tab)`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {job.role} ·{" "}
                          <span className="inline-block">
                            {job.company}
                            <ArrowIcon />
                          </span>
                        </span>
                      </a>
                    ) : (
                      <span className="text-base">
                        {job.role} · {job.company}
                      </span>
                    )}
                  </h3>
                  <p className="mt-2 text-sm leading-normal">{job.summary}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-normal">
                    {job.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <TechList items={job.tech} />
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12 flex flex-wrap gap-6">
          <a
            className="inline-flex items-baseline font-semibold leading-tight text-slate-200 hover:text-orange-600 focus-visible:text-orange-600 group/link text-base"
            href={CV_EN_URL}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View full résumé in English (opens in a new tab)"
          >
            <span>
              View Full{" "}
              <span className="inline-block">
                Résumé
                <ArrowIcon />
              </span>
            </span>
          </a>
          <a
            className="inline-flex items-baseline font-semibold leading-tight text-slate-200 hover:text-orange-600 focus-visible:text-orange-600 group/link text-base"
            href={CV_ES_URL}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View full résumé in Spanish (opens in a new tab)"
          >
            <span>
              Résumé{" "}
              <span className="inline-block">
                (Spanish)
                <ArrowIcon />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Experience;
