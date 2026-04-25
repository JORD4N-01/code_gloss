import { useState } from 'react';
import { motion } from 'framer-motion';
import { terms } from '../data/terms';
import TermCard from '../components/TermCard';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredTerms = terms.filter(term => {
    const matchesSearch = term.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-8">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="text-center mb-12"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-800 mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            📘 Glossário Interativo
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Aprenda termos técnicos de programação de forma simples, visual e interativa
          </motion.p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            delay: 0.4,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="mb-8"
        >
          <div className="max-w-2xl mx-auto">
            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <input
                type="text"
                placeholder="🔍 Buscar termos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredTerms.map((term) => (
            <motion.div
              key={term.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <TermCard term={term} />
            </motion.div>
          ))}
        </motion.div>

        {filteredTerms.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="text-center py-12"
          >
            <motion.p 
              className="text-xl text-gray-500"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              😔 Nenhum termo encontrado para "{searchTerm}"
            </motion.p>
            <motion.button
              onClick={() => setSearchTerm('')}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Limpar busca
            </motion.button>
          </motion.div>
        )}

        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            delay: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="text-center mt-16 text-gray-600"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-sm">
              💡 Dica: Use os botões de nível para alternar entre explicações fácil, média e técnica
            </p>
            <p className="text-xs mt-2 text-gray-500">
              ✨ Passe o mouse sobre os cards para ver efeitos interativos
            </p>
          </motion.div>
        </motion.footer>
      </div>
    </motion.div>
  );
};

export default Home;
