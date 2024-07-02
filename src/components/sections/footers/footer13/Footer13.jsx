import React from "react";

const Footer13 = ({ template }) => {
  const footer = template.footer;

  return (
    <footer className="bg-[var(--website-13-color-1)] text-[var(--website-13-color-3)] pb-16">
      <div className="container mx-auto px-3 lg:pt-20 pt-8">
        <section>
          <div className="lg:flex items-center justify-between">
            <span className="lg:w-4/5 lg:flex items-center justify-start">
              <img src={footer.imgUrl} className="text-2xl w-20" alt="Logo" />
              <p className="text-2xl primary-font text-[var(--website-13-color-3)]">{footer.description}</p>
            </span>
          </div>
        </section>

        <section>
          <div className="lg:py-20">
            <ul className="lg:flex items-center justify-between">
              {footer.footerSections.map((section, index) => (
                <li key={index} className="lg:w-1/4 lg:pb-0 pb-3">
                  <p className="font-bold">{section.title}</p>
                  <ul>
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a href={link.url}>{link.title}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <span className="text-[var(--website-13-color-3)] lg:w-1/3 justify-center flex items-center gap-4">
            <ul className="sm:flex justify-between pt-8">
              {footer.medias.map((media, index) => (
                <li key={index}>
                  <a href={media.url}>
                    <img
                      className="cursor-pointer rounded-full border border-[var(--website-13-color-2)] p-2 h-8 w-8"
                      src={media.icon}
                      alt=""
                    />
                  </a>
                </li>
              ))}
            </ul>
          </span>
        </section>

        <section>
          <ul className="sm:flex justify-between pt-8">
            {footer.contacts.map((contact, index) => (
              <li key={index}>
                <p>{contact.value}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer13;
