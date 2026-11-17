import SectionHeading from "../ui/SectionHeading";

function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <SectionHeading title="About" />
      <div>
        <p className="mb-4">
          I'm a full-stack developer and Systems Engineer with 6+ years of
          experience building web and mobile products with{" "}
          <span className="text-slate-200">React</span>,{" "}
          <span className="text-slate-200">TypeScript</span>,{" "}
          <span className="text-slate-200">Node.js</span> and{" "}
          <span className="text-slate-200">Python (FastAPI)</span>.
        </p>
        <p className="mb-4">
          Since 2023 I've been leading the end-to-end development of{" "}
          <a
            className="font-medium text-slate-200 hover:text-orange-600 focus-visible:text-orange-600"
            href="https://hakme.ai"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="hakme.ai (opens in a new tab)"
          >
            hakme.ai
          </a>
          , a mental health platform: a shared backend, apps for patients and
          therapists on web, iOS and Android, AI-generated messaging with the
          OpenAI API, native push notifications and deployment on AWS.
        </p>
        <p className="mb-4">
          I've worked on products in health, fintech and government. I care
          about owning features from the database schema to production, and
          about shipping safely: automated tests as a release gate and
          versioned migrations.
        </p>
        <p>
          Outside the computer I like to exercise, cook, read and walk my dog.
        </p>
      </div>
    </section>
  );
}

export default About;
