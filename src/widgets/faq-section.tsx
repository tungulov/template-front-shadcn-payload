"use client";

import { SectionContainer } from "@/features/section-container";
import { SectionHeader } from "@/features/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion";

const faqs = [
  {
    question: "Как начать работу с TaskFlow?",
    answer:
      "Просто зарегистрируйтесь на сайте, создайте свой первый проект и пригласите команду. Настройка займет не более 5 минут. Мы предлагаем 14-дневный бесплатный пробный период для всех планов.",
  },
  {
    question: "Могу ли я изменить тариф в любое время?",
    answer:
      "Да, вы можете повысить или понизить свой тариф в любое время. При повышении тарифа вы сразу получите доступ к новым функциям. При понижении изменения вступят в силу со следующего платежного периода.",
  },
  {
    question: "Есть ли бесплатный период?",
    answer:
      "Да! Мы предлагаем 14-дневную бесплатную пробную версию для всех платных планов. Кредитная карта не требуется для начала пробного периода. План Free доступен всегда без ограничений по времени.",
  },
  {
    question: "Как работает поддержка?",
    answer:
      "Для пользователей Free доступна поддержка по email. Пользователи Pro получают приоритетную поддержку по email и чату. Клиенты Enterprise имеют доступ к выделенному менеджеру и поддержке 24/7.",
  },
  {
    question: "Безопасны ли мои данные?",
    answer:
      "Абсолютно! Мы используем шифрование на уровне банков (SSL/TLS), регулярно делаем резервные копии и храним данные в защищенных дата-центрах. Мы соответствуем стандартам GDPR и SOC 2.",
  },
  {
    question: "Можно ли интегрировать TaskFlow с другими сервисами?",
    answer:
      "Да! TaskFlow интегрируется с более чем 50 популярными сервисами, включая Slack, GitHub, Jira, Google Calendar и многими другими. Пользователи Enterprise также получают доступ к API для создания собственных интеграций.",
  },
  {
    question: "Доступно ли мобильное приложение?",
    answer:
      "Да, у нас есть нативные приложения для iOS и Android. Все функции доступны на мобильных устройствах, и данные синхронизируются в реальном времени между всеми платформами.",
  },
  {
    question: "Как отменить подписку?",
    answer:
      "Вы можете отменить подписку в любое время через настройки аккаунта. При отмене вы сохраните доступ ко всем функциям до конца оплаченного периода. Никаких штрафов за отмену подписки нет.",
  },
];

/**
 * FAQ Section - секция с частыми вопросами
 */
export function FaqSection() {
  return (
    <SectionContainer id="faq" background="muted">
      <SectionHeader
        subtitle="FAQ"
        title="Частые вопросы"
        description="Ответы на популярные вопросы о TaskFlow"
        withGradient
      />

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground mb-4">
          Не нашли ответ на свой вопрос?
        </p>
        <a
          href="#"
          className="text-[var(--feature-accent)] font-medium hover:underline"
        >
          Свяжитесь с нашей поддержкой →
        </a>
      </div>
    </SectionContainer>
  );
}



