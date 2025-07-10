import {cn} from "@/lib/utils"

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Webs Jyoti",
      duration: "June 2024 – July 2024",
      description:
        "Built interactive frontend components using React and Tailwind CSS for real client projects. Improved UI responsiveness and accessibility.",
    },
    {
      title: "Web Developer Intern",
      company: "Code Alpha",
      duration: "July 2023 – Sept 2023",
      description:
        "Designed and developed responsive websites using HTML, CSS, and JavaScript. Collaborated in a remote team to build live projects.",
    },
  ];

  return (
<section id="experience" className="relative py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          My <span className="text-primary">Experience</span>
        </h2>

        {/* Vertical timeline line in the center */}
        <div className="absolute left-1/2 top-32 bottom-8 transform -translate-x-1/2 w-1 bg-border" />

<div className="relative flex flex-col gap-20">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Dots on the center line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

              {/* Experience card */}
            <div
  className={cn(
    "bg-card border shadow-md rounded-lg p-6 w-full md:w-[48%] transition-transform duration-300 hover:scale-[1.03]",
    index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
  )}
>

                <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  {exp.company} — {exp.duration}
                </p>
                <p className="text-sm text-foreground">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
