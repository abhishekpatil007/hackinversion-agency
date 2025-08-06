"use client";

import { cn } from "../../lib/utils";
import { Sparkles } from "lucide-react";

interface GridDisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
}

function GridDisplayCard({
  className,
  icon = <Sparkles className="size-4 text-blue-300" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "text-blue-500",
  titleClassName = "text-blue-500",
}: GridDisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-36 w-full select-none flex-col justify-between rounded-xl border-2 border-gray-800 bg-black/50 backdrop-blur-sm px-4 py-3 transition-all duration-300 hover:border-white/20 hover:bg-black/80 [&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className
      )}
    >
      <div>
        <span className="relative inline-block rounded-full bg-gray-800 p-1">
          {icon}
        </span>
        <p className={cn("text-lg font-medium", titleClassName)}>{title}</p>
      </div>
      <p className="text-sm text-gray-300 line-clamp-2">{description}</p>
      <p className="text-xs text-gray-500">{date}</p>
    </div>
  );
}

interface GridDisplayCardsProps {
  cards?: GridDisplayCardProps[];
}

export default function GridDisplayCards({ cards }: GridDisplayCardsProps) {
  if (!cards || cards.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
      {cards.map((cardProps, index) => (
        <GridDisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
} 