const Teams9 = ({ template }) => {
  const team = template.team;
  return (
    <main className="container mx-auto px-3 pt-8 pb-12 team9">
      <p className="text-[var(--website-9-color-3)] uppercase md:text-xl text-lg text-center">{team.title}</p>
      <h1 className="lg:text-4xl text-3xl font-medium capitalize pt-3 pb-12 text-center">{team.description}</h1>
      <section className="lg:flex items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-12 gap-8 justify-center">
        {team.members.map((member) => (
          <div
            key={member.id}
            className="lg:w-1/4 bg-[var(--website-9-color-1)] rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl shadow-[var(--website-9-color-3)] hover:shadow-[var(--website-9-color-5)]"
          >
            <img
              src={member.imgUrl}
              alt={member.name}
              className="md:h-80 h-60 w-full rounded-tr-[var(--border-radius-lg-9)] rounded-tl-[var(--border-radius-lg-9)] object-cover bg-[var(--website-9-color-4)]"
            />
            <div className="p-4 text-center">
              <p className="text-[var(--website-9-color-3)] font-semibold text-lg">{member.name}</p>
              <p className="text-[var(--website-9-color-4)] text-sm font-medium">{member.title}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Teams9;
