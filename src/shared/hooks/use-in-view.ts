import { useEffect, useRef, useState, RefObject } from "react";

export interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export interface UseInViewReturn<T extends HTMLElement> {
  ref: RefObject<T>;
  isInView: boolean;
}

/**
 * Hook для определения когда элемент появляется в viewport
 * @param options - настройки Intersection Observer
 * @returns ref для элемента и статус видимости
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {}
): UseInViewReturn<T> {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsInView(inView);

        // Если triggerOnce, отключаем observer после первого срабатывания
        if (inView && triggerOnce) {
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isInView };
}
