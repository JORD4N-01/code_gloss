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
        return 'text-green-600 border-green-300';
      case 'medium':
        return 'text-yellow-600 border-yellow-300';
      case 'hard':
        return 'text-red-600 border-red-300';
      default:
        return 'text-gray-600 border-gray-300';
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
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6 mb-6 border-2 border-gray-200 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{term.name}</h2>
        <LevelSwitcher 
          currentLevel={currentLevel} 
          onLevelChange={setCurrentLevel} 
        />
      </div>

      <div className={`p-4 rounded-lg border-2 ${getLevelColor(currentLevel)} bg-gray-50 mb-4`}>
        <p className="text-gray-700 leading-relaxed">{getLevelContent()}</p>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-gray-600">Animação Explicativa</h3>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            {isPlaying ? 'Pausar' : 'Play'}
          </button>
        </div>
        <AnimationBox 
          animationType={term.animation} 
          isPlaying={isPlaying} 
        />
      </div>
    </motion.div>
  );
};

export default TermCard;
