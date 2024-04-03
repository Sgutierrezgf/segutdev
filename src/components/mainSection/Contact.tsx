function Contact() {
  const openGoogleMailClient = () => {
    const emailAddress = "segut10@gmail.com"; // Reemplaza con tu dirección de correo electrónico
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      emailAddress
    )}`;
    window.open(mailtoLink);
  };

  const openWhatsapp = () => {
    const phoneNumber = "3012363606"; // Reemplaza con tu número de teléfono
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <section
      id="contact"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Contact Me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Contact me - Don't be shy!
        </h2>
      </div>
      <div>
        <p className="mb-4">
          Feel free to get in touch with me. I am always open to discussing new
          projects, creative ideas, or opportunities to be part of your
          visions..
        </p>
      </div>
      <div className="mt-8">
        <a
          className="inline-flex items-baseline font-semibold leading-tight text-slate-200 hover:text-orange-600 focus-visible:text-teal-300  group/link text-base"
          onClick={openGoogleMailClient}
          aria-label="Send me a message (opens in a new tab)"
        >
          <span>
            Send me a{" "}
            <span className="inline-block">
              Message
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </span>
        </a>
        <span className="mx-6 inline-flex items-baseline font-bold leading-tight text-slate-200 group/link text-base">
          Or
        </span>
        <a
          className="inline-flex items-baseline font-semibold leading-tight text-slate-200 hover:text-green-600 focus-visible:text-teal-300  group/link text-base"
          onClick={openWhatsapp}
          aria-label="contact me by whatsapp(opens in a new tab)"
        >
          <span>
            Contact me by{" "}
            <span className="inline-block">
              whatsapp
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
