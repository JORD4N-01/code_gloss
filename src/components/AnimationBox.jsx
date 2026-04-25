import { motion } from 'framer-motion';

const AnimationBox = ({ animationType, isPlaying }) => {
  const renderAnimation = () => {
    switch (animationType) {
      case 'api':
        return (
          <div className="relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden">
            <motion.div
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold"
              animate={isPlaying ? { x: [0, 200, 0] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              API
            </motion.div>
            <motion.div
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold"
              animate={isPlaying ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              DATA
            </motion.div>
          </div>
        );

      case 'database':
        return (
          <div className="relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden">
            <motion.div
              className="absolute inset-x-4 top-4 h-20 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold"
              animate={isPlaying ? { height: [80, 100, 80] } : {}}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              DATABASE
            </motion.div>
            <motion.div
              className="absolute left-8 bottom-4 w-8 h-8 bg-yellow-400 rounded-full"
              animate={isPlaying ? { y: [0, -40, 0] } : {}}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute right-8 bottom-4 w-8 h-8 bg-blue-400 rounded-full"
              animate={isPlaying ? { y: [0, -40, 0] } : {}}
              transition={{ duration: 1, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
            />
          </div>
        );

      case 'login':
        return (
          <div className="relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden">
            <motion.div
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-red-500 rounded-full flex items-center justify-center text-white text-2xl"
              animate={isPlaying ? { rotate: [0, 360] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              🔒
            </motion.div>
            <motion.div
              className="absolute left-1/2 bottom-4 transform -translate-x-1/2 w-24 h-2 bg-green-500 rounded-full"
              animate={isPlaying ? { width: [0, 96, 0] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        );

      case 'cloud':
        return (
          <div className="relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden">
            <motion.div
              className="absolute left-1/2 top-8 transform -translate-x-1/2 w-24 h-16 bg-blue-300 rounded-full"
              animate={isPlaying ? { y: [0, -10, 0] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute left-8 bottom-8 w-12 h-12 bg-gray-400 rounded"
              animate={isPlaying ? { scale: [1, 0.8, 1], opacity: [1, 0.5, 1] } : {}}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute right-8 bottom-8 w-12 h-12 bg-gray-400 rounded"
              animate={isPlaying ? { scale: [1, 0.8, 1], opacity: [1, 0.5, 1] } : {}}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
            />
          </div>
        );

      case 'frontend':
        return (
          <div className="relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden">
            <motion.div
              className="absolute inset-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg"
              animate={isPlaying ? { opacity: [0.5, 1, 0.5] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center justify-center h-full text-white font-bold">
                FRONTEND
              </div>
            </motion.div>
            <motion.div
              className="absolute left-4 top-4 w-4 h-4 bg-white rounded-full"
              animate={isPlaying ? { scale: [1, 1.5, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        );

      case 'backend':
        return (
          <div className="relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden">
            <motion.div
              className="absolute inset-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg"
              animate={isPlaying ? { rotate: [0, 5, -5, 0] } : {}}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center justify-center h-full text-white font-bold">
                BACKEND
              </div>
            </motion.div>
            <motion.div
              className="absolute right-4 bottom-4 w-4 h-4 bg-white rounded-full"
              animate={isPlaying ? { scale: [1, 1.5, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
            />
          </div>
        );

      case 'framework':
        return (
          <div className="relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden">
            <motion.div
              className="absolute left-4 top-4 w-12 h-12 bg-orange-500 rounded"
              animate={isPlaying ? { rotate: [0, 45, 0] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute left-20 top-4 w-12 h-12 bg-blue-500 rounded"
              animate={isPlaying ? { rotate: [0, -45, 0] } : {}}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute left-36 top-4 w-12 h-12 bg-green-500 rounded"
              animate={isPlaying ? { rotate: [0, 45, 0] } : {}}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6, ease: "easeInOut" }}
            />
            <div className="absolute bottom-4 left-4 right-4 h-1 bg-gray-300 rounded-full" />
          </div>
        );

      case 'git':
        return (
          <div className="relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden">
            <motion.div
              className="absolute left-4 top-4 w-8 h-8 bg-red-500 rounded-full"
              animate={isPlaying ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute left-16 top-4 w-8 h-8 bg-orange-500 rounded-full"
              animate={isPlaying ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity, delay: 0.3, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute left-28 top-4 w-8 h-8 bg-yellow-500 rounded-full"
              animate={isPlaying ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity, delay: 0.6, ease: "easeInOut" }}
            />
            <svg className="absolute inset-0 w-full h-full">
              <motion.path
                d="M 20 20 L 60 20 L 100 20"
                stroke="#666"
                strokeWidth="2"
                fill="none"
                animate={isPlaying ? { pathLength: [0, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
          </div>
        );

      case 'http':
        return (
          <div className="relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden">
            <motion.div
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs"
              animate={isPlaying ? { x: [0, 180, 0] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              HTTP
            </motion.div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gray-300 rounded-lg flex items-center justify-center text-gray-700 font-bold text-xs">
              SERVER
            </div>
          </div>
        );

      case 'json':
        return (
          <div className="relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden p-4">
            <motion.div
              className="font-mono text-xs"
              animate={isPlaying ? { opacity: [0.5, 1, 0.5] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-gray-600">{"{"}</div>
              <div className="ml-4 text-blue-600">"name":</div>
              <div className="ml-8 text-green-600">"value"</div>
              <div className="text-gray-600">{"}"}</div>
            </motion.div>
          </div>
        );

      case 'variable':
        return (
          <div className="relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden">
            <motion.div
              className="absolute left-4 top-8 w-20 h-12 bg-yellow-400 rounded flex items-center justify-center text-xs font-bold"
              animate={isPlaying ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              VAR
            </motion.div>
            <motion.div
              className="absolute right-4 top-8 w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold"
              animate={isPlaying ? { x: [0, -20, 0] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              42
            </motion.div>
          </div>
        );

      case 'function':
        return (
          <div className="relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden">
            <motion.div
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-16 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xs"
              animate={isPlaying ? { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              FUNCTION
            </motion.div>
            <motion.div
              className="absolute left-4 bottom-4 w-8 h-8 bg-green-400 rounded-full"
              animate={isPlaying ? { scale: [0, 1, 0] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute right-4 bottom-4 w-8 h-8 bg-red-400 rounded-full"
              animate={isPlaying ? { scale: [0, 1, 0] } : {}}
              transition={{ duration: 2, repeat: Infinity, delay: 1, ease: "easeInOut" }}
            />
          </div>
        );

      default:
        return (
          <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
            Animation not available
          </div>
        );
    }
  };

  return (
    <div className="w-full">
      {renderAnimation()}
    </div>
  );
};

export default AnimationBox;
