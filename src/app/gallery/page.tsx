"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Car, Phone, Menu, X, Send } from "lucide-react";
import { MessengerButtons } from "@/components/MessengerButtons";
import Link from "next/link";

export default function GalleryPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Примеры автомобилей для демонстрации
  const exampleCars = [
    {
      image: "https://i.ibb.co/3mnjWZ9t/photo-2025-12-07-15-38-27.jpg",
      brand: "Mitsubishi",
      model: "Outlander PHEV 2.4 4WD",
      year: 2020,
      mileage: "76 600 км",
      price: "1 190 000 ₽",
      savings: "Экономия 400 000 ₽"
    },
    {
      image: "https://i.ibb.co/TMn1HhwQ/photo-2025-12-04-08-59-50.jpg",
      brand: "Hyundai",
      model: "Santa Fe",
      year: 2022,
      mileage: "36 139 км",
      price: "1 680 000 ₽",
      savings: "Экономия 650 000 ₽"
    },
    {
      image: "https://i.ibb.co/XrZhYTgp/photo-2025-12-02-08-35-28.jpg",
      brand: "BMW",
      model: "X5",
      year: 2014,
      mileage: "94 777 км",
      price: "1 529 000 ₽",
      savings: "Экономия 900 000 ₽"
    }
  ];

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
            <Link href="/process" className="text-slate-300 hover:text-amber-500 transition">Как это работает</Link>
            <Link href="/gallery" className="text-amber-500 hover:text-amber-400 transition">Галерея</Link>
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
              <Link href="/process" className="text-slate-300 hover:text-amber-500 transition py-2" onClick={() => setMobileMenuOpen(false)}>Как это работает</Link>
              <Link href="/gallery" className="text-amber-500 hover:text-amber-400 transition py-2" onClick={() => setMobileMenuOpen(false)}>Галерея</Link>
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
            <h1 className="text-5xl font-bold text-white mb-4">Каталог автомобилей</h1>
            <p className="text-xl text-slate-400 mb-8">Актуальные предложения автомобилей из Европы, Японии, Кореи и США</p>

            {/* Main CTA to Telegram */}
            <div className="bg-gradient-to-r from-blue-600/20 to-blue-500/20 border-2 border-blue-500/50 rounded-2xl p-8 max-w-3xl mx-auto mb-12">
              <Send className="h-16 w-16 text-blue-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">Все автомобили в нашем Telegram</h2>
              <p className="text-lg text-slate-300 mb-6">
                Мы ежедневно обновляем каталог доступных автомобилей в нашем Telegram-канале. Там вы найдете актуальные предложения с реальными фотографиями, ценами и характеристиками.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a
                  href="https://t.me/Privezen_auto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-6">
                    <Send className="mr-2 h-6 w-6" />
                    Открыть каталог в Telegram
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Примеры наших автомобилей</h2>
            <p className="text-lg text-slate-400">Вот несколько примеров того, что мы можем предложить</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {exampleCars.map((car, i) => (
              <Card key={i} className="bg-slate-900/50 border-slate-800 hover:border-amber-600/50 transition overflow-hidden group flex flex-col h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-amber-600 text-white border-none">
                      {car.savings}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white border-none">
                      Пример
                    </Badge>
                  </div>
                </div>
                <CardHeader className="flex-grow">
                  <CardTitle className="text-white text-xl">
                    {car.brand} {car.model}
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    {car.year} год • {car.mileage}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-amber-500">{car.price}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Why Telegram */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-900/30 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white text-2xl text-center">Почему каталог в Telegram?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="text-blue-400 text-xl">✓</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Актуальность 24/7</h3>
                      <p className="text-slate-400 text-sm">Каталог обновляется ежедневно с новыми предложениями</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="text-blue-400 text-xl">✓</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Быстрая связь</h3>
                      <p className="text-slate-400 text-sm">Задайте вопрос и получите ответ в течение нескольких минут</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="text-blue-400 text-xl">✓</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Полная информация</h3>
                      <p className="text-slate-400 text-sm">Фото, видео, характеристики и история каждого авто</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="text-blue-400 text-xl">✓</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Уведомления</h3>
                      <p className="text-slate-400 text-sm">Узнавайте первыми о новых поступлениях и спецпредложениях</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-600/10 to-orange-600/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Не нашли нужный автомобиль?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Напишите нам, и мы подберём именно то, что вам нужно
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://t.me/vnesheconomsnab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
                <Send className="mr-2 h-5 w-5" />
                Telegram
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                <Phone className="mr-2 h-5 w-5" />
                Оставить заявку
              </Button>
            </Link>
          </div>
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
