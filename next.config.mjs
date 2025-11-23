/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // Оптимизация бандла
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-accordion",
      "@radix-ui/react-alert-dialog",
      "@radix-ui/react-avatar",
      "@radix-ui/react-checkbox",
      "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-label",
      "@radix-ui/react-popover",
      "@radix-ui/react-select",
      "@radix-ui/react-separator",
      "@radix-ui/react-slider",
      "@radix-ui/react-switch",
      "@radix-ui/react-tabs",
      "@radix-ui/react-tooltip",
    ],
  },
  // Компрессия и оптимизация
  compress: true,
  // Оптимизация изображений
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
