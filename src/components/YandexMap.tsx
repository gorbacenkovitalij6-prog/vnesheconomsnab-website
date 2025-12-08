"use client";

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ymaps: any;
  }
}

export function YandexMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Load Yandex Maps API script
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=&lang=ru_RU';
    script.async = true;

    script.onload = () => {
      if (window.ymaps && mapRef.current) {
        window.ymaps.ready(() => {
          // Coordinates for Челябинск, Краснознаменная ул., 40
          const coordinates = [55.159897, 61.402554];

          // Create map
          mapInstanceRef.current = new window.ymaps.Map(mapRef.current, {
            center: coordinates,
            zoom: 16,
            controls: ['zoomControl', 'fullscreenControl', 'geolocationControl']
          });

          // Add placemark (marker)
          const placemark = new window.ymaps.Placemark(
            coordinates,
            {
              balloonContentHeader: 'ВНЕШЭКОНОМСНАБ',
              balloonContentBody: 'Краснознаменная ул., д. 40, стр. 53<br/>Челябинск, Россия',
              balloonContentFooter: 'Ежедневно: 9:00 - 19:00',
              hintContent: 'ВНЕШЭКОНОМСНАБ - Автосалон'
            },
            {
              preset: 'islands#redAutoIcon',
              iconColor: '#d97706'
            }
          );

          mapInstanceRef.current.geoObjects.add(placemark);
        });
      }
    };

    document.head.appendChild(script);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
        mapInstanceRef.current = null;
      }
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-full h-[600px] rounded-2xl overflow-hidden"
      style={{ minHeight: '600px' }}
    />
  );
}
