import { useState } from 'react';
import { motion } from 'framer-motion';
import LevelSwitcher from './LevelSwitcher';
import AnimationBox from './AnimationBox';

const TermCard = ({ term }) => {
  const [currentLevel, setCurrentLevel] = useState('easy');
  const [isPlaying, setIsPlaying] = useState(true);

  const getLevelColor = (level) => {
    switch (level) {
      case 'easy':
        return 'text-green-600 border-green-300 bg-green-50';
      case 'medium':
        return 'text-yellow-600 border-yellow-300 bg-yellow-50';
      case 'hard':
        return 'text-red-600 border-red-300 bg-red-50';
      default:
        return 'text-gray-600 border-gray-300 bg-gray-50';
    }
  };

  const getLevelContent = () => {
    switch (currentLevel) {
      case 'easy':
        return term.easy;
      case 'medium':
        return term.medium;
      case 'hard':
        return term.hard;
      default:
        return term.easy;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ 
        duration: 0.3,
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      className="bg-white rounded-xl shadow-lg p-6 mb-6 border-2 border-gray-200 cursor-pointer"
    >
      <motion.div 
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.h2 
          className="text-2xl font-bold text-gray-800 mb-2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {term.name}
        </motion.h2>
        <LevelSwitcher 
          currentLevel={currentLevel} 
          onLevelChange={setCurrentLevel} 
        />
      </motion.div>

      <motion.div 
        className={`p-4 rounded-lg border-2 ${getLevelColor(currentLevel)} mb-4 transition-all duration-300`}
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.p 
          className="text-gray-700 leading-relaxed"
          key={currentLevel}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {getLevelContent()}
        </motion.p>
      </motion.div>

      <motion.div 
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center justify-between mb-2">
          <motion.h3 
            className="text-sm font-semibold text-gray-600"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            Animação Explicativa
          </motion.h3>
          <motion.button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-3 py-1 text-xs bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            {isPlaying ? '⏸️ Pausar' : '▶️ Play'}
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
        >
          <AnimationBox 
            animationType={term.animation} 
            isPlaying={isPlaying} 
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TermCard;
