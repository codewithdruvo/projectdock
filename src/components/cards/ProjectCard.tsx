import projectIcons from "@/config/icons/project-icons";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  desc: string;
  thumbnail?: string;
  path?: string;
  previewLink?: string;
  sourceLink?: string;
  techs?: string[];
};

const ProjectCard = ({
  title,
  desc,
  thumbnail,
  path,
  previewLink,
  sourceLink,
  techs,
}: Props) => {
  return (
    <article className="project-card w-full">
      {thumbnail ? (
        <div className="project-card_media">
          <Image src={thumbnail} alt={title} fill />
        </div>
      ) : null}

      <div className="relative">
      <div className="project-card_body">
        <div>
        <h2 className="project-card_title">
          {path ? (
            <Link href={`/portfolio/${path}`} className="hover:text-primary">
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>

        <p className="project-card_desc w-auto">{desc}</p>

        {techs ? (
          <div className="project-card_techs hidden sm:flex flex-wrap">
            {techs.map((tech) => (
              <span key={tech}> <projectIcons.TECH /> {tech}</span>
            ))}
          </div>
        ) : null}
          </div>

        <div className="project-card_links">
          {path ? (
            <Link href={`/portfolio/${path}`}  className="p-1" title="Learn More">
              <projectIcons.VIEW_MORE />
            </Link>
          ) : null}
          {previewLink ? (
            <Link href={previewLink} className="ml-auto sm:ml-0 text-sm  px-2 py-1" title="Preview">
              <projectIcons.PREVIEW className="animate-pulse sm:flex-col"/> <span>Live</span>
            </Link>
          ) : null}
          {sourceLink ? (
            <Link href={sourceLink} className="p-1" title="Source Code">
              <projectIcons.SOURCE />
            </Link>
          ) : null}
          </div>
          {/* {techs ? (
          <div className="project-card_techs sm:hidden flex-wrap">
            {techs.map((tech) => (
              <span key={tech}> <projectIcons.TECH /> {tech}</span>
            ))}
          </div>
        ) : null} */}
      </div>
        <div className="project-blur-bg"></div>
      </div>
    </article>
  );
};

export default ProjectCard;
