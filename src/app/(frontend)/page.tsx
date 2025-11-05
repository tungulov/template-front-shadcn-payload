"use client";

import { motion } from "framer-motion";
import { Server, Code } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 pb-20 sm:p-20 bg-linear-to-br from-background via-background to-muted/20 relative overflow-hidden">
      <div className="w-full space-y-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center w-fit mx-auto space-y-1"
        >
          <motion.h1
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight wrap-break-word"
          >
            <span className="block">Tungulov.space</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium wrap-break-word"
          >
            Избавляем вас от головной боли разработки
          </motion.p>
        </motion.div>

        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="flex items-start justify-center gap-8 sm:gap-20"
          >
            <motion.div
              animate={{
                y: [0, -2, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.15, rotate: 5 }}
              className="text-foreground/60 hover:text-foreground cursor-pointer transition-colors duration-300"
            >
              <Server
                className="size-12 sm:size-14 md:size-20"
                strokeWidth={1.5}
              />
            </motion.div>

            <div className="flex flex-col items-center gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="relative"
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.3), 0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      "0 0 40px rgba(147, 51, 234, 0.4), 0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                      "0 0 20px rgba(59, 130, 246, 0.3), 0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative px-8 py-5 sm:px-10 sm:py-6 rounded-2xl bg-linear-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-blue-500/30 hover:border-purple-500/50 transition-all duration-300 cursor-pointer group"
                >
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 font-semibold text-base sm:text-lg md:text-xl bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent whitespace-nowrap">
                    Давайте приступим к воплощению вашей идеи
                  </span>
                  <motion.div
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500/0 via-purple-500/20 to-pink-500/0 bg-size-[200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                className="text-center space-y-1"
              >
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Напишите о вашем проекте
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  и уже через пару мгновений протестируйте демо
                </p>
              </motion.div>
            </div>

            <motion.div
              animate={{
                y: [0, 2, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              whileHover={{ scale: 1.15, rotate: -5 }}
              className="text-foreground/60 hover:text-foreground cursor-pointer transition-colors duration-300"
            >
              <Code
                className="size-12 sm:size-14 md:size-20"
                strokeWidth={1.5}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
