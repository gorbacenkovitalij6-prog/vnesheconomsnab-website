import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, carModel, message } = body;

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Имя и телефон обязательны для заполнения' },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error('Telegram credentials not configured');
      return NextResponse.json(
        { error: 'Сервис временно недоступен. Пожалуйста, свяжитесь с нами по телефону.' },
        { status: 500 }
      );
    }

    // Format message for Telegram
    const telegramMessage = `
🚗 *Новая заявка с сайта ВНЕШЭКОНОМСНАБ*

👤 *Имя:* ${name}
📱 *Телефон:* ${phone}
${carModel ? `🚘 *Желаемая марка:* ${carModel}` : ''}
${message ? `💬 *Сообщение:* ${message}` : ''}

⏰ *Время:* ${new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Yekaterinburg' })}
    `.trim();

    // Send message to Telegram
    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const response = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Telegram API error:', errorData);
      throw new Error('Failed to send message to Telegram');
    }

    return NextResponse.json(
      { success: true, message: 'Заявка успешно отправлена!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Произошла ошибка при отправке заявки. Попробуйте позже или свяжитесь с нами по телефону.' },
      { status: 500 }
    );
  }
}
