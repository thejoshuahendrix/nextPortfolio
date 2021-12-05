import { Section } from "components";
import { useTranslation } from "next-i18next";
import { FC, useMemo } from "react";

import { ProjectCard } from "./libs/ProjectCard";

export const Projects: FC = () => {
  const { t } = useTranslation("common");

  const projects = useMemo(
    () => [
      {
        title: "FullstackProject",
        subtitle: t("projects.fullstack.subtitle"),
        description: t("projects.fullstack.description"),
        technologies: ["React", "TypeScript", "Express"],
        externalLink: "https://jwtmern.herokuapp.com",
        githubLink: "https://github.com/thejoshuahendrix/fullstackmern",
        imageLink: `/images/fullstack.png`,
      },
      {
        title: "HoroscopeTool",
        subtitle: t("projects.horoscope.subtitle"),
        description: t("projects.horoscope.description"),
        technologies: ["React", "APIs", "Node.js"],
        externalLink: "https://hs-horoscope.herokuapp.com",
        githubLink: "https://github.com/thejoshuahendrix/horoscopeapp",
        imageLink: `/images/horoscope.png`,
      },
      {
        title: "BinaryvsLinear",
        subtitle: t("projects.binary.subtitle"),
        description: t("projects.binary.description"),
        technologies: ["Javascript", "Express", "CSS"],
        externalLink: "https://binarysearch.herokuapp.com",
        githubLink: "https://github.com/thejoshuahendrix/binaryvslinear",
        imageLink: `/images/binary.png`,
      },
    ],
    [t]
  );

  return (
    <Section
      className="md:mt-20 mt-14"
      title={t("projects.title")}
      description={t("projects.description")}
    >
      <div className="px-4 mx-auto mt-10 md:mt-20 md:px-8 max-w-screen-lg">
        {projects.map((project, i) => (
          <ProjectCard key={i} rightShift={i % 2 === 0} {...project} />
        ))}
      </div>
    </Section>
  );
};
