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

      case 'frontend':
        return (
          <div className="relative w-full h-32 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg overflow-hidden">
            {/* Browser window */}
            <motion.div
              className="absolute inset-4 bg-white rounded-lg shadow-lg border-2 border-gray-300"
              animate={isPlaying ? { 
                scale: [1, 1.02, 1],
                rotate: [0, 0.5, 0]
              } : {}}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut"
              }}
            >
              {/* Browser header */}
              <div className="flex items-center justify-between px-2 py-1 bg-gray-100 rounded-t-lg border-b border-gray-200">
                <div className="flex gap-1">
                  <motion.div
                    className="w-2 h-2 bg-red-500 rounded-full"
                    animate={isPlaying ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-yellow-500 rounded-full"
                    animate={isPlaying ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={isPlaying ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                </div>
                <div className="text-xs text-gray-600 font-bold">FRONTEND</div>
              </div>
              
              {/* Content area */}
              <div className="p-2">
                {/* UI elements */}
                <motion.div
                  className="w-full h-2 bg-purple-400 rounded mb-1"
                  animate={isPlaying ? { width: ['0%', '100%', '0%'] } : {}}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="w-3/4 h-2 bg-pink-400 rounded mb-1"
                  animate={isPlaying ? { width: ['0%', '75%', '0%'] } : {}}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
                />
                <motion.div
                  className="w-1/2 h-2 bg-blue-400 rounded"
                  animate={isPlaying ? { width: ['0%', '50%', '0%'] } : {}}
                  transition={{ duration: 3, repeat: Infinity, delay: 1, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
            
            {/* Cursor/pointer animation */}
            <motion.div
              className="absolute w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs"
              style={{ right: '20px', top: '30px' }}
              animate={isPlaying ? { 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              } : {}}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              👆
            </motion.div>
            
            {/* Floating UI elements */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded flex items-center justify-center text-white text-xs"
                style={{
                  left: `${10 + i * 25}%`,
                  top: '10px'
                }}
                animate={isPlaying ? { 
                  y: [0, 20, 0],
                  rotate: [0, 180, 360],
                  opacity: [0.8, 1, 0.8]
                } : {}}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 1.3,
                  ease: "easeInOut"
                }}
              >
                ✨
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

      case 'framework':
        return (
          <div className="relative w-full h-32 bg-gradient-to-br from-orange-50 to-blue-50 rounded-lg overflow-hidden">
            {/* Foundation base */}
            <motion.div
              className="absolute bottom-4 left-4 right-4 h-2 bg-gray-400 rounded-full"
              animate={isPlaying ? { 
                scale: [1, 1.05, 1],
                opacity: [0.7, 1, 0.7]
              } : {}}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut"
              }}
            />
            
            {/* Building blocks */}
            {[
              { color: 'bg-orange-500', left: '15%', delay: 0 },
              { color: 'bg-blue-500', left: '40%', delay: 0.3 },
              { color: 'bg-green-500', left: '65%', delay: 0.6 }
            ].map((block, i) => (
              <motion.div
                key={i}
                className={`absolute w-12 h-12 ${block.color} rounded shadow-lg flex items-center justify-center text-white font-bold text-xs`}
                style={{ left: block.left, bottom: '8px' }}
                animate={isPlaying ? { 
                  y: [0, -30, 0],
                  rotate: [0, 45, 0],
                  scale: [1, 1.1, 1]
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: block.delay,
                  ease: "easeInOut"
                }}
              >
                {i + 1}
              </motion.div>
            ))}
            
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {[0, 1].map((i) => (
                <motion.line
                  key={i}
                  x1={`${20 + i * 25}%`}
                  y1="40"
                  x2={`${45 + i * 25}%`}
                  y2="40"
                  stroke="#666"
                  strokeWidth="2"
                  strokeDasharray="4,2"
                  animate={isPlaying ? {
                    strokeDashoffset: [0, -6]
                  } : {}}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "linear"
                  }}
                />
              ))}
            </svg>
            
            {/* Floating framework icon */}
            <motion.div
              className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-lg"
              animate={isPlaying ? { 
                y: [0, -10, 0],
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0]
              } : {}}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut"
              }}
            >
              FRAMEWORK
            </motion.div>
            
            {/* Sparkle effects */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-yellow-400 text-xs"
                style={{
                  left: `${10 + i * 20}%`,
                  top: `${20 + (i % 2) * 30}px`
                }}
                animate={isPlaying ? { 
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  rotate: [0, 180, 360]
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              >
                ✨
              </motion.div>
            ))}
          </div>
        );

      case 'git':
        return (
          <div className="relative w-full h-32 bg-gradient-to-br from-gray-50 to-orange-50 rounded-lg overflow-hidden">
            {/* Git timeline/branch */}
            <svg className="absolute inset-0 w-full h-full">
              {/* Main branch line */}
              <motion.line
                x1="20"
                y1="30"
                x2="280"
                y2="30"
                stroke="#FF6B35"
                strokeWidth="3"
                animate={isPlaying ? {
                  pathLength: [0, 1]
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Branch lines */}
              <motion.path
                d="M 60 30 L 60 60 L 120 60"
                stroke="#4ECDC4"
                strokeWidth="2"
                fill="none"
                animate={isPlaying ? {
                  pathLength: [0, 1]
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5,
                  ease: "easeInOut"
                }}
              />
              
              <motion.path
                d="M 180 30 L 180 60 L 240 60"
                stroke="#45B7D1"
                strokeWidth="2"
                fill="none"
                animate={isPlaying ? {
                  pathLength: [0, 1]
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1,
                  ease: "easeInOut"
                }}
              />
            </svg>
            
            {/* Commits */}
            {[
              { x: 20, y: 30, color: 'bg-red-500', delay: 0 },
              { x: 60, y: 30, color: 'bg-orange-500', delay: 0.3 },
              { x: 120, y: 30, color: 'bg-yellow-500', delay: 0.6 },
              { x: 180, y: 30, color: 'bg-green-500', delay: 0.9 },
              { x: 240, y: 30, color: 'bg-blue-500', delay: 1.2 },
              { x: 60, y: 60, color: 'bg-teal-500', delay: 1.5 },
              { x: 120, y: 60, color: 'bg-cyan-500', delay: 1.8 },
              { x: 180, y: 60, color: 'bg-indigo-500', delay: 2.1 },
              { x: 240, y: 60, color: 'bg-purple-500', delay: 2.4 }
            ].map((commit, i) => (
              <motion.div
                key={i}
                className={`absolute w-4 h-4 ${commit.color} rounded-full border-2 border-white shadow-md`}
                style={{ left: `${commit.x}px`, top: `${commit.y}px` }}
                animate={isPlaying ? { 
                  scale: [0, 1.2, 1],
                  opacity: [0, 1]
                } : {}}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  delay: commit.delay,
                  ease: "easeOut"
                }}
              />
            ))}
            
            {/* Git logo/label */}
            <motion.div
              className="absolute top-4 right-4 px-3 py-1 bg-gray-800 text-white rounded-full text-xs font-bold"
              animate={isPlaying ? { 
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8]
              } : {}}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              GIT
            </motion.div>
            
            {/* Merge indicators */}
            <motion.div
              className="absolute text-green-600 text-sm font-bold"
              style={{ left: '120px', top: '45px' }}
              animate={isPlaying ? { 
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0.5]
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 1.5,
                ease: "easeInOut"
              }}
            >
              ⬇️
            </motion.div>
          </div>
        );

      case 'http':
        return (
          <div className="relative w-full h-32 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg overflow-hidden">
            {/* Client side */}
            <motion.div
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-lg"
              animate={isPlaying ? { 
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8]
              } : {}}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              CLIENT
            </motion.div>
            
            {/* Server side */}
            <motion.div
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-lg"
              animate={isPlaying ? { 
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8]
              } : {}}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              SERVER
            </motion.div>
            
            {/* Request/Response packets */}
            {[...Array(3)].map((_, i) => (
              <div key={i}>
                {/* Request packet */}
                <motion.div
                  className="absolute w-8 h-6 bg-blue-400 rounded flex items-center justify-center text-white text-xs font-bold"
                  style={{ top: '35%' }}
                  animate={isPlaying ? { 
                    x: [80, 200, 80],
                    opacity: [0, 1, 1, 0]
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 1,
                    ease: "easeInOut"
                  }}
                >
                  GET
                </motion.div>
                
                {/* Response packet */}
                <motion.div
                  className="absolute w-8 h-6 bg-green-400 rounded flex items-center justify-center text-white text-xs font-bold"
                  style={{ top: '55%' }}
                  animate={isPlaying ? { 
                    x: [200, 80, 200],
                    opacity: [0, 1, 1, 0]
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 1 + 0.5,
                    ease: "easeInOut"
                  }}
                >
                  200
                </motion.div>
              </div>
            ))}
            
            {/* HTTP label */}
            <motion.div
              className="absolute top-4 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-800 text-white rounded-full text-xs font-bold"
              animate={isPlaying ? { 
                y: [0, -5, 0]
              } : {}}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              HTTP/1.1
            </motion.div>
            
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <motion.line
                x1="80"
                y1="64"
                x2="200"
                y2="64"
                stroke="#666"
                strokeWidth="1"
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
            </svg>
          </div>
        );

      case 'json':
        return (
          <div className="relative w-full h-32 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg overflow-hidden p-4">
            {/* JSON structure */}
            <motion.div
              className="font-mono text-xs bg-white rounded p-2 shadow-inner"
              animate={isPlaying ? { 
                scale: [1, 1.02, 1],
                opacity: [0.9, 1, 0.9]
              } : {}}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <motion.div
                className="text-gray-600"
                animate={isPlaying ? { opacity: [0.5, 1, 0.5] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {"{"}
              </motion.div>
              <motion.div
                className="ml-4 text-blue-600"
                animate={isPlaying ? { opacity: [0.5, 1, 0.5] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
              >
                "name":
              </motion.div>
              <motion.div
                className="ml-8 text-green-600"
                animate={isPlaying ? { opacity: [0.5, 1, 0.5] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
              >
                "value"
              </motion.div>
              <motion.div
                className="ml-4 text-blue-600"
                animate={isPlaying ? { opacity: [0.5, 1, 0.5] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              >
                "active":
              </motion.div>
              <motion.div
                className="ml-8 text-orange-600"
                animate={isPlaying ? { opacity: [0.5, 1, 0.5] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
              >
                true
              </motion.div>
              <motion.div
                className="text-gray-600"
                animate={isPlaying ? { opacity: [0.5, 1, 0.5] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                {"}"}
              </motion.div>
            </motion.div>
            
            {/* Data particles */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400 rounded-full"
                style={{
                  left: `${20 + i * 20}%`,
                  top: '50%'
                }}
                animate={isPlaying ? { 
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0]
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
            
            {/* JSON label */}
            <motion.div
              className="absolute top-4 right-4 px-2 py-1 bg-gray-800 text-white rounded text-xs font-bold"
              animate={isPlaying ? { 
                rotate: [0, 2, -2, 0]
              } : {}}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              JSON
            </motion.div>
          </div>
        );

      case 'variable':
        return (
          <div className="relative w-full h-32 bg-gradient-to-br from-yellow-50 to-blue-50 rounded-lg overflow-hidden">
            {/* Variable container */}
            <motion.div
              className="absolute left-4 top-8 w-24 h-16 bg-yellow-400 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-lg border-2 border-yellow-600"
              animate={isPlaying ? { 
                scale: [1, 1.1, 1],
                rotate: [0, 2, -2, 0]
              } : {}}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <div className="text-center">
                <div>VAR</div>
                <div className="text-xs opacity-75">x = 42</div>
              </div>
            </motion.div>
            
            {/* Value visualization */}
            <motion.div
              className="absolute right-4 top-8 w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
              animate={isPlaying ? { 
                x: [0, -30, 0],
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8]
              } : {}}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              42
            </motion.div>
            
            {/* Connection arrow */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <motion.path
                d="M 96 32 L 200 32"
                stroke="#666"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
                animate={isPlaying ? {
                  pathLength: [0, 1]
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#666" />
                </marker>
              </defs>
            </svg>
            
            {/* Type indicator */}
            <motion.div
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-purple-600 text-white rounded-full text-xs font-bold"
              animate={isPlaying ? { 
                y: [0, -5, 0],
                opacity: [0.7, 1, 0.7]
              } : {}}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              Number
            </motion.div>
            
            {/* Memory slots visualization */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-12 h-2 bg-gray-300 rounded"
                style={{
                  left: `${10 + i * 15}%`,
                  bottom: '20px'
                }}
                animate={isPlaying ? { 
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.1, 1]
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

      case 'function':
        return (
          <div className="relative w-full h-32 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg overflow-hidden">
            {/* Function box */}
            <motion.div
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-lg"
              animate={isPlaying ? { 
                scale: [1, 1.05, 1],
                rotate: [0, 3, -3, 0]
              } : {}}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <div className="text-center">
                <div>FUNCTION</div>
                <div className="text-xs opacity-75">f(x)</div>
              </div>
            </motion.div>
            
            {/* Input parameters */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`input-${i}`}
                className="absolute w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-white text-xs font-bold"
                style={{
                  left: `${10 + i * 12}%`,
                  top: '20px'
                }}
                animate={isPlaying ? { 
                  x: [0, 120, 0],
                  scale: [1, 0.8, 1],
                  opacity: [0, 1, 0]
                } : {}}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeInOut"
                }}
              >
                {i + 1}
              </motion.div>
            ))}
            
            {/* Output results */}
            {[...Array(2)].map((_, i) => (
              <motion.div
                key={`output-${i}`}
                className="absolute w-8 h-8 bg-red-400 rounded-full flex items-center justify-center text-white text-xs font-bold"
                style={{
                  right: `${20 + i * 15}%`,
                  bottom: '20px'
                }}
                animate={isPlaying ? { 
                  scale: [0, 1.2, 0],
                  opacity: [0, 1, 0]
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 1.5 + 1,
                  ease: "easeInOut"
                }}
              >
                {String.fromCharCode(65 + i)} {/* A, B */}
              </motion.div>
            ))}
            
            {/* Processing indicator */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl"
              animate={isPlaying ? { 
                rotate: [0, 360],
                opacity: [0.5, 1, 0.5]
              } : {}}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              ⚙️
            </motion.div>
            
            {/* Return arrow */}
            <motion.div
              className="absolute bottom-4 right-4 text-lg font-bold text-purple-600"
              animate={isPlaying ? { 
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0.5]
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 1.5,
                ease: "easeInOut"
              }}
            >
                → return
            </motion.div>
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
