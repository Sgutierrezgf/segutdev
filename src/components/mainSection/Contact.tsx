import { EMAIL, MAILTO_URL, WHATSAPP_URL } from "../../data/profile";
import ArrowIcon from "../ui/ArrowIcon";
import SectionHeading from "../ui/SectionHeading";

function Contact() {
  return (
    <section
      id="contact"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Contact me"
    >
      <SectionHeading title="Contact" />
      <p className="mb-4">
        I'm open to remote or on-site full-stack roles and freelance projects.
        Write me at{" "}
        <a
          className="font-medium text-slate-200 hover:text-orange-600 focus-visible:text-orange-600"
          href={MAILTO_URL}
        >
          {EMAIL}
        </a>{" "}
        and I'll get back to you soon.
      </p>
      <div className="mt-8 flex flex-wrap items-baseline gap-6">
        <a
          className="inline-flex items-baseline font-semibold leading-tight text-slate-200 hover:text-orange-600 focus-visible:text-orange-600 group/link text-base"
          href={MAILTO_URL}
          aria-label={`Send me an email at ${EMAIL}`}
        >
          <span>
            Send me an{" "}
            <span className="inline-block">
              email
              <ArrowIcon />
            </span>
          </span>
        </a>
        <a
          className="inline-flex items-baseline font-semibold leading-tight text-slate-200 hover:text-green-600 focus-visible:text-green-600 group/link text-base"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Contact me on WhatsApp (opens in a new tab)"
        >
          <span>
            Message me on{" "}
            <span className="inline-block">
              WhatsApp
              <ArrowIcon />
            </span>
          </span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
