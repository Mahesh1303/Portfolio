import { useState } from 'react';
import { 
  Zap, Layers, Workflow, Rocket 
} from "lucide-react";
import IconCloud from "@/Components/ui/icon-cloud";
import TypingAnimation from "@/Components/ui/typing-animation";

const Myskills = () => {
  // Explicitly type the state as number | null
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const skillCategories = [
    {
      icon: Zap,
      title: "Frontend Mastery",
      skills: [
        "React.js", 
        "Next.js", 
        "JavaScript", 
        "Tailwind CSS", 
        "Magic-UI",
        "React-Redux"
      ],
      gradient: "from-pink-500 via-red-500 to-yellow-500"
    },
    {
      icon: Layers,
      title: "Backend Engineering",
      skills: [
        "Node.js", 
        "Express", 
        "Mongoose", 
        "REST APIs"
      ],
      gradient: "from-purple-500 via-indigo-500 to-blue-500"
    },
    {
      icon: Workflow,
      title: "Database & DevOps",
      skills: [
        "MongoDB", 
      ],
      gradient: "from-green-400 via-teal-500 to-cyan-600"
    },
    {
      icon: Rocket,
      title: "Tools & Platforms",
      skills: [
        "Git", 
        "GitHub", 
        "Vercel", 
        "Netlify"
      ],
      gradient: "from-orange-400 via-red-500 to-pink-500"
    }
  ];

  const slugs = [
    "javascript", "react", "nodejs", "typescript", 
    "tailwindcss", "docker", "mongodb", "postgresql", 
    "github", "figma", "aws", "nextjs"
  ];

  return (
    <section 
      id="skills" 
      className="min-h-screen bg-gray-900 flex items-center justify-center p-8"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Icon Cloud */}
        <div className="w-full h-[500px] flex items-center justify-center">
          <IconCloud 
            iconSlugs={slugs} 
          />
        </div>

        {/* Right Side - Skills Grid */}
        <div>
          {/* Heading */}
          <div className="text-left mb-12">
            <h1 className="text-5xl font-black text-transparent bg-clip-text 
              bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
              Tech Arsenal
            </h1>
            <p className="text-xl text-gray-300">
              A dynamic showcase of cutting-edge technologies and skills
            </p>
          </div>

          {/* Skills Categories */}
          <div className="grid grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                onClick={() => setActiveCategory(activeCategory === index ? null : index)}
                className={`
                  relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer
                  transform transition-all duration-300 
                  ${activeCategory === index 
                    ? 'scale-105 ring-4 ring-opacity-50 ring-white' 
                    : 'hover:scale-105'}
                  bg-gray-800
                `}
              >
                {/* Gradient Border */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-20 blur-2xl`}
                ></div>

                {/* Content */}
                <div className="relative z-10 p-6 text-center">
                  <div className="mx-auto w-20 h-20 bg-gray-700 rounded-full mb-4 
                    flex items-center justify-center">
                    <category.icon 
                      className="w-10 h-10 text-white opacity-80" 
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {category.title}
                  </h3>

                  <div className={`
                    grid grid-cols-2 gap-2 transition-all duration-300
                    ${activeCategory === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}
                  `}>
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="text-sm text-gray-300 bg-gray-700 rounded-full px-3 py-1"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Typing Animation */}
          <div className="mt-12 text-center">
            <TypingAnimation
              text="Continuously Expanding My Tech Toolkit!"
              className="text-xl text-gray-300"
              duration={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Myskills;