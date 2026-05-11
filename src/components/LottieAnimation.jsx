import { motion } from 'framer-motion';

const LottieAnimation = ({ animationType, isPlaying }) => {
  // Simple CSS-based animations as Lottie alternatives
  const renderAnimation = () => {
    switch (animationType) {
      case 'api':
        return (
          <div className="relative w-full h-80 bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-100 rounded-lg overflow-hidden">
            {/* Background grid effect */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-grid-pattern" style={{
                backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} />
            </div>

            <div className="relative h-full flex items-center justify-between px-4">
              {/* Client side */}
              <motion.div
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-2xl shadow-lg"
                  animate={isPlaying ? { 
                    scale: [1, 1.1, 1],
                    y: [0, -5, 0]
                  } : {}}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                  }}
                >
                  📱
                </motion.div>
                <span className="text-xs font-semibold text-blue-700">CLIENT</span>
              </motion.div>

              {/* Forward arrow with label */}
              <motion.div
                className="flex flex-col items-center gap-2 mx-2"
                animate={isPlaying ? { x: [-10, 10, -10] } : {}}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-3xl font-bold text-blue-600">→</div>
                <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">REQUEST</span>
              </motion.div>

              {/* API Waiter - The star of the show! */}
              <motion.div
                className="flex flex-col items-center"
                animate={isPlaying ? { 
                  x: [0, -90, 0, 90, 0],
                  y: [0, -10, 0, -10, 0]
                } : {}}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="text-5xl mb-1"
                  animate={isPlaying ? {
                    rotateZ: [0, -5, 5, -5, 0]
                  } : {}}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                  }}
                >
                  🧑‍💼
                </motion.div>
                <motion.div
                  className="w-12 h-8 bg-gradient-to-br from-red-400 to-red-500 rounded-lg flex items-center justify-center text-white text-xl shadow-lg"
                  animate={isPlaying ? {
                    scale: [1, 1.05, 1]
                  } : {}}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                  }}
                >
                  🍽️
                </motion.div>
                <span className="text-xs font-bold text-red-600 mt-1">API</span>
              </motion.div>

              {/* Return arrow with label */}
              <motion.div
                className="flex flex-col items-center gap-2 mx-2"
                animate={isPlaying ? { x: [10, -10, 10] } : {}}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="text-3xl font-bold text-green-600">←</div>
                <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">RESPONSE</span>
              </motion.div>

              {/* Server side */}
              <motion.div
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-white text-2xl shadow-lg"
                  animate={isPlaying ? { 
                    scale: [1, 1.1, 1],
                    y: [0, -5, 0]
                  } : {}}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  ⚙️
                </motion.div>
                <span className="text-xs font-semibold text-green-700">SERVER</span>
              </motion.div>
            </div>
          </div>
        );

      case 'database':
        return (
          <div className="relative w-full h-80 bg-gradient-to-br from-purple-50 via-purple-100 to-indigo-100 rounded-lg overflow-hidden">
            {/* Background grid effect */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-grid-pattern" style={{
                backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} />
            </div>

            <div className="relative h-full flex items-center justify-center gap-8">
              {/* Request arrow */}
              <motion.div
                className="flex flex-col items-center gap-2"
                animate={isPlaying ? { x: [-20, 20, -20] } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-3xl font-bold text-purple-600">→</div>
                <span className="text-xs font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded">BUSCAR</span>
              </motion.div>

              {/* Database Cabinet/Vault */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                {/* Cabinet outer */}
                <motion.div
                  className="relative w-24 h-32 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg shadow-2xl border-4 border-purple-900 overflow-hidden"
                  animate={isPlaying ? {
                    rotateZ: [-2, 2, -2]
                  } : {}}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Cabinet door handle */}
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-6 bg-yellow-500 rounded-full" />

                  {/* Drawers/Shelves */}
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-1/4 border-b border-purple-700 flex items-center justify-center">
                      <motion.div
                        className="w-4 h-3 bg-indigo-300 rounded-sm"
                        animate={isPlaying ? {
                          opacity: [0.3, 1, 0.3],
                          scale: [0.8, 1, 0.8]
                        } : {}}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                  ))}
                </motion.div>

                <span className="text-xs font-bold text-purple-700 mt-2">DATABASE</span>
              </motion.div>

              {/* Response arrow with data particles */}
              <motion.div
                className="flex flex-col items-center gap-2 relative"
                animate={isPlaying ? { x: [20, -20, 20] } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="text-3xl font-bold text-indigo-600">←</div>
                <span className="text-xs font-bold text-indigo-600 bg-indigo-100 px-2 py-1 rounded">DADOS</span>

                {/* Data packets returning */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full shadow-md"
                    style={{
                      left: i * 8,
                      top: 30
                    }}
                    animate={isPlaying ? {
                      x: [0, -40, 0],
                      y: [0, -50, 0],
                      opacity: [0, 1, 0]
                    } : {}}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.5 + i * 0.15,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        );

      case 'login':
        return (
          <div className="relative w-full h-80 bg-gradient-to-br from-red-50 via-red-100 to-rose-100 rounded-lg overflow-hidden">
            {/* Background grid effect */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-grid-pattern" style={{
                backgroundImage: 'linear-gradient(rgba(220, 38, 38, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} />
            </div>

            <div className="relative h-full flex items-center justify-between px-8 gap-4">
              {/* User/Input side */}
              <motion.div
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {/* User icon */}
                <motion.div
                  className="text-4xl"
                  animate={isPlaying ? {
                    scale: [1, 1.1, 1]
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  👤
                </motion.div>

                {/* Form box */}
                <motion.div
                  className="w-20 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg shadow-lg overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {/* Form lines (username/password fields) */}
                  {[...Array(2)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="h-1/2 flex items-center justify-center"
                      animate={isPlaying ? {
                        opacity: [0.3, 1, 0.3]
                      } : {}}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="w-14 h-2 bg-white rounded opacity-70" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Submit button */}
                <motion.div
                  className="w-16 h-6 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md"
                  animate={isPlaying ? {
                    scale: [1, 1.05, 1],
                    opacity: [0.7, 1, 0.7]
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5,
                    ease: "easeInOut"
                  }}
                >
                  ENVIAR
                </motion.div>
              </motion.div>

              {/* Arrow - Request going to lock */}
              <motion.div
                className="flex flex-col items-center gap-2"
                animate={isPlaying ? { x: [-15, 15, -15] } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-3xl font-bold text-red-600">→</div>
                <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-1 rounded">VERIFICAR</span>
              </motion.div>

              {/* Lock/Unlock Animation */}
              <motion.div
                className="flex flex-col items-center gap-2 relative h-32 justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {/* Locked state */}
                <motion.div
                  className="text-5xl"
                  animate={isPlaying ? {
                    opacity: [1, 1, 0],
                    scale: [1, 1, 0.8]
                  } : {}}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    times: [0, 0.35, 0.5],
                    ease: "easeInOut"
                  }}
                >
                  🔒
                </motion.div>

                {/* Unlocking animation - Lock opening */}
                <motion.div
                  className="absolute text-5xl"
                  animate={isPlaying ? {
                    opacity: [0, 0, 1, 1, 0],
                    rotateZ: [0, 0, -10, 15, 15],
                    y: [0, 0, 0, 5, 5]
                  } : {}}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    times: [0, 0.35, 0.5, 0.65, 1],
                    ease: "easeInOut"
                  }}
                >
                  🔓
                </motion.div>

                {/* Checkmark - Success */}
                <motion.div
                  className="absolute text-5xl"
                  animate={isPlaying ? {
                    opacity: [0, 0, 0, 1, 1, 1, 0],
                    scale: [0.5, 0.5, 0.8, 1, 1, 1, 0.8],
                    y: [10, 10, 5, 0, 0, 0, -5]
                  } : {}}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    times: [0, 0.35, 0.5, 0.65, 0.7, 0.85, 1],
                    ease: "easeOut"
                  }}
                >
                  ✅
                </motion.div>

                <span className="text-xs font-bold text-red-700 mt-2">AUTENTICAÇÃO</span>
              </motion.div>

              {/* Arrow - Response coming back */}
              <motion.div
                className="flex flex-col items-center gap-2"
                animate={isPlaying ? { x: [15, -15, 15] } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="text-3xl font-bold text-green-600">←</div>
                <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">ACESSO</span>
              </motion.div>

              {/* Success state */}
              <motion.div
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="text-4xl"
                  animate={isPlaying ? {
                    scale: [1, 1.15, 1],
                    y: [0, -8, 0]
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                >
                  🎉
                </motion.div>

                <motion.div
                  className="w-20 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg flex items-center justify-center text-white text-xl"
                  animate={isPlaying ? {
                    opacity: [0.5, 1, 0.5]
                  } : {}}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                >
                  ✓
                </motion.div>

                <span className="text-xs font-bold text-green-700">LOGADO</span>
              </motion.div>
            </div>
          </div>
        );

      case 'cloud':
        return (
          <div className="relative w-full h-80 bg-gradient-to-b from-sky-100 via-blue-100 to-blue-200 rounded-lg overflow-hidden">
            {/* Background clouds */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-2 left-10 text-4xl opacity-50">☁️</div>
              <div className="absolute top-4 right-12 text-5xl opacity-40">☁️</div>
            </div>

            <div className="relative h-full flex items-center justify-between px-6 gap-4">
              {/* Local Storage - Device side */}
              <motion.div
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="text-4xl"
                  animate={isPlaying ? {
                    scale: [1, 1.1, 1]
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  💾
                </motion.div>

                <div className="text-xs font-bold text-blue-700">LOCAL</div>
              </motion.div>

              {/* Upload arrow and particles */}
              <motion.div
                className="flex flex-col items-center gap-2 relative h-full justify-start pt-4"
              >
                <div className="text-2xl font-bold text-blue-600">↑</div>
                <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">UPLOAD</span>

                {/* Upload particles going up */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`up-${i}`}
                    className="absolute w-3 h-3 bg-blue-500 rounded-full"
                    style={{
                      left: 0,
                      bottom: '20px'
                    }}
                    animate={isPlaying ? {
                      y: [0, -60, -120],
                      opacity: [1, 1, 0],
                      scale: [1, 1, 0.5]
                    } : {}}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.6,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </motion.div>

              {/* Cloud - Main Element */}
              <motion.div
                className="flex flex-col items-center gap-2 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                {/* Cloud shape */}
                <motion.div
                  className="text-7xl"
                  animate={isPlaying ? {
                    y: [0, -8, 0],
                    scale: [1, 1.05, 1]
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ☁️
                </motion.div>

                {/* Data storage indicator - spinning circles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`storage-${i}`}
                    className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                    animate={isPlaying ? {
                      opacity: [0.5, 1, 0.5]
                    } : {}}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                    style={{
                      left: `calc(50% + ${Math.cos(i * 2.09) * 12}px)`,
                      top: `calc(50% + ${Math.sin(i * 2.09) * 12}px)`
                    }}
                  />
                ))}

                <span className="text-xs font-bold text-blue-700 mt-2">STORAGE</span>
              </motion.div>

              {/* Download arrow and particles */}
              <motion.div
                className="flex flex-col items-center gap-2 relative h-full justify-start pt-4"
              >
                <div className="text-2xl font-bold text-green-600">↓</div>
                <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">DOWNLOAD</span>

                {/* Download particles going down */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`down-${i}`}
                    className="absolute w-3 h-3 bg-green-500 rounded-full"
                    style={{
                      left: 0,
                      top: '40px'
                    }}
                    animate={isPlaying ? {
                      y: [0, 60, 120],
                      opacity: [1, 1, 0],
                      scale: [1, 1, 0.5]
                    } : {}}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: 1 + i * 0.6,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </motion.div>

              {/* Device side - Receiving */}
              <motion.div
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="text-4xl"
                  animate={isPlaying ? {
                    scale: [1, 1.1, 1]
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.2
                  }}
                >
                  📱
                </motion.div>

                <div className="text-xs font-bold text-green-700">ACESSADO</div>
              </motion.div>
            </div>
          </div>
        );

      case 'frontend':
        return (
          <div className="relative w-full h-80 bg-gradient-to-br from-purple-50 via-pink-100 to-purple-100 rounded-lg overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-grid-pattern" style={{
                backgroundImage: 'linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} />
            </div>

            <div className="relative h-full flex items-center justify-between px-6 gap-4">
              {/* User/Input */}
              <motion.div
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="text-4xl"
                  animate={isPlaying ? {
                    scale: [1, 1.1, 1]
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  👤
                </motion.div>
                <div className="text-xs font-bold text-purple-700">USUÁRIO</div>
              </motion.div>

              {/* Interaction arrow */}
              <motion.div
                className="flex flex-col items-center gap-2"
                animate={isPlaying ? { x: [-10, 10, -10] } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-3xl font-bold text-pink-600">→</div>
                <span className="text-xs font-bold text-pink-600 bg-pink-100 px-2 py-1 rounded">CLICA</span>
              </motion.div>

              {/* Browser/Screen */}
              <motion.div
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                {/* Browser frame */}
                <motion.div
                  className="w-24 h-20 bg-white rounded-lg border-4 border-purple-600 shadow-xl overflow-hidden"
                  animate={isPlaying ? {}
                  : {}}
                >
                  {/* Browser header */}
                  <div className="bg-purple-500 h-4 flex items-center px-2 gap-1">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                  </div>

                  {/* Content area - animated elements appearing */}
                  <div className="flex-1 p-2 flex flex-col gap-1 justify-center">
                    <motion.div
                      className="h-2 bg-purple-300 rounded"
                      animate={isPlaying ? {
                        width: ['20%', '100%', '20%']
                      } : {}}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div
                      className="h-2 bg-pink-300 rounded"
                      animate={isPlaying ? {
                        width: ['30%', '85%', '30%']
                      } : {}}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: 0.3,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div
                      className="h-2 bg-purple-200 rounded"
                      animate={isPlaying ? {
                        width: ['50%', '60%', '50%']
                      } : {}}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: 0.6,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </motion.div>

                <span className="text-xs font-bold text-purple-700">INTERFACE</span>
              </motion.div>

              {/* Response arrow */}
              <motion.div
                className="flex flex-col items-center gap-2"
                animate={isPlaying ? { x: [10, -10, 10] } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="text-3xl font-bold text-purple-600">←</div>
                <span className="text-xs font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded">MOSTRA</span>
              </motion.div>

              {/* Reaction/Feedback */}
              <motion.div
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="text-4xl"
                  animate={isPlaying ? {
                    scale: [1, 1.2, 1],
                    rotateZ: [-10, 0, 10]
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                >
                  😊
                </motion.div>
                <div className="text-xs font-bold text-pink-700">FELIZ</div>
              </motion.div>
            </div>
          </div>
        );

      case 'backend':
        return (
          <div className="relative w-full h-80 bg-gradient-to-br from-orange-50 via-amber-100 to-orange-100 rounded-lg overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-grid-pattern" style={{
                backgroundImage: 'linear-gradient(rgba(194, 65, 12, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(194, 65, 12, 0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} />
            </div>

            <div className="relative h-full flex items-center justify-between px-4 gap-2">
              {/* Order incoming */}
              <motion.div
                className="flex flex-col items-center gap-2"
                animate={isPlaying ? { x: [-15, 15, -15] } : {}}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-3xl font-bold text-orange-600">→</div>
                <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded">PEDIDO</span>
              </motion.div>

              {/* Kitchen - Main area */}
              <motion.div
                className="flex flex-col items-center gap-2 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                {/* Chef */}
                <motion.div
                  className="text-5xl"
                  animate={isPlaying ? {
                    y: [0, -8, 0],
                    rotateZ: [-5, 5, -5]
                  } : {}}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  👨‍🍳
                </motion.div>

                {/* Kitchen counter - stove */}
                <motion.div
                  className="w-20 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg shadow-xl flex items-center justify-center text-2xl border-2 border-red-700"
                  animate={isPlaying ? {
                    boxShadow: ['0px 0px 0px rgba(239, 68, 68, 0)', '0px 0px 20px rgba(239, 68, 68, 0.8)', '0px 0px 0px rgba(239, 68, 68, 0)']
                  } : {}}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🔥
                </motion.div>

                {/* Activity indicators around kitchen */}
                
                {/* Ingredients animation - left side */}
                <motion.div
                  className="absolute -left-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-2"
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={`ingredient-${i}`}
                      className="w-3 h-3 bg-yellow-500 rounded-full"
                      animate={isPlaying ? {
                        x: [0, 15, 0],
                        opacity: [0.3, 1, 0.3]
                      } : {}}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.div>

                {/* Stock check animation - right side */}
                <motion.div
                  className="absolute -right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-2"
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={`stock-${i}`}
                      className="w-3 h-3 bg-green-500 rounded-full"
                      animate={isPlaying ? {
                        x: [0, -15, 0],
                        opacity: [0.3, 1, 0.3]
                      } : {}}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: 0.5 + i * 0.4,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.div>

                {/* Cooking process indicators - top */}
                <motion.div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 flex gap-3"
                >
                  {['📋', '🥘', '💰'].map((emoji, i) => (
                    <motion.div
                      key={i}
                      className="text-2xl"
                      animate={isPlaying ? {
                        scale: [0.8, 1.2, 0.8],
                        opacity: [0.5, 1, 0.5]
                      } : {}}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                      }}
                    >
                      {emoji}
                    </motion.div>
                  ))}
                </motion.div>

                <span className="text-xs font-bold text-orange-700 mt-2">COZINHA</span>
              </motion.div>

              {/* Dish ready - outgoing */}
              <motion.div
                className="flex flex-col items-center gap-2"
                animate={isPlaying ? { x: [15, -15, 15] } : {}}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <div className="text-3xl font-bold text-green-600">←</div>
                <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">PRONTO</span>
              </motion.div>

              {/* Result/Dish */}
              <motion.div
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="text-5xl"
                  animate={isPlaying ? {
                    scale: [0.8, 1.2, 0.8],
                    rotateZ: [-10, 10, -10]
                  } : {}}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                >
                  🍽️
                </motion.div>
                <div className="text-xs font-bold text-orange-700">PRATO PRONTO</div>
              </motion.div>
            </div>
          </div>
        );

      case 'framework':
        return (
          <div className="relative w-full h-80 bg-gradient-to-br from-indigo-50 via-blue-100 to-purple-100 rounded-lg overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-grid-pattern" style={{
                backgroundImage: 'linear-gradient(rgba(79, 70, 229, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(79, 70, 229, 0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} />
            </div>

            <div className="relative h-full flex items-center justify-between px-4 gap-2">
              {/* Developer/Architect */}
              <motion.div
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="text-4xl"
                  animate={isPlaying ? {
                    scale: [1, 1.1, 1],
                    rotateZ: [-5, 5, -5]
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  👨‍💻
                </motion.div>
                <div className="text-xs font-bold text-indigo-700">DEV</div>
              </motion.div>

              {/* Request arrow */}
              <motion.div
                className="flex flex-col items-center gap-2"
                animate={isPlaying ? { x: [-10, 10, -10] } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-3xl font-bold text-blue-600">→</div>
                <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">USA</span>
              </motion.div>

              {/* Framework Toolbox */}
              <motion.div
                className="flex flex-col items-center gap-2 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                {/* Toolbox */}
                <motion.div
                  className="w-20 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg shadow-xl flex items-center justify-center text-3xl border-2 border-indigo-800"
                  animate={isPlaying ? {
                    y: [0, -8, 0],
                    rotateZ: [-5, 5, -5]
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🛠️
                </motion.div>

                {/* Tools coming out - left side */}
                <motion.div
                  className="absolute -left-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-2"
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={`tool-${i}`}
                      className="text-lg"
                      animate={isPlaying ? {
                        x: [0, -10, 0],
                        opacity: [0.3, 1, 0.3]
                      } : {}}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "easeInOut"
                      }}
                    >
                      {['📦', '🧩', '📚'][i]}
                    </motion.div>
                  ))}
                </motion.div>

                {/* Components being built - right side */}
                <motion.div
                  className="absolute -right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-2"
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={`component-${i}`}
                      className="w-5 h-5 bg-gradient-to-br from-green-500 to-emerald-600 rounded"
                      animate={isPlaying ? {
                        x: [0, 10, 0],
                        opacity: [0.3, 1, 0.3]
                      } : {}}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: 0.5 + i * 0.4,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.div>

                {/* Building progress indicator - top */}
                <motion.div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 flex gap-2"
                >
                  {['⚙️', '🔧', '✨'].map((emoji, i) => (
                    <motion.div
                      key={i}
                      className="text-lg"
                      animate={isPlaying ? {
                        scale: [0.8, 1.2, 0.8],
                        opacity: [0.5, 1, 0.5]
                      } : {}}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "easeInOut"
                      }}
                    >
                      {emoji}
                    </motion.div>
                  ))}
                </motion.div>

                <span className="text-xs font-bold text-purple-700 mt-2">FRAMEWORK</span>
              </motion.div>

              {/* Response arrow */}
              <motion.div
                className="flex flex-col items-center gap-2"
                animate={isPlaying ? { x: [10, -10, 10] } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="text-3xl font-bold text-emerald-600">←</div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded">OBTÉM</span>
              </motion.div>

              {/* App/Result */}
              <motion.div
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg shadow-xl flex items-center justify-center text-3xl border-2 border-emerald-700"
                  animate={isPlaying ? {
                    scale: [0.9, 1.1, 0.9],
                    rotateZ: [-5, 5, -5]
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  📱
                </motion.div>
                <div className="text-xs font-bold text-emerald-700">APP</div>
              </motion.div>
            </div>
          </div>
        );

      case 'git':
        return (
          <div className="relative w-full h-80 bg-gradient-to-br from-orange-50 via-red-100 to-gray-100 rounded-lg overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-grid-pattern" style={{
                backgroundImage: 'linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} />
            </div>

            <div className="relative h-full flex items-center justify-between px-4 gap-2">
              {/* Developer editing */}
              <motion.div
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="text-4xl"
                  animate={isPlaying ? {
                    rotateZ: [-10, 10, -10]
                  } : {}}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ✏️
                </motion.div>
                <div className="text-xs font-bold text-red-700">EDITA</div>
              </motion.div>

              {/* Save arrow */}
              <motion.div
                className="flex flex-col items-center gap-2"
                animate={isPlaying ? { x: [-10, 10, -10] } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-3xl font-bold text-orange-600">→</div>
                <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded">SALVA</span>
              </motion.div>

              {/* Git Repository Stack */}
              <motion.div
                className="flex flex-col items-center gap-2 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                {/* Stack of versions - appearing and disappearing */}
                <motion.div
                  className="flex flex-col items-center gap-1"
                  animate={isPlaying ? { y: [0, -5, 0] } : {}}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Bottom layer */}
                  <motion.div
                    className="w-20 h-5 bg-gradient-to-br from-red-500 to-orange-600 rounded shadow-md border-l-4 border-orange-400"
                    animate={isPlaying ? {
                      opacity: [1, 0.7, 1],
                      scale: [1, 0.95, 1]
                    } : {}}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="text-xs text-white font-bold px-1 truncate">v1</div>
                  </motion.div>

                  {/* Middle layer */}
                  <motion.div
                    className="w-20 h-5 bg-gradient-to-br from-orange-500 to-yellow-600 rounded shadow-md border-l-4 border-yellow-400 -mt-1"
                    animate={isPlaying ? {
                      opacity: [0.8, 1, 0.8],
                      scale: [0.95, 1, 0.95]
                    } : {}}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  >
                    <div className="text-xs text-white font-bold px-1 truncate">v2</div>
                  </motion.div>

                  {/* Top layer */}
                  <motion.div
                    className="w-20 h-5 bg-gradient-to-br from-yellow-500 to-amber-600 rounded shadow-lg border-l-4 border-amber-400 -mt-1"
                    animate={isPlaying ? {
                      opacity: [0.6, 1, 0.6],
                      scale: [1, 1.05, 1]
                    } : {}}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  >
                    <div className="text-xs text-white font-bold px-1 truncate">v3</div>
                  </motion.div>
                </motion.div>

                {/* Git icon center */}
                <motion.div
                  className="absolute w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg shadow-xl flex items-center justify-center text-3xl border-2 border-gray-600"
                  animate={isPlaying ? {
                    scale: [0.9, 1.1, 0.9]
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ bottom: '0px', zIndex: 10 }}
                >
                  📦
                </motion.div>

                {/* History dots - left side showing past commits */}
                <motion.div
                  className="absolute -left-10 top-1/2 transform -translate-y-1/2 flex flex-col gap-3"
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={`commit-${i}`}
                      className="w-3 h-3 bg-red-500 rounded-full border-2 border-red-300"
                      animate={isPlaying ? {
                        scale: [0.8, 1.2, 0.8],
                        opacity: [0.5, 1, 0.5]
                      } : {}}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.div>

                <span className="text-xs font-bold text-gray-700 mt-2">GIT</span>
              </motion.div>

              {/* Restore arrow */}
              <motion.div
                className="flex flex-col items-center gap-2"
                animate={isPlaying ? { x: [10, -10, 10] } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="text-3xl font-bold text-green-600">←</div>
                <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">RECUPERA</span>
              </motion.div>

              {/* Code restored */}
              <motion.div
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg shadow-xl flex items-center justify-center text-3xl border-2 border-emerald-700"
                  animate={isPlaying ? {
                    scale: [0.9, 1.1, 0.9],
                    rotateZ: [-5, 5, -5]
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  💾
                </motion.div>
                <div className="text-xs font-bold text-green-700">CÓDIGO</div>
              </motion.div>
            </div>
          </div>
        );

      case 'http':
        return (
          <div className="relative w-full h-80 bg-gradient-to-br from-blue-50 via-cyan-100 to-teal-100 rounded-lg overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-grid-pattern" style={{
                backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} />
            </div>

            <div className="relative h-full flex items-center justify-between px-4 gap-2">
              {/* Client */}
              <motion.div
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-xl flex items-center justify-center text-3xl border-2 border-blue-700"
                  animate={isPlaying ? {
                    scale: [1, 1.05, 1]
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  💻
                </motion.div>
                <div className="text-xs font-bold text-blue-700">CLIENTE</div>
              </motion.div>

              {/* Request arrow */}
              <motion.div
                className="flex flex-col items-center gap-2"
                animate={isPlaying ? { x: [-10, 10, -10] } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-3xl font-bold text-blue-600">→</div>
                <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">GET</span>
              </motion.div>

              {/* HTTP Protocol box */}
              <motion.div
                className="flex flex-col items-center gap-2 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                {/* Protocol indicator */}
                <motion.div
                  className="w-20 h-8 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full shadow-lg flex items-center justify-center text-white text-xs font-bold"
                  animate={isPlaying ? {
                    y: [0, -5, 0]
                  } : {}}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  HTTP/1.1
                </motion.div>

                {/* Method indicators */}
                <div className="flex gap-2">
                  {['GET', 'POST', 'PUT'].map((method, i) => (
                    <motion.div
                      key={i}
                      className="px-2 py-1 bg-white rounded text-xs font-bold text-blue-600 border border-blue-300"
                      animate={isPlaying ? {
                        scale: [0.9, 1.1, 0.9],
                        opacity: [0.5, 1, 0.5]
                      } : {}}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                    >
                      {method}
                    </motion.div>
                  ))}
                </div>

                {/* Status code indicator - bottom */}
                <motion.div
                  className="px-2 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded text-xs font-bold"
                  animate={isPlaying ? {
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  } : {}}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: 1,
                    ease: "easeInOut"
                  }}
                >
                  200 OK
                </motion.div>

                <span className="text-xs font-bold text-indigo-700 mt-1">PROTOCOLO</span>
              </motion.div>

              {/* Response arrow */}
              <motion.div
                className="flex flex-col items-center gap-2"
                animate={isPlaying ? { x: [10, -10, 10] } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="text-3xl font-bold text-emerald-600">←</div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded">DADOS</span>
              </motion.div>

              {/* Server */}
              <motion.div
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg shadow-xl flex items-center justify-center text-3xl border-2 border-emerald-700"
                  animate={isPlaying ? {
                    scale: [0.9, 1.1, 0.9]
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  🖥️
                </motion.div>
                <div className="text-xs font-bold text-emerald-700">SERVIDOR</div>
              </motion.div>
            </div>
          </div>
        );

      case 'json':
        return (
          <div className="relative w-full h-80 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 rounded-lg overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-grid-pattern" style={{
                backgroundImage: 'linear-gradient(rgba(79, 70, 229, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(79, 70, 229, 0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} />
            </div>

            <div className="relative h-full flex items-center justify-center px-8">
              {/* JSON structure with better visualization */}
              <motion.div
                className="font-mono text-xs bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 rounded-lg p-4 shadow-xl border border-gray-700 max-w-xs"
                animate={isPlaying ? { 
                  scale: [1, 1.02, 1],
                  opacity: [0.95, 1, 0.95]
                } : {}}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <motion.div
                  className="text-gray-400"
                  animate={isPlaying ? { opacity: [0.6, 1, 0.6] } : {}}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  {"{"}
                </motion.div>

                <motion.div
                  className="ml-4 text-blue-400 flex gap-2"
                  animate={isPlaying ? { opacity: [0.6, 1, 0.6], x: [0, 2, 0] } : {}}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.15 }}
                >
                  <span>"nome":</span>
                  <span className="text-green-400">"dados"</span>
                </motion.div>

                <motion.div
                  className="ml-4 text-blue-400 flex gap-2"
                  animate={isPlaying ? { opacity: [0.6, 1, 0.6], x: [0, 2, 0] } : {}}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
                >
                  <span>"tipo":</span>
                  <span className="text-orange-400">"objeto"</span>
                </motion.div>

                <motion.div
                  className="ml-4 text-blue-400 flex gap-2"
                  animate={isPlaying ? { opacity: [0.6, 1, 0.6], x: [0, 2, 0] } : {}}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.45 }}
                >
                  <span>"ativo":</span>
                  <span className="text-purple-400">true</span>
                </motion.div>

                <motion.div
                  className="text-gray-400"
                  animate={isPlaying ? { opacity: [0.6, 1, 0.6] } : {}}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.6 }}
                >
                  {"}"}
                </motion.div>
              </motion.div>

              {/* Data flow particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-400 rounded-full"
                    style={{
                      left: `${15 + i * 15}%`,
                      top: `${20 + (i % 2) * 60}%`
                    }}
                    animate={isPlaying ? { 
                      scale: [0, 1.5, 0],
                      opacity: [0, 1, 0],
                      y: i % 2 === 0 ? [0, -20, 0] : [0, 20, 0]
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
            </div>
          </div>
        );

      case 'variable':
        return (
          <div className="relative w-full h-80 bg-gradient-to-br from-yellow-50 via-amber-100 to-orange-100 rounded-lg overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-grid-pattern" style={{
                backgroundImage: 'linear-gradient(rgba(217, 119, 6, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(217, 119, 6, 0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} />
            </div>

            <div className="relative h-full flex items-center justify-between px-4 gap-2">
              {/* Developer/Code */}
              <motion.div
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="text-4xl"
                  animate={isPlaying ? {
                    rotateZ: [-5, 5, -5]
                  } : {}}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  👨‍💻
                </motion.div>
                <div className="text-xs font-bold text-yellow-700">CRIAÇÃO</div>
              </motion.div>

              {/* Assignment arrow */}
              <motion.div
                className="flex flex-col items-center gap-2"
                animate={isPlaying ? { x: [-10, 10, -10] } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-3xl font-bold text-yellow-600">→</div>
                <span className="text-xs font-bold text-yellow-600 bg-yellow-100 px-2 py-1 rounded">DEFINE</span>
              </motion.div>

              {/* Variable Box */}
              <motion.div
                className="flex flex-col items-center gap-3 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                {/* Variable name label */}
                <motion.div
                  className="text-xs font-bold text-gray-700 bg-white px-2 py-1 rounded border border-yellow-400"
                  animate={isPlaying ? {
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8]
                  } : {}}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  x
                </motion.div>

                {/* Variable Container/Box */}
                <motion.div
                  className="w-24 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg shadow-xl flex items-center justify-center border-3 border-yellow-600 relative"
                  animate={isPlaying ? {
                    scale: [1, 1.05, 1],
                    rotateZ: [-2, 2, -2]
                  } : {}}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Value inside */}
                  <motion.div
                    className="text-3xl font-bold text-white"
                    animate={isPlaying ? {
                      scale: [1, 1.2, 1],
                      opacity: [0.8, 1, 0.8]
                    } : {}}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    42
                  </motion.div>
                </motion.div>

                {/* Type tag */}
                <motion.div
                  className="text-xs font-bold text-white bg-orange-600 px-2 py-1 rounded"
                  animate={isPlaying ? {
                    scale: [0.9, 1.1, 0.9]
                  } : {}}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: 0.3,
                    ease: "easeInOut"
                  }}
                >
                  Number
                </motion.div>

                <span className="text-xs font-bold text-yellow-700 mt-2">VARIÁVEL</span>
              </motion.div>

              {/* Access arrow */}
              <motion.div
                className="flex flex-col items-center gap-2"
                animate={isPlaying ? { x: [10, -10, 10] } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="text-3xl font-bold text-green-600">←</div>
                <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">ACESSA</span>
              </motion.div>

              {/* Use/Reference */}
              <motion.div
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg shadow-xl flex items-center justify-center text-3xl border-2 border-emerald-700"
                  animate={isPlaying ? {
                    scale: [0.9, 1.1, 0.9]
                  } : {}}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  📦
                </motion.div>
                <div className="text-xs font-bold text-green-700">USO</div>
              </motion.div>
            </div>
          </div>
        );

      case 'function':
        return (
          <div className="relative w-full h-80 bg-gradient-to-br from-purple-50 via-fuchsia-100 to-pink-100 rounded-lg overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-grid-pattern" style={{
                backgroundImage: 'linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} />
            </div>

            <div className="relative h-full flex items-center justify-between px-4 gap-2">
              {/* Inputs */}
              <motion.div
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex flex-col gap-2">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-xs font-bold border border-emerald-700"
                      animate={isPlaying ? {
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      } : {}}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                    >
                      {i + 1}
                    </motion.div>
                  ))}
                </div>
                <div className="text-xs font-bold text-emerald-700">ENTRADA</div>
              </motion.div>

              {/* Input arrow */}
              <motion.div
                className="flex flex-col items-center gap-2"
                animate={isPlaying ? { x: [-10, 10, -10] } : {}}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-3xl font-bold text-purple-600">→</div>
              </motion.div>

              {/* Function Machine */}
              <motion.div
                className="flex flex-col items-center gap-3 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                {/* Function processor box */}
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl shadow-xl flex items-center justify-center text-3xl border-3 border-purple-700"
                  animate={isPlaying ? {
                    scale: [1, 1.08, 1],
                    rotateZ: [-3, 3, -3]
                  } : {}}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ⚙️
                </motion.div>

                {/* Processing indicator */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: '50%'
                    }}
                    animate={isPlaying ? {
                      scale: [0, 1.5, 0],
                      opacity: [0, 1, 0],
                      y: [0, -10, 0]
                    } : {}}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      delay: i * 0.4 + 0.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}

                <span className="text-xs font-bold text-purple-700 mt-2">FUNÇÃO</span>
              </motion.div>

              {/* Output arrow */}
              <motion.div
                className="flex flex-col items-center gap-2"
                animate={isPlaying ? { x: [10, -10, 10] } : {}}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              >
                <div className="text-3xl font-bold text-red-600">→</div>
              </motion.div>

              {/* Outputs */}
              <motion.div
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex flex-col gap-2">
                  {[...Array(2)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-10 h-8 bg-gradient-to-br from-red-500 to-rose-600 rounded flex items-center justify-center text-white text-xs font-bold border border-rose-700"
                      animate={isPlaying ? {
                        scale: [0.8, 1.2, 0.8],
                        opacity: [0.6, 1, 0.6]
                      } : {}}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.5 + i * 0.4,
                        ease: "easeInOut"
                      }}
                    >
                      {['A', 'B'][i]}
                    </motion.div>
                  ))}
                </div>
                <div className="text-xs font-bold text-rose-700">SAÍDA</div>
              </motion.div>
            </div>
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
