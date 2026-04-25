import { motion } from 'framer-motion';

const LevelSwitcher = ({ currentLevel, onLevelChange }) => {
  const levels = [
    { id: 'easy', label: 'Fácil', color: 'green' },
    { id: 'medium', label: 'Médio', color: 'yellow' },
    { id: 'hard', label: 'Técnico', color: 'red' }
  ];

  return (
    <div className="flex gap-2 mb-4">
      {levels.map((level, index) => (
        <motion.button
          key={level.id}
          onClick={() => onLevelChange(level.id)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
            currentLevel === level.id
              ? `bg-${level.color}-500 text-white shadow-lg`
              : `bg-gray-200 text-gray-700 hover:bg-gray-300`
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.3, 
            delay: index * 0.1,
            type: "spring",
            stiffness: 400,
            damping: 17
          }}
        >
          {level.label}
        </motion.button>
      ))}
    </div>
  );
};

export default LevelSwitcher;
