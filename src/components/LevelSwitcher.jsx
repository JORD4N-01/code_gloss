import React from 'react';

const LevelSwitcher = ({ currentLevel, onLevelChange }) => {
  const levels = [
    { id: 'easy', label: 'Fácil', color: 'green' },
    { id: 'medium', label: 'Médio', color: 'yellow' },
    { id: 'hard', label: 'Técnico', color: 'red' }
  ];

  return (
    <div className="flex gap-2 mb-4">
      {levels.map((level) => (
        <button
          key={level.id}
          onClick={() => onLevelChange(level.id)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
            currentLevel === level.id
              ? `bg-${level.color}-500 text-white scale-105 shadow-lg`
              : `bg-gray-200 text-gray-700 hover:bg-gray-300`
          }`}
        >
          {level.label}
        </button>
      ))}
    </div>
  );
};

export default LevelSwitcher;
