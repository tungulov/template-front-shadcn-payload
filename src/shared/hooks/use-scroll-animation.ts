import { Variants } from "framer-motion";

export interface ScrollAnimationConfig {
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
}

/**
 * Хук для генерации настроек scroll-triggered анимаций
 * @param config - конфигурация анимации
 * @returns объект с вариантами анимации и настройками viewport
 */
export function useScrollAnimation(config: ScrollAnimationConfig = {}) {
  const {
    direction = "up",
    delay = 0,
    duration = 0.5,
    distance = 20,
  } = config;

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { y: 0, x: distance };
      case "right":
        return { y: 0, x: -distance };
      default:
        return { y: distance, x: 0 };
    }
  };

  const position = getInitialPosition();

  return {
    initial: {
      opacity: 0,
      ...position,
    },
    whileInView: {
      opacity: 1,
      x: 0,
      y: 0,
    },
    viewport: {
      once: true,
      margin: "-50px",
    },
    transition: {
      duration,
      delay,
      ease: "easeOut",
    },
  };
}

/**
 * Варианты для stagger анимации списков/сеток
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/**
 * Варианты для hover эффектов на карточках
 */
export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

/**
 * Варианты для fade-in анимации
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};



