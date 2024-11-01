import React from "react";
import { MagicCard } from "@/Components/ui/magic-card";
import { Code, Database, Globe, Layout, Cpu, Server } from "lucide-react";
import IconCloud from "@/Components/ui/icon-cloud";
import TypingAnimation from "@/Components/ui/typing-animation";

// Skills data
const skillsData = [
  {
    icon: Globe,
    title: "Frontend Development",
    skills: ["HTML5", "CSS3", "Tailwind", "Figma"],
    color: {
      light: "bg-blue-100",
      text: "text-blue-600",
      bar: "bg-blue-500",
    },
  },
  {
    icon: Code,
    title: "JavaScript",
    skills: ["ES6+", "React.js"],
    color: {
      light: "bg-yellow-100",
      text: "text-yellow-600",
      bar: "bg-yellow-500",
    },
  },
  {
    icon: Layout,
    title: "React Ecosystem",
    skills: ["React.js", "Redux"],
    color: {
      light: "bg-green-100",
      text: "text-green-600",
      bar: "bg-green-500",
    },
  },
  {
    icon: Server,
    title: "Backend Development",
    skills: ["REST APIs"],
    color: {
      light: "bg-purple-100",
      text: "text-purple-600",
      bar: "bg-purple-500",
    },
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
    color: {
      light: "bg-red-100",
      text: "text-red-600",
      bar: "bg-red-500",
    },
  },
  {
    icon: Cpu,
    title: "Tools & DevOps",
    skills: ["Git", "Docker", "Vercel"],
    color: {
      light: "bg-teal-100",
      text: "text-teal-600",
      bar: "bg-teal-500",
    },
  },
];

// Skill Card Component
interface SkillCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  skills: string[];
  color: {
    light: string;
    text: string;
    bar: string;
  };
}

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, title, skills, color }) => (
  <MagicCard
    className="flex flex-col p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-white"
    gradientColor="#f0f9ff"
  >
    <div className="flex items-center mb-4">
      <div className={`p-3 rounded-full ${color.light}`}>
        <Icon className={`w-10 h-10 ${color.text}`} />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 ml-4">{title}</h3>
    </div>
    <ul className="text-sm text-gray-600 space-y-1">
      {skills.map((skill, index) => (
        <li key={index} className="list-disc pl-5">
          {skill}
        </li>
      ))}
    </ul>
  </MagicCard>
);

// Skills Page Component
const Myskills = () => {

  const slugs = [
    "javascript", "java", "react", "mongodb",
    "html5", "css3", "postgresql",
    "vercel", "git", "github", "docker",
    "visualstudiocode", "figma", "tailwind", "python",
  ];

  return (
    <section id="skills" className="py-5">
      <h2 className="text-5xl font-extrabold text-amber-500 mb-8 text-center">My Skills</h2>
      <div className="min-h-screen bg-white flex items-center justify-center pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-8 max-w-5xl w-full px-4">
          {/* Centered About Me Section */}
          <IconCloud iconSlugs={slugs} />

          {/* Skill Cards Surrounding the Center */}
          <div className="flex justify-center h-72">
            <SkillCard {...skillsData[0]} />
          </div>
          <div className="flex justify-center h-72">
            <SkillCard {...skillsData[1]} />
          </div>
          <div className="flex justify-center h-72">
            <SkillCard {...skillsData[2]} />
          </div>
          <div className="flex justify-center h-72">
            <SkillCard {...skillsData[3]} />
          </div>
          <div className="flex justify-center h-72">
            <SkillCard {...skillsData[4]} />
          </div>
          <div className="flex justify-center h-72">
            <SkillCard {...skillsData[5]} />
          </div>

          {/* Open Source Contribution Message on the Left Side */}
          <div className="col-span-1 md:col-span-2 flex mt-20 justify-center pt-6">
            <TypingAnimation
              className="text-gray-600"
              text="Also Learning to Contribute Through Open-Source!"
              duration={90}
            />
          </div>
        </div>
      </div>
      <div className="hidden md:block h-1 w-2/3 bg-amber-400  mb-4 rounded-lg mt-28"></div>
    </section>
  );
};

export default Myskills;
