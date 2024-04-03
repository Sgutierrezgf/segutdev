function Info() {
  return (
    <section
      id="about"
      className="mb-14 scroll-mt-14 md:mb-14 lg:mb-14 lg:scroll-mt-14"
      aria-label="Personal info"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Personal info
        </h2>
      </div>
      <div>
        <ul className=" pl-0 mb-4 grid grid-rows-3 grid-flow-col gap-4">
          <li className="pb-5">
            <span className="title capitalize opacity-80 ">first name: </span>
            <span className="font-semibold text-base text-orange-600">
              Sebastian
            </span>
          </li>
          <li>
            <span className="title capitalize opacity-80">last name: </span>
            <span className="font-semibold text-base text-orange-600">
              Gutierrez Guisao
            </span>
          </li>
          <li>
            <span className="title capitalize opacity-80">Nationality: </span>
            <span className="font-semibold text-base text-orange-600">
              Colombia
            </span>
          </li>
          <li>
            <span className="title capitalize opacity-80">phone: </span>
            <span className="font-semibold text-base text-orange-600">
              +57 3012363606
            </span>
          </li>
          <li>
            <span className="title capitalize opacity-80">Email: </span>
            <span className="font-semibold text-base text-orange-600">
              segut10@gmail.com
            </span>
          </li>
          <li>
            <span className="title capitalize opacity-80">languages: </span>
            <span className="font-semibold text-base text-orange-600">
              Spanish, English
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Info;
