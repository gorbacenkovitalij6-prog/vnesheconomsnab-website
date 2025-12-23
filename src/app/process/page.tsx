"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Car, Phone, Menu, X } from "lucide-react";
import { MessengerButtons } from "@/components/MessengerButtons";
import Link from "next/link";

export default function ProcessPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Car className="h-8 w-8 text-amber-500" />
            <span className="text-2xl font-bold text-white">ВНЕШЭКОНОМСНАБ</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/services" className="text-slate-300 hover:text-amber-500 transition">Услуги</Link>
            <Link href="/process" className="text-amber-500 hover:text-amber-400 transition">Как это работает</Link>
            <Link href="/gallery" className="text-slate-300 hover:text-amber-500 transition">Галерея</Link>
            <Link href="/about" className="text-slate-300 hover:text-amber-500 transition">О нас</Link>
            <Link href="/faq" className="text-slate-300 hover:text-amber-500 transition">FAQ</Link>
            <Link href="/contact" className="text-slate-300 hover:text-amber-500 transition">Контакты</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/" className="hidden md:inline-flex">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                Главная
              </Button>
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
              <Link href="/process" className="text-amber-500 hover:text-amber-400 transition py-2" onClick={() => setMobileMenuOpen(false)}>Как это работает</Link>
              <Link href="/gallery" className="text-slate-300 hover:text-amber-500 transition py-2" onClick={() => setMobileMenuOpen(false)}>Галерея</Link>
              <Link href="/about" className="text-slate-300 hover:text-amber-500 transition py-2" onClick={() => setMobileMenuOpen(false)}>О нас</Link>
              <Link href="/faq" className="text-slate-300 hover:text-amber-500 transition py-2" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
              <Link href="/contact" className="text-slate-300 hover:text-amber-500 transition py-2" onClick={() => setMobileMenuOpen(false)}>Контакты</Link>
              <Link href="/"><Button className="bg-amber-600 hover:bg-amber-700 text-white w-full">Главная</Button></Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-4">Как это работает</h1>
            <p className="text-xl text-slate-400">Простой и прозрачный процесс покупки автомобиля</p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Консультация и подбор",
                description: "Обсуждаем ваши пожелания, бюджет и подбираем подходящие варианты автомобилей на европейских площадках",
                details: [
                  "Бесплатная консультация по телефону или в Telegram",
                  "Определяем марку, модель, год выпуска и комплектацию",
                  "Рассчитываем полную стоимость с учетом доставки и растаможки",
                  "Подбираем 3-5 вариантов автомобилей под ваш бюджет",
                  "Предоставляем фотографии, отчеты о состоянии и историю каждого авто"
                ]
              },
              {
                step: "02",
                title: "Проверка и покупка",
                description: "Проводим детальную проверку выбранного авто, согласовываем детали и совершаем покупку",
                details: [
                  "Проверка истории автомобиля через европейские базы данных",
                  "Детальная диагностика технического состояния у официального дилера",
                  "Проверка юридической чистоты и отсутствия обременений",
                  "Согласование окончательной цены и условий сделки",
                  "Заключение договора и внесение предоплаты (обычно 30%)",
                  "Выкуп автомобиля в Европе от вашего имени"
                ]
              },
              {
                step: "03",
                title: "Оформление документов",
                description: "Собираем все необходимые документы, проводим растаможку и сертификацию автомобиля",
                details: [
                  "Подготовка пакета документов для таможенного оформления",
                  "Расчет и оплата таможенных пошлин и сборов",
                  "Прохождение таможенного контроля на границе РФ",
                  "Получение ЭПТС (электронный паспорт транспортного средства)",
                  "Сертификация автомобиля в системе ОТТС",
                  "Подготовка всех документов для постановки на учет в ГИБДД"
                ]
              },
              {
                step: "04",
                title: "Доставка и передача",
                description: "Организуем безопасную доставку в Россию и передаём автомобиль с полным пакетом документов",
                details: [
                  "Транспортировка автомобиля автовозом или своим ходом",
                  "Полное страхование на весь период транспортировки",
                  "Отслеживание местоположения автомобиля в реальном времени",
                  "Доставка в наш офис в Челябинске или по вашему адресу",
                  "Совместный осмотр автомобиля и проверка всех систем",
                  "Передача ключей и полного пакета документов",
                  "Помощь в постановке на учет в ГИБДД (по желанию)"
                ]
              }
            ].map((item, i) => (
              <div key={i} className="mb-16 last:mb-0">
                <div className="flex gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-amber-600/20 border-2 border-amber-600 flex items-center justify-center">
                      <span className="text-2xl font-bold text-amber-500">{item.step}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-300 text-lg mb-4">{item.description}</p>
                    <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
                      <h4 className="text-white font-semibold mb-3">Что включает этот этап:</h4>
                      <ul className="space-y-2">
                        {item.details.map((detail, j) => (
                          <li key={j} className="flex items-start gap-3 text-slate-400">
                            <span className="text-amber-500 mt-1">✓</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-600/10 to-orange-600/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Начните прямо сейчас!</h2>
          <p className="text-xl text-slate-300 mb-8">Оставьте заявку и мы свяжемся с вами в течение 30 минут</p>
          <Link href="/contact">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              <Phone className="mr-2 h-5 w-5" />
              Оставить заявку
            </Button>
          </Link>
        </div>
      </section>

      {/* Messenger Buttons */}
      <MessengerButtons />

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 bg-slate-950/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Car className="h-6 w-6 text-amber-500" />
              <span className="text-xl font-bold text-white">ВНЕШЭКОНОМСНАБ</span>
            </div>
            <p className="text-slate-400 text-sm">
              © 2025 ВНЕШЭКОНОМСНАБ. Продажа и пригон автомобилей из Европы, Японии, Кореи и США.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
