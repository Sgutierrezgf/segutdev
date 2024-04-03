function About() {
  return (
    <section
      id="about"
      className="mb-14 scroll-mt-14 md:mb-14 lg:mb-14 lg:scroll-mt-14"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4">
          I'm a software developer, my forte is frontend development, in the
          last years I've been preparing myself and continue learning new skills
          mostly with react and javascript. I try to keep a curious mentality of
          wanting to learn more every day, my goal is to become a fullstack
          developer.
        </p>
        <p className="mb-4">
          I have had the opportunity to work in different companies all in the
          field of technology and different fields such as health, financial,
          banking among others, this has given me a broad business vision to
          adapt to any eventuality.
        </p>
        <p className="mb-4">
          In my free time, I like to expand my knowledge catalog, lately
          learning other frameworks such as angular and nextjs, also learning
          about video game development which I also like, and when I'm not at
          the computer, I like to exercise, cook, read, walk my dog and hang out
          with friends.
        </p>
      </div>
    </section>
  );
}

export default About;
