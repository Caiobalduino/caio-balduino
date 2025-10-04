import React, { useEffect, useState } from "react";
import { useI18n } from "../i18n";

const ICONS = {
  0: "☀️", // clear sky
  1: "🌤",
  2: "🌤",
  3: "⛅️", // mainly/partly cloudy
  45: "🌫",
  48: "🌫", // fog
  51: "🌦",
  53: "🌦",
  55: "🌦", // drizzle
  56: "🌧",
  57: "🌧", // freezing drizzle
  61: "🌧",
  63: "🌧",
  65: "🌧", // rain
  66: "🌧",
  67: "🌧", // freezing rain
  71: "❄️",
  73: "❄️",
  75: "❄️", // snow
  77: "🌨", // snow grains
  80: "🌦",
  81: "🌧",
  82: "⛈", // rain showers
  85: "🌨",
  86: "🌨", // snow showers
  95: "⛈",
  96: "⛈",
  99: "⛈", // thunderstorm
};

const DESC = {
  0: "Céu limpo",
  1: "Pred. claro",
  2: "Parcialmente nublado",
  3: "Nublado",
  45: "Nevoeiro",
  48: "Nevoeiro com depósito",
  51: "Chuvisco leve",
  53: "Chuvisco",
  55: "Chuvisco intenso",
  56: "Chuvisco gelado",
  57: "Chuvisco gelado forte",
  61: "Chuva fraca",
  63: "Chuva",
  65: "Chuva forte",
  66: "Chuva congelante",
  67: "Chuva congelante forte",
  71: "Neve fraca",
  73: "Neve",
  75: "Neve forte",
  77: "Grãos de neve",
  80: "Pancadas isoladas",
  81: "Pancadas",
  82: "Pancadas fortes",
  85: "Pancadas de neve",
  86: "Pancadas de neve fortes",
  95: "Trovoadas",
  96: "Trovoadas c/ granizo",
  99: "Trovoadas fortes c/ granizo",
};

export function Weather() {
  const { t } = useI18n();
  const weekday = new Intl.DateTimeFormat(t.locale, { weekday: "long" }).format(new Date());
  const [state, setState] = useState({
    day: new Intl.DateTimeFormat("pt-BR", { weekday: "long" }).format(
      new Date()
    ),
    temp: null,
    code: null,
    city: null,
    loading: true,
    error: null,
  });


  useEffect(() => {
    let aborted = false;

    const getByIP = async () => {
      try {
        const r = await fetch("https://ipapi.co/json/");
        const ip = await r.json(); // { latitude, longitude, city }
        if (!ip?.latitude || !ip?.longitude) throw new Error("ipapi falhou");
        await getWeather(ip.latitude, ip.longitude, ip.city);
      } catch (e) {
        if (!aborted)
          setState((s) => ({ ...s, loading: false, error: "Sem localização" }));
      }
    };

    const getWeather = async (lat, lon, city = null) => {
      try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&timezone=auto`;
        const r = await fetch(url);
        const data = await r.json();
        const temp = Math.round(data?.current?.temperature_2m ?? 0);
        const code = data?.current?.weather_code ?? 0;
        if (!aborted) {
          setState((s) => ({
            ...s,
            temp,
            code,
            city,
            loading: false,
            error: null,
          }));
        }
      } catch (e) {
        if (!aborted)
          setState((s) => ({ ...s, loading: false, error: "Erro no clima" }));
      }
    };

    if (typeof window !== "undefined" && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          getWeather(latitude, longitude);
        },
        () => getByIP(), // negou/perdeu -> fallback IP
        { enableHighAccuracy: false, timeout: 6000, maximumAge: 5 * 60 * 1000 }
      );
    } else {
      getByIP();
    }

    return () => {
      aborted = true;
    };
  }, []);

  const { day, temp, code, loading } = state;
  const icon = ICONS[code ?? 0] ?? "🌤";
  const desc = DESC[code ?? 0] ?? "Tempo";

  return (
    <div className="absolute top-3 left-1/2 -translate-x-1/2 p-4">
      <div className="container mx-auto flex justify-center md:justify-start">
        <div className="inline-flex items-center rounded-md bg-zinc-700 shadow-md">
          <span className="w-2 h-2 bg-blue-500 block rounded-full relative left-2"></span>

          <div className="flex text-blue-300 divide-x-2 divide-zinc-900">
            <div className="px-4 py-2 capitalize font-(family-name:--font-source)">
              {weekday}
            </div>

            <div className="px-4 py-2 min-w-[64px] text-center">
              {loading ? "—" : `${temp}°`}
            </div>

            <div className="px-4 py-2" title={desc} aria-label={desc}>
              {loading ? "…" : icon}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
