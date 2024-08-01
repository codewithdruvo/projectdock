import SkillCard from "@/components/cards/SkillCard";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Skill } from "@/types/profile.type";

type Props = {
  title: string;
  description: string;
  techSkills: Skill[];
  otherSkills: Skill[];
};

const HomeSkills = ({
  title,
  description,
  techSkills = [],
  otherSkills = [],
}: Props) => {
  return (
    <section className="py-16 sm:py-20">
      <h2 className="block_heading mb-1">{title}</h2>
      <p className="block_desc mb-10">{description}</p>

      <div className="relative">
       <div className="grid sm:grid-cols-3 gap-3 sm:gap-5">
         {techSkills.map((skill) => (
            <SkillCard key={skill.id} title={skill.title} level={skill.level} />
          ))}
       </div>
       <div className="flex items-center py-8">
         <Separator className="flex-1" />
          <Badge className="text-lg rounded-sm o" variant="outline">OTHER SKILLS</Badge>
         <Separator className="flex-1" />
        </div>
        <div className="grid sm:grid-cols-3 gap-3 sm:gap-5">
          {otherSkills.map((skill) => (
            <SkillCard key={skill.id} title={skill.title} level={skill.level} />
          ))}
        </div>
        <div className="skill-card_blur-bg"></div>
     </div>
    </section>
  );
};

export default HomeSkills;
