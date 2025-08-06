import { cn } from "../../lib/utils";
import { BentoGrid, BentoGridItem } from "./bento-grid";

export function BentoGridThirdDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const SkeletonOne = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] p-6">
      <div className="w-full h-full flex flex-col justify-between">
        {/* Header with icon */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <div className="text-white font-semibold text-sm">MVP Development</div>
            <div className="text-cyan-300 text-xs">30-day delivery</div>
          </div>
        </div>
        
        {/* Process visualization */}
        <div className="flex-1 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-4 w-full">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-2">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div className="text-center">
                <div className="text-white text-xs font-medium">Ideation</div>
                <div className="text-cyan-300 text-xs">Plan & Design</div>
              </div>
            </div>
            
            {/* Arrow */}
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-2">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div className="text-center">
                <div className="text-white text-xs font-medium">Build</div>
                <div className="text-blue-300 text-xs">Code & Test</div>
              </div>
            </div>
            
            {/* Arrow */}
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-2">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div className="text-center">
                <div className="text-white text-xs font-medium">Launch</div>
                <div className="text-purple-300 text-xs">Deploy & Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkeletonTwo = () => {
  const techStack = [
    { name: "React", icon: "⚛️", color: "from-blue-500 to-cyan-500" },
    { name: "Next.js", icon: "▲", color: "from-black to-gray-800" },
    { name: "TypeScript", icon: "TS", color: "from-blue-600 to-blue-800" },
    { name: "Tailwind", icon: "🎨", color: "from-cyan-500 to-blue-500" },
    { name: "Node.js", icon: "🟢", color: "from-green-500 to-green-700" },
    { name: "MongoDB", icon: "🍃", color: "from-green-400 to-green-600" }
  ];
  
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] p-6">
      <div className="w-full h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <div>
            <div className="text-white font-semibold text-sm">Full-Stack Development</div>
            <div className="text-blue-300 text-xs">Modern tech stack</div>
          </div>
        </div>
        
        {/* Tech stack grid */}
        <div className="flex-1 grid grid-cols-2 gap-3">
          {techStack.map((tech, i) => (
            <div
              key={"tech-stack-" + i}
              className={`bg-gradient-to-br ${tech.color} rounded-lg p-3 flex items-center gap-3 shadow-sm`}
            >
              <div className="text-2xl">{tech.icon}</div>
              <div className="text-white font-semibold text-xs">{tech.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] p-6">
      <div className="w-full h-full flex flex-col justify-between">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div>
            <div className="text-white font-semibold text-sm">Product Mindset</div>
            <div className="text-purple-300 text-xs">Founder's approach</div>
          </div>
        </div>
        
        {/* Central illustration */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="text-5xl mb-3">🚀</div>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl">💡</span>
                <span className="text-white text-xs">Innovation First</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl">⚡</span>
                <span className="text-white text-xs">Speed Matters</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl">🎯</span>
                <span className="text-white text-xs">Results Driven</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] p-6">
      <div className="w-full h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <div className="text-white font-semibold text-sm">50+ MVPs Built</div>
            <div className="text-emerald-300 text-xs">Proven track record</div>
          </div>
        </div>
        
        {/* Stats grid */}
        <div className="flex-1 grid grid-cols-3 gap-4">
          {/* MVP Count */}
          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg p-4 flex flex-col items-center justify-center border border-cyan-500/30">
            <div className="text-3xl mb-2">⚡</div>
            <div className="text-2xl font-bold text-white">50+</div>
            <div className="text-cyan-300 text-xs font-medium">MVPs</div>
            <div className="text-white text-xs mt-1">Built</div>
          </div>
          
          {/* Delivery Time */}
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-4 flex flex-col items-center justify-center border border-blue-500/30">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-2xl font-bold text-white">30</div>
            <div className="text-blue-300 text-xs font-medium">Days</div>
            <div className="text-white text-xs mt-1">Average</div>
          </div>
          
          {/* Success Rate */}
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-4 flex flex-col items-center justify-center border border-purple-500/30">
            <div className="text-3xl mb-2">🚀</div>
            <div className="text-2xl font-bold text-white">100%</div>
            <div className="text-purple-300 text-xs font-medium">Success</div>
            <div className="text-white text-xs mt-1">Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkeletonFive = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] p-6">
      <div className="w-full h-full flex flex-col justify-between">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
            </svg>
          </div>
          <div>
            <div className="text-white font-semibold text-sm">Ongoing Support</div>
            <div className="text-orange-300 text-xs">Long-term partnership</div>
          </div>
        </div>
        
        {/* Support services */}
        <div className="flex-1 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4 w-full">
            {/* Updates */}
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg p-4 flex flex-col items-center justify-center border border-green-500/30">
              <div className="text-2xl mb-2">🔄</div>
              <div className="text-white text-xs font-medium text-center">Continuous Updates</div>
            </div>
            
            {/* Maintenance */}
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-4 flex flex-col items-center justify-center border border-blue-500/30">
              <div className="text-2xl mb-2">🔧</div>
              <div className="text-white text-xs font-medium text-center">Maintenance</div>
            </div>
            
            {/* Optimization */}
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-4 flex flex-col items-center justify-center border border-purple-500/30">
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-white text-xs font-medium text-center">Optimization</div>
            </div>
            
            {/* Support */}
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg p-4 flex flex-col items-center justify-center border border-orange-500/30">
              <div className="text-2xl mb-2">💬</div>
              <div className="text-white text-xs font-medium text-center">24/7 Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const items = [
  {
    title: "",
    description: "",
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: null,
  },
  {
    title: "",
    description: "",
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: null,
  },
  {
    title: "",
    description: "",
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: null,
  },
  {
    title: "",
    description: "",
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: null,
  },
  {
    title: "",
    description: "",
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: null,
  },
]; 