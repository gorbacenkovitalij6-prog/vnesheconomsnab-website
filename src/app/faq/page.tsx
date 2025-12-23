"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Car, Menu, X } from "lucide-react";
import Link from "next/link";
import { MessengerButtons } from "@/components/MessengerButtons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const faqCategories = [
    {
      title: "Общие вопросы",
      questions: [
        {
          q: "Чем вы занимаетесь?",
          a: "Мы специализируемся на продаже качественных автомобилей с пробегом из Европы. Помогаем подобрать и приобрести автомобиль с учетом ваших пожеланий и бюджета, занимаемся всеми документами и доставкой."
        },
        {
          q: "Почему автомобили из Европы дешевле?",
          a: "Цены на автомобили в Европе ниже благодаря большому предложению на рынке, отсутствию наценок российских дилеров и прямым закупкам. Экономия может составлять от 20% до 30% по сравнению с ценами в России."
        },
        {
          q: "Какие марки автомобилей доступны?",
          a: "Мы работаем со всеми европейскими брендами: BMW, Mercedes-Benz, Audi, Volkswagen, Porsche, Volvo, Land Rover, Jaguar и многими другими. Можем найти практически любой автомобиль под ваш запрос."
        },
        {
          q: "В каком состоянии автомобили?",
          a: "Все автомобили проходят тщательную проверку перед покупкой. Мы работаем только с автомобилями в хорошем техническом состоянии, с полной историей обслуживания и без скрытых дефектов."
        }
      ]
    },
    {
      title: "Процесс покупки",
      questions: [
        {
          q: "Как происходит процесс покупки?",
          a: "1) Консультация и подбор автомобиля по вашим критериям. 2) Проверка выбранного авто и согласование. 3) Оформление документов и оплата. 4) Доставка автомобиля в Россию. 5) Передача вам со всеми документами."
        },
        {
          q: "Сколько времени занимает весь процесс?",
          a: "От момента выбора автомобиля до получения ключей обычно проходит от 3 до 6 недель. Точные сроки зависят от наличия автомобиля, оформления документов и логистики."
        },
        {
          q: "Можно ли выбрать конкретный автомобиль?",
          a: "Да, конечно! Вы можете указать конкретную модель, год выпуска, комплектацию, цвет и другие параметры. Мы найдем автомобиль, максимально соответствующий вашим пожеланиям."
        },
        {
          q: "Можно ли увидеть автомобиль до покупки?",
          a: "Мы предоставляем детальные фотографии и видео автомобиля, отчет о техническом состоянии и историю обслуживания. При необходимости можем организовать дополнительную проверку у независимого эксперта."
        }
      ]
    },
    {
      title: "Стоимость и оплата",
      questions: [
        {
          q: "Из чего складывается итоговая стоимость?",
          a: "Итоговая стоимость включает: цену автомобиля на европейском рынке, таможенные платежи, доставку, оформление документов и наши услуги по подбору и сопровождению сделки."
        },
        {
          q: "Какие способы оплаты вы принимаете?",
          a: "Мы работаем по безналичному расчету. Оплата производится поэтапно: предоплата после выбора автомобиля, основная сумма перед отправкой, окончательный расчет при получении."
        },
        {
          q: "Есть ли скрытые платежи?",
          a: "Нет, мы работаем полностью прозрачно. Все расходы обсуждаются и фиксируются в договоре заранее. Никаких дополнительных платежей в процессе не возникает."
        },
        {
          q: "Можно ли купить автомобиль в кредит?",
          a: "Да, мы сотрудничаем с несколькими банками и можем помочь оформить автокредит. Также возможен выкуп вашего текущего автомобиля в счет оплаты."
        }
      ]
    },
    {
      title: "Документы и гарантии",
      questions: [
        {
          q: "Какие документы я получу?",
          a: "Вы получаете полный пакет документов: договор купли-продажи, таможенную декларацию, ПТС (паспорт транспортного средства), ОТТС (одобрение типа ТС), документы о техническом состоянии и историю обслуживания."
        },
        {
          q: "Будет ли автомобиль поставлен на учет в ГИБДД?",
          a: "Мы можем помочь с постановкой на учет в ГИБДД за дополнительную плату, либо вы можете сделать это самостоятельно с документами, которые мы предоставим."
        },
        {
          q: "Предоставляете ли вы гарантию?",
          a: "Да, мы предоставляем гарантию на юридическую чистоту автомобиля и соответствие заявленным характеристикам. Все условия прописаны в договоре."
        },
        {
          q: "Что делать, если обнаружатся скрытые дефекты?",
          a: "Все автомобили проходят детальную проверку перед покупкой. Если после получения обнаружатся дефекты, не указанные в отчете, мы решим вопрос в соответствии с условиями договора."
        }
      ]
    },
    {
      title: "Доставка и получение",
      questions: [
        {
          q: "Как доставляется автомобиль?",
          a: "Автомобили доставляются автовозом или своим ходом (в зависимости от расстояния). Весь путь застрахован, вы можете отслеживать местоположение автомобиля онлайн."
        },
        {
          q: "Где я могу получить автомобиль?",
          a: "Автомобиль доставляется в наш офис в Челябинске по адресу: Краснознаменная ул. д. 40, 53. При необходимости можем организовать доставку в другой город."
        },
        {
          q: "Что нужно при получении автомобиля?",
          a: "При получении необходимы: паспорт, подтверждение оплаты, подписание акта приема-передачи. Мы проведем детальный осмотр автомобиля вместе с вами перед передачей ключей."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Car className="h-8 w-8 text-amber-500" />
            <span className="text-2xl font-bold text-white">ВНЕШЭКОНОМСНАБ</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/services" className="text-slate-300 hover:text-amber-500 transition">Услуги</Link>
            <Link href="/process" className="text-slate-300 hover:text-amber-500 transition">Как это работает</Link>
            <Link href="/gallery" className="text-slate-300 hover:text-amber-500 transition">Галерея</Link>
            <Link href="/about" className="text-slate-300 hover:text-amber-500 transition">О нас</Link>
            <Link href="/faq" className="text-amber-500">FAQ</Link>
            <Link href="/contact" className="text-slate-300 hover:text-amber-500 transition">Контакты</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/" className="hidden md:inline-flex">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">Главная</Button>
            </Link>
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-lg">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link href="/services" className="text-slate-300 hover:text-amber-500 transition py-2" onClick={() => setMobileMenuOpen(false)}>Услуги</Link>
              <Link href="/process" className="text-slate-300 hover:text-amber-500 transition py-2" onClick={() => setMobileMenuOpen(false)}>Как это работает</Link>
              <Link href="/gallery" className="text-slate-300 hover:text-amber-500 transition py-2" onClick={() => setMobileMenuOpen(false)}>Галерея</Link>
              <Link href="/about" className="text-slate-300 hover:text-amber-500 transition py-2" onClick={() => setMobileMenuOpen(false)}>О нас</Link>
              <Link href="/faq" className="text-amber-500 hover:text-amber-400 transition py-2" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
              <Link href="/contact" className="text-slate-300 hover:text-amber-500 transition py-2" onClick={() => setMobileMenuOpen(false)}>Контакты</Link>
              <Link href="/"><Button className="bg-amber-600 hover:bg-amber-700 text-white w-full">Главная</Button></Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <h1 className="text-5xl font-bold text-white mb-4">Часто задаваемые вопросы</h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Ответы на популярные вопросы о покупке автомобилей с пробегом из Европы. Не нашли ответ? Свяжитесь с нами!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-slate-900/30 border border-slate-800 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">{category.title}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, qIndex) => (
                    <AccordionItem key={qIndex} value={`item-${categoryIndex}-${qIndex}`} className="border-slate-700">
                      <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-amber-500 transition">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-300 text-base leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-600/10 to-orange-600/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Остались вопросы?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Свяжитесь с нами, и наши специалисты ответят на все ваши вопросы
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                Задать вопрос
              </Button>
            </Link>
            <Link href="tel:+74951326098">
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                Позвонить нам
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <MessengerButtons />

      <footer className="border-t border-slate-800 py-8 bg-slate-950/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm">© 2025 ВНЕШЭКОНОМСНАБ</p>
        </div>
      </footer>
    </div>
  );
}
