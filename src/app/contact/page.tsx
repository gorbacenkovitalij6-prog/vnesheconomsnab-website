"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Car, Phone, Mail, MapPin, Clock, Menu, X } from "lucide-react";
import { MessengerButtons } from "@/components/MessengerButtons";
import { YandexMap } from "@/components/YandexMap";
import Link from "next/link";

export default function ContactPage() {
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
            <Link href="/services" className="text-slate-300 hover:text-amber-500 transition">Услуги</Link>
            <Link href="/process" className="text-slate-300 hover:text-amber-500 transition">Как это работает</Link>
            <Link href="/gallery" className="text-slate-300 hover:text-amber-500 transition">Галерея</Link>
            <Link href="/about" className="text-slate-300 hover:text-amber-500 transition">О нас</Link>
            <Link href="/faq" className="text-slate-300 hover:text-amber-500 transition">FAQ</Link>
            <Link href="/contact" className="text-amber-500 hover:text-amber-400 transition">Контакты</Link>
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
              <Link
                href="/services"
                className="text-slate-300 hover:text-amber-500 transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Услуги
              </Link>
              <Link
                href="/process"
                className="text-slate-300 hover:text-amber-500 transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Как это работает
              </Link>
              <Link
                href="/gallery"
                className="text-slate-300 hover:text-amber-500 transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Галерея
              </Link>
              <Link
                href="/about"
                className="text-slate-300 hover:text-amber-500 transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                О нас
              </Link>
              <Link
                href="/faq"
                className="text-slate-300 hover:text-amber-500 transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-amber-500 hover:text-amber-400 transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Контакты
              </Link>
              <Link href="/">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full">
                  Главная
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-4">Свяжитесь с нами</h1>
            <p className="text-xl text-slate-400">Оставьте заявку и мы свяжемся с вами в течение 30 минут</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
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
              </div>
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
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Как нас найти</h2>
              <p className="text-xl text-slate-400">г. Челябинск, Краснознаменная ул. д. 40, 53</p>
            </div>
            <div className="shadow-2xl border border-slate-800 rounded-2xl overflow-hidden">
              <YandexMap />
            </div>
            <div className="mt-8 text-center">
              <p className="text-slate-400 mb-4">
                Наш офис находится в центре Челябинска, в удобном месте с парковкой
              </p>
              <a
                href="https://yandex.ru/maps/?text=Челябинск%2C%20Краснознаменная%20ул.%2C%2040%2C%2053"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition"
              >
                <MapPin className="h-5 w-5" />
                Открыть в Яндекс.Картах
              </a>
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
