import { useSelector } from "react-redux";

const Teams9 = () => {
  const { title, cards } = useSelector((state) => state.template9.team);
  

  return (
    <main className="container mx-auto px-3 team9">
      <p className="text-[var(--primary-text-color-9)] uppercase md:text-xl text-lg text-center">{title}</p>
      <h1 className="lg:text-4xl text-3xl font-medium capitalize pt-3 pb-12 text-center">Our Team of Experts</h1>
      <section className="lg:flex items-center lg:grid-cols-none grid grid-cols-2 lg:gap-12 gap-8 justify-center">
        {cards.map((member) => (
          <div key={member.id} className="lg:w-1/4">
            <img
              src={member.imgUrl}
              alt={member.name}
              className="md:h-80 h-60 w-full rounded-tr-[var(--border-radius-lg-9)] rounded-tl-[var(--border-radius-lg-9)] object-cover bg-[var(--grey-9)]"
            />
            <p className="text-center pt-4 md:text-[var(--font-size-md-9)] font-semibold">{member.name || member.job}</p>
            <p className="text-center pt-4 md:text-[var(--font-size-base-9)] text-sm text-[var(--primary-text-color-9)] font-semibold">{member.job}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Teams9;
