"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Menu, X, Target, Award, Users, Shield, TrendingUp, Heart } from "lucide-react";
import Link from "next/link";
import { MessengerButtons } from "@/components/MessengerButtons";

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <Link href="/about" className="text-amber-500">О нас</Link>
            <Link href="/faq" className="text-slate-300 hover:text-amber-500 transition">FAQ</Link>
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
              <Link href="/about" className="text-amber-500 hover:text-amber-400 transition py-2" onClick={() => setMobileMenuOpen(false)}>О нас</Link>
              <Link href="/faq" className="text-slate-300 hover:text-amber-500 transition py-2" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
              <Link href="/contact" className="text-slate-300 hover:text-amber-500 transition py-2" onClick={() => setMobileMenuOpen(false)}>Контакты</Link>
              <Link href="/"><Button className="bg-amber-600 hover:bg-amber-700 text-white w-full">Главная</Button></Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">О компании ВНЕШЭКОНОМСНАБ</h1>
          <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto">
            Надежный партнер в мире качественных автомобилей с пробегом со всего мира
          </p>
        </div>
      </section>

      {/* Main Description */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Кто мы</h2>
              <div className="space-y-4 text-lg text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-white">ООО «Внешэкономснаб»</strong> — это команда профессионалов с многолетним опытом в сфере импорта и продажи качественных автомобилей из Европы. С 2004 года мы помогаем жителям Челябинска и других регионов России приобретать автомобили мечты по честным ценам.
                </p>
                <p>
                  Мы специализируемся на подборе, проверке и доставке автомобилей с пробегом от ведущих мировых производителей. Наш офис находится в Челябинске, и мы гордимся тем, что за годы работы завоевали доверие более тысячи клиентов.
                </p>
                <p>
                  Каждый автомобиль в нашем каталоге проходит тщательную проверку технического состояния, юридическую экспертизу и полную диагностику. Мы работаем только с проверенными поставщиками и гарантируем прозрачность на всех этапах сделки.
                </p>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-slate-900/30 border-slate-800">
                <CardHeader>
                  <Target className="h-12 w-12 text-amber-500 mb-4" />
                  <CardTitle className="text-white text-2xl">Наша миссия</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300 text-base leading-relaxed">
                    Сделать процесс покупки качественных автомобилей с пробегом максимально простым, прозрачным и выгодным для каждого клиента. Мы стремимся предоставлять высокий уровень сервиса и честные условия сотрудничества.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/30 border-slate-800">
                <CardHeader>
                  <Award className="h-12 w-12 text-amber-500 mb-4" />
                  <CardTitle className="text-white text-2xl">Наше видение</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300 text-base leading-relaxed">
                    Стать лидером на рынке продажи качественных автомобилей с пробегом в Уральском регионе, создав репутацию надежной компании, где качество и честность превыше всего.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Values */}
            <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Наши ценности</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: <Shield className="h-10 w-10 text-amber-500" />,
                    title: "Честность",
                    description: "Полная прозрачность на всех этапах работы"
                  },
                  {
                    icon: <Award className="h-10 w-10 text-amber-500" />,
                    title: "Качество",
                    description: "Только проверенные автомобили в отличном состоянии"
                  },
                  {
                    icon: <Users className="h-10 w-10 text-amber-500" />,
                    title: "Клиенто-ориентированность",
                    description: "Индивидуальный подход к каждому клиенту"
                  },
                  {
                    icon: <Heart className="h-10 w-10 text-amber-500" />,
                    title: "Ответственность",
                    description: "Мы отвечаем за каждое свое слово"
                  }
                ].map((value, i) => (
                  <div key={i} className="text-center">
                    <div className="flex justify-center mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{value.title}</h3>
                    <p className="text-slate-400 text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Почему выбирают нас</h2>
              <div className="space-y-4">
                {[
                  {
                    icon: <TrendingUp className="h-6 w-6 text-amber-500" />,
                    title: "Опыт с 2004 года",
                    text: "Более 20 лет успешной работы на рынке автомобилей со всего мира"
                  },
                  {
                    icon: <Car className="h-6 w-6 text-amber-500" />,
                    title: "1000+ довольных клиентов",
                    text: "Более тысячи успешно завершенных сделок и положительных отзывов"
                  },
                  {
                    icon: <Shield className="h-6 w-6 text-amber-500" />,
                    title: "100% легальность",
                    text: "Все автомобили с полным пакетом документов и юридической чистотой"
                  },
                  {
                    icon: <Award className="h-6 w-6 text-amber-500" />,
                    title: "Экономия до 30%",
                    text: "Прямые закупки без посредников — выгодные цены для вас"
                  },
                  {
                    icon: <Users className="h-6 w-6 text-amber-500" />,
                    title: "Личный менеджер",
                    text: "Каждому клиенту назначается персональный специалист"
                  },
                  {
                    icon: <Heart className="h-6 w-6 text-amber-500" />,
                    title: "Гарантия качества",
                    text: "Договор с полным описанием условий и гарантийными обязательствами"
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start p-4 rounded-lg hover:bg-slate-800/30 transition">
                    <div className="flex-shrink-0 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-slate-400">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { value: "1000+", label: "Автомобилей пригнано" },
                { value: "20", label: "Лет на рынке" },
                { value: "100%", label: "Легальность" },
                { value: "30%", label: "Средняя экономия" }
              ].map((stat, i) => (
                <div key={i} className="bg-slate-900/30 border border-slate-800 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-amber-500 mb-2">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-600/10 to-orange-600/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Готовы начать сотрудничество?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Свяжитесь с нами и получите бесплатную консультацию по подбору автомобиля
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                Связаться с нами
              </Button>
            </Link>
            <Link href="/gallery">
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                Посмотреть автомобили
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
