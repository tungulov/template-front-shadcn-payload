"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 pb-20 sm:p-20 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-4xl w-full space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/40 bg-clip-text text-transparent tracking-tight"
          >
            Tungulov.space
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium"
          >
            Избавляем вас от головной боли разработки
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Сконцентрируйтесь на бизнесе, а мы позаботимся о продукте
          </p>
        </motion.div>
      </div>
    </div>
  );
}
