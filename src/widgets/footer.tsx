"use client";

import Link from "next/link";
import { Separator } from "@/shared/ui/separator";
import { Github, Twitter, Linkedin, Youtube } from "lucide-react";

const footerLinks = {
  product: {
    title: "Продукт",
    links: [
      { name: "Возможности", href: "#features" },
      { name: "Тарифы", href: "#pricing" },
      { name: "Обновления", href: "#" },
      { name: "Roadmap", href: "#" },
    ],
  },
  company: {
    title: "Компания",
    links: [
      { name: "О нас", href: "#team" },
      { name: "Блог", href: "#" },
      { name: "Карьера", href: "#" },
      { name: "Пресс-кит", href: "#" },
    ],
  },
  resources: {
    title: "Ресурсы",
    links: [
      { name: "Документация", href: "#" },
      { name: "Помощь", href: "#faq" },
      { name: "API", href: "#" },
      { name: "Статус", href: "#" },
    ],
  },
  support: {
    title: "Поддержка",
    links: [
      { name: "Контакты", href: "#" },
      { name: "FAQ", href: "#faq" },
      { name: "Чат", href: "#" },
      { name: "Email", href: "mailto:support@taskflow.com" },
    ],
  },
};

const socialLinks = [
  { name: "GitHub", icon: Github, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];

/**
 * Footer - подвал сайта
 */
export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-gradient">TaskFlow</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Современный инструмент для управления проектами и командной работы
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-lg bg-background hover:bg-[var(--feature-accent)]/10 hover:text-[var(--feature-accent)] transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.values(footerLinks).map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold mb-4 text-sm">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TaskFlow. Все права защищены.
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">
              Политика конфиденциальности
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Условия использования
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}



