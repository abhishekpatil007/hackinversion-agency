import GridDisplayCards from "./grid-display-cards";
import { 
  DevicePhoneMobileIcon, 
  CodeBracketIcon, 
  CloudIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  CogIcon
} from '@heroicons/react/24/solid';

const homeServiceCards = [
  {
    icon: <DevicePhoneMobileIcon className="size-4 text-blue-300" />,
    title: "Mobile Apps",
    description: "Native iOS & Android with React Native",
    date: "30 days delivery",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className: "hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20",
  },
  {
    icon: <CodeBracketIcon className="size-4 text-purple-300" />,
    title: "Web Applications",
    description: "React, Next.js, TypeScript stack",
    date: "21 days delivery",
    iconClassName: "text-purple-500",
    titleClassName: "text-purple-500",
    className: "hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20",
  },
  {
    icon: <CloudIcon className="size-4 text-emerald-300" />,
    title: "SaaS Platforms",
    description: "Complete solutions with billing & auth",
    date: "45 days delivery",
    iconClassName: "text-emerald-500",
    titleClassName: "text-emerald-500",
    className: "hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20",
  },
  {
    icon: <ChartBarIcon className="size-4 text-cyan-300" />,
    title: "Analytics Dashboards",
    description: "Real-time data visualization & insights",
    date: "25 days delivery",
    iconClassName: "text-cyan-500",
    titleClassName: "text-cyan-500",
    className: "hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20",
  },
  {
    icon: <CurrencyDollarIcon className="size-4 text-yellow-300" />,
    title: "E-Commerce",
    description: "Full-featured online stores & marketplaces",
    date: "35 days delivery",
    iconClassName: "text-yellow-500",
    titleClassName: "text-yellow-500",
    className: "hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20",
  },
  {
    icon: <UserGroupIcon className="size-4 text-pink-300" />,
    title: "Internal Tools",
    description: "Custom admin panels & business tools",
    date: "20 days delivery",
    iconClassName: "text-pink-500",
    titleClassName: "text-pink-500",
    className: "hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20",
  },
  {
    icon: <CpuChipIcon className="size-4 text-indigo-300" />,
    title: "AI & ML Solutions",
    description: "Intelligent automation & predictive analytics",
    date: "40 days delivery",
    iconClassName: "text-indigo-500",
    titleClassName: "text-indigo-500",
    className: "hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20",
  },
  {
    icon: <ShieldCheckIcon className="size-4 text-green-300" />,
    title: "Enterprise Security",
    description: "Secure, compliant & scalable solutions",
    date: "50 days delivery",
    iconClassName: "text-green-500",
    titleClassName: "text-green-500",
    className: "hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20",
  },
  {
    icon: <GlobeAltIcon className="size-4 text-orange-300" />,
    title: "Progressive Web Apps",
    description: "Cross-platform apps that work everywhere",
    date: "28 days delivery",
    iconClassName: "text-orange-500",
    titleClassName: "text-orange-500",
    className: "hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20",
  },
  {
    icon: <CogIcon className="size-4 text-red-300" />,
    title: "API Development",
    description: "RESTful APIs & microservices architecture",
    date: "18 days delivery",
    iconClassName: "text-red-500",
    titleClassName: "text-red-500",
    className: "hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20",
  },
];

function HomeDisplayCards() {
  return (
    <div className="w-full py-12">
      <div className="w-full max-w-7xl mx-auto px-4">
        <GridDisplayCards cards={homeServiceCards} />
      </div>
    </div>
  );
}

export { HomeDisplayCards }; 