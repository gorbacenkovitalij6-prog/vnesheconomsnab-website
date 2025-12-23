"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Car, Shield, Clock, TrendingDown, FileText, Phone, Mail, MapPin, Menu, X } from "lucide-react";
import Link from "next/link";
import { MessengerButtons } from "@/components/MessengerButtons";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ScrollAnimation";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carModel: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', carModel: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <a href="/services" className="text-slate-300 hover:text-amber-500 transition">Услуги</a>
            <a href="/process" className="text-slate-300 hover:text-amber-500 transition">Как это работает</a>
            <a href="/gallery" className="text-slate-300 hover:text-amber-500 transition">Галерея</a>
            <a href="/about" className="text-slate-300 hover:text-amber-500 transition">О нас</a>
            <a href="/faq" className="text-slate-300 hover:text-amber-500 transition">FAQ</a>
            <a href="/contact" className="text-slate-300 hover:text-amber-500 transition">Контакты</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#contact">
              <Button className="hidden md:inline-flex bg-amber-600 hover:bg-amber-700 text-white">
                <Phone className="mr-2 h-4 w-4" />
                Связаться
              </Button>
            </a>
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
              <a
                href="/services"
                className="text-slate-300 hover:text-amber-500 transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Услуги
              </a>
              <a
                href="/process"
                className="text-slate-300 hover:text-amber-500 transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Как это работает
              </a>
              <a
                href="/gallery"
                className="text-slate-300 hover:text-amber-500 transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Галерея
              </a>
              <a
                href="/about"
                className="text-slate-300 hover:text-amber-500 transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                О нас
              </a>
              <a
                href="/faq"
                className="text-slate-300 hover:text-amber-500 transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="/contact"
                className="text-slate-300 hover:text-amber-500 transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Контакты
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Связаться
                </Button>
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-orange-600/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation type="slideRight" duration={0.8}>
              <Badge className="mb-4 bg-amber-600/20 text-amber-400 border-amber-600/30">
                Автосалон в Челябинске
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Качественные автомобили <span className="text-amber-500">с пробегом</span> со всего мира
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Надежная компания по продаже качественных подержанных автомобилей в Челябинске. Подбор и продажа автомобилей из Европы, Японии, Кореи и США с учетом всех пожеланий и бюджета клиента.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="border-slate-400 bg-white text-slate-900 hover:bg-slate-100 hover:text-slate-900 font-semibold">
                  Наши услуги
                </Button>
              </div>
            </ScrollAnimation>
            <ScrollAnimation type="slideLeft" duration={0.8} delay={0.2}>
              <img
                src="https://precisionil.com/wp-content/uploads/2025/08/Vehicles-We-Service.webp"
                alt="Европейские автомобили"
                className="rounded-lg shadow-2xl"
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.15}>
            {[
              { value: "1000+", label: "Пригнанных авто" },
              { value: "20 лет", label: "На рынке" },
              { value: "100%", label: "Легальность" },
              { value: "30%", label: "Экономия" }
            ].map((stat, i) => (
              <StaggerItem
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-amber-500 mb-2">{stat.value}</div>
                <div className="text-slate-400">{stat.label}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>


      {/* Services */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <ScrollAnimation type="fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Наши преимущества</h2>
              <p className="text-xl text-slate-400">Почему клиенты выбирают нас</p>
            </div>
          </ScrollAnimation>
          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.1}>
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
              <StaggerItem
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <Card className="bg-slate-900/50 border-slate-800 hover:border-amber-600/50 transition h-full">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle className="text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-400">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <ScrollAnimation type="fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Как это работает</h2>
              <p className="text-xl text-slate-400">Простой и прозрачный процесс пригона</p>
            </div>
          </ScrollAnimation>
          <StaggerContainer className="max-w-4xl mx-auto" staggerDelay={0.15}>
            {[
              {
                step: "01",
                title: "Консультация и подбор",
                description: "Обсуждаем ваши пожелания, бюджет и подбираем подходящие варианты автомобилей на европейских площадках"
              },
              {
                step: "02",
                title: "Проверка и покупка",
                description: "Проводим детальную проверку выбранного авто, согласовываем детали и совершаем покупку"
              },
              {
                step: "03",
                title: "Оформление документов",
                description: "Собираем все необходимые документы, проводим растаможку и сертификацию автомобиля"
              },
              {
                step: "04",
                title: "Доставка и передача",
                description: "Организуем безопасную доставку в Россию и передаём автомобиль с полным пакетом документов"
              }
            ].map((item, i) => (
              <StaggerItem
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="flex gap-6 mb-12 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-amber-600/20 border-2 border-amber-600 flex items-center justify-center">
                    <span className="text-2xl font-bold text-amber-500">{item.step}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <ScrollAnimation type="fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Автомобили в наличии</h2>
              <p className="text-xl text-slate-400">Актуальные предложения автомобилей в продаже со всего мира</p>
            </div>
          </ScrollAnimation>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {[
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
            ].map((car, i) => (
              <StaggerItem
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 }
                }}
              >
                <Card className="bg-slate-900/50 border-slate-800 hover:border-amber-600/50 transition overflow-hidden group flex flex-col h-full">
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
                    <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <ScrollAnimation type="fadeIn" delay={0.3}>
            <div className="text-center mt-12">
              <a
                href="https://t.me/Privezen_auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  Посмотреть все автомобили
                </Button>
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>


      {/* Contact Form */}
      <section id="contact" className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation type="fadeIn">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Свяжитесь с нами</h2>
                <p className="text-xl text-slate-400">Оставьте заявку и мы свяжемся с вами в течение 30 минут</p>
              </div>
            </ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-12">
              <ScrollAnimation type="slideRight" delay={0.2}>
                <Card className="bg-slate-900/50 border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-white">Заявка на подбор</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Input
                          placeholder="Ваше имя *"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                        />
                      </div>
                      <div>
                        <Input
                          placeholder="Телефон *"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          type="tel"
                          className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                        />
                      </div>
                      <div>
                        <Input
                          placeholder="Желаемая марка и модель"
                          value={formData.carModel}
                          onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                          className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                        />
                      </div>
                      <div>
                        <Textarea
                          placeholder="Дополнительные пожелания"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 min-h-24"
                        />
                      </div>
                      {submitStatus === 'success' && (
                        <div className="bg-green-900/30 border border-green-700 text-green-400 px-4 py-3 rounded">
                          ✓ Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
                        </div>
                      )}
                      {submitStatus === 'error' && (
                        <div className="bg-red-900/30 border border-red-700 text-red-400 px-4 py-3 rounded">
                          ✗ Ошибка при отправке. Попробуйте позже или позвоните нам.
                        </div>
                      )}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white disabled:opacity-50"
                      >
                        {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </ScrollAnimation>
              <ScrollAnimation type="slideLeft" delay={0.2}>
                <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Телефон</h3>
                    <p className="text-slate-400">+7 (495) 132-60-98</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <p className="text-slate-400">vnesekonomsnab@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Офис</h3>
                    <p className="text-slate-400">г. Челябинск, Краснознаменная ул. д. 40, 53</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Режим работы</h3>
                    <p className="text-slate-400">Ежедневно: 9:00 - 19:00</p>
                  </div>
                </div>
              </div>
              </ScrollAnimation>
            </div>
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
