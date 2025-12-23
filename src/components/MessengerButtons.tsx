"use client";

import { Send } from "lucide-react";

export function MessengerButtons() {
  const telegramUsername = "Privezen_auto"; // ВНЕШЭКОНОМСНАБ

  return (
    <div className="fixed bottom-24 right-6 flex flex-col gap-3 z-50">
      {/* Telegram Button */}
      <a
        href={`https://t.me/${telegramUsername}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        title="Написать в Telegram"
      >
        <Send className="h-6 w-6" />
        <span className="hidden group-hover:inline-block font-medium">Telegram</span>
      </a>
    </div>
  );
}
