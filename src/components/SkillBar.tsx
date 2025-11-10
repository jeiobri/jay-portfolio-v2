import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface SkillBarProps {
  name: string;
  level: number;
  color?: string;
}

export function SkillBar({ name, level, color = '#6366f1' }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-[#f5f5f7]">{name}</span>
        <span className="text-[#9ca3af]">{level}%</span>
      </div>
      <div className="h-2 bg-[rgba(100,100,120,0.1)] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}dd)`,
          }}
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${level}%` : 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
    </div>
  );
}
