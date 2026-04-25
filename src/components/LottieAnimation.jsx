import { motion } from 'framer-motion';

const LottieAnimation = ({ animationType, isPlaying }) => {
  // Simple CSS-based animations as Lottie alternatives
  const renderAnimation = () => {
    switch (animationType) {
      case 'api':
        return (
          <div className="relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden">
            <motion.div
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xs"
              animate={isPlaying ? { 
                x: [0, 200, 0],
                rotate: [0, 360, 0]
              } : {}}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut",
                times: [0, 0.5, 1]
              }}
            >
              API
            </motion.div>
            <motion.div
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-xs"
              animate={isPlaying ? { 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              } : {}}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut",
                times: [0, 0.5, 1]
              }}
            >
              DATA
            </motion.div>
            {/* Message flow lines */}
            <motion.svg 
              className="absolute inset-0 w-full h-full pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: isPlaying ? 1 : 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <motion.path
                d="M 80 64 L 280 64"
                stroke="#3B82F6"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                animate={isPlaying ? {
                  strokeDashoffset: [0, -10]
                } : {}}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.svg>
          </div>
        );

      case 'database':
        return (
          <div className="relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden">
            <motion.div
              className="absolute inset-x-4 top-4 h-20 bg-gradient-to-b from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg"
              animate={isPlaying ? { 
                height: [80, 100, 80],
                y: [0, -10, 0]
              } : {}}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut"
              }}
            >
              DATABASE
            </motion.div>
            {/* Data particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-yellow-400 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  bottom: '20px'
                }}
                animate={isPlaying ? { 
                  y: [0, -60, 0],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5]
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        );

      case 'login':
        return (
          <div className="relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden">
            <motion.div
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white text-2xl shadow-lg"
              animate={isPlaying ? { 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              } : {}}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "linear"
              }}
            >
              🔒
            </motion.div>
            <motion.div
              className="absolute left-1/2 bottom-8 transform -translate-x-1/2 w-24 h-3 bg-green-500 rounded-full"
              animate={isPlaying ? { 
                width: [0, 96, 0],
                opacity: [0, 1, 0]
              } : {}}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut"
              }}
            />
            {/* Checkmark animation */}
            <motion.div
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl"
              animate={isPlaying ? {
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0.5]
              } : {}}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1.5
              }}
            >
              ✅
            </motion.div>
          </div>
        );

      case 'cloud':
        return (
          <div className="relative w-full h-32 bg-gradient-to-b from-blue-100 to-blue-200 rounded-lg overflow-hidden">
            <motion.div
              className="absolute left-1/2 top-8 transform -translate-x-1/2 w-28 h-16 bg-white rounded-full shadow-lg flex items-center justify-center"
              animate={isPlaying ? { 
                y: [0, -8, 0],
                scale: [1, 1.05, 1]
              } : {}}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeInOut"
              }}
            >
              <span className="text-blue-500 font-bold text-sm">☁️ CLOUD</span>
            </motion.div>
            {/* Upload animation */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`upload-${i}`}
                className="absolute w-8 h-8 bg-blue-400 rounded flex items-center justify-center text-white text-xs"
                style={{
                  left: `${25 + i * 25}%`,
                  bottom: '10px'
                }}
                animate={isPlaying ? { 
                  y: [0, -50, -100],
                  opacity: [1, 1, 0]
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.7,
                  ease: "easeOut"
                }}
              >
                📄
              </motion.div>
            ))}
            {/* Download animation */}
            {[...Array(2)].map((_, i) => (
              <motion.div
                key={`download-${i}`}
                className="absolute w-6 h-6 bg-green-400 rounded-full flex items-center justify-center text-white text-xs"
                style={{
                  left: `${35 + i * 30}%`,
                  top: '10px'
                }}
                animate={isPlaying ? { 
                  y: [0, 50, 100],
                  opacity: [1, 1, 0]
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 1 + 1,
                  ease: "easeIn"
                }}
              >
                ⬇️
              </motion.div>
            ))}
          </div>
        );

      case 'backend':
        return (
          <div className="relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden">
            <motion.div
              className="absolute inset-2 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg"
              animate={isPlaying ? { 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.02, 1]
              } : {}}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut"
              }}
            >
              <div className="text-white font-bold text-center">
                <div>BACKEND</div>
                <div className="text-xs opacity-75">Processing...</div>
              </div>
            </motion.div>
            {/* Gears animation */}
            <motion.div
              className="absolute top-4 right-4 text-2xl"
              animate={isPlaying ? { rotate: [0, 360] } : {}}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              ⚙️
            </motion.div>
            <motion.div
              className="absolute bottom-4 left-4 text-xl"
              animate={isPlaying ? { rotate: [360, 0] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              ⚙️
            </motion.div>
            {/* Data flow indicators */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                style={{
                  left: `${20 + i * 20}%`,
                  top: '50%'
                }}
                animate={isPlaying ? { 
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0]
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        );

      default:
        return (
          <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
            <motion.div
              animate={isPlaying ? { 
                scale: [1, 1.1, 1],
                opacity: [0.5, 1, 0.5]
              } : {}}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              Animation not available
            </motion.div>
          </div>
        );
    }
  };

  return (
    <motion.div 
      className="w-full"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {renderAnimation()}
    </motion.div>
  );
};

export default LottieAnimation;
