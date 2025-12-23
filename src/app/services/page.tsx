"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Car, Shield, Clock, TrendingDown, FileText, Phone, Menu, X } from "lucide-react";
import { MessengerButtons } from "@/components/MessengerButtons";
import Link from "next/link";

export default function ServicesPage() {
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
            <Link href="/services" className="text-amber-500 hover:text-amber-400 transition">Услуги</Link>
            <Link href="/process" className="text-slate-300 hover:text-amber-500 transition">Как это работает</Link>
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
              <Link href="/services" className="text-amber-500 hover:text-amber-400 transition py-2" onClick={() => setMobileMenuOpen(false)}>Услуги</Link>
              <Link href="/process" className="text-slate-300 hover:text-amber-500 transition py-2" onClick={() => setMobileMenuOpen(false)}>Как это работает</Link>
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
            <h1 className="text-5xl font-bold text-white mb-4">Наши услуги</h1>
            <p className="text-xl text-slate-400">Продажа качественных автомобилей с пробегом со всего мира в Челябинске</p>
          </div>

          {/* Hero Image */}
          <div className="max-w-5xl mx-auto mt-12">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://precisionil.com/wp-content/uploads/2025/08/Vehicles-We-Service.webp"
                alt="Европейские автомобили премиум класса"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white text-2xl font-bold text-center">
                  Европейские, японские, корейские и американские бренды
                </p>
                <p className="text-white text-lg text-center mt-2 opacity-90">
                  BMW • Mercedes • Audi • Volkswagen • Porsche • Toyota • Lexus • Nissan • Hyundai • Kia • Ford • Chevrolet и другие
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Наши преимущества</h2>
            <p className="text-xl text-slate-400">Почему клиенты выбирают нас</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingDown className="h-12 w-12 text-amber-500" />,
                title: "Экономия 20-30%",
                description: "Покупка напрямую с европейских аукционов и у официальных дилеров по минимальным ценам"
              },
              {
                icon: <Shield className="h-12 w-12 text-amber-500" />,
                title: "Полная проверка",
                description: "Детальная диагностика, проверка истории, юридическая чистота и техническое состояние"
              },
              {
                icon: <FileText className="h-12 w-12 text-amber-500" />,
                title: "Все документы",
                description: "Оформление всех документов, растаможка, сертификация и постановка на учёт в ГИБДД"
              },
              {
                icon: <Clock className="h-12 w-12 text-amber-500" />,
                title: "Быстрая доставка",
                description: "Доставка автомобиля от 2 недель с полным страхованием и отслеживанием"
              },
              {
                icon: <Car className="h-12 w-12 text-amber-500" />,
                title: "Любые марки",
                description: "Европейские, японские, корейские и американские бренды: BMW, Mercedes, Toyota, Lexus, Hyundai, Kia, Ford и другие"
              },
              {
                icon: <CheckCircle2 className="h-12 w-12 text-amber-500" />,
                title: "Гарантия качества",
                description: "Договор с полным описанием услуг, гарантии и ответственности сторон"
              }
            ].map((service, i) => (
              <Card key={i} className="bg-slate-900/50 border-slate-800 hover:border-amber-600/50 transition">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-600/10 to-orange-600/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Готовы пригнать автомобиль мечты?</h2>
          <p className="text-xl text-slate-300 mb-8">Свяжитесь с нами и получите бесплатную консультацию</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                <Phone className="mr-2 h-5 w-5" />
                Связаться с нами
              </Button>
            </Link>
            <Link href="/gallery">
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                Посмотреть галерею
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
