"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type Flake = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
};

function Snow() {
  const [flakes, setFlakes] = useState<Flake[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 45 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 6 + Math.random() * 8,
      size: 6 + Math.random() * 10,
      opacity: 0.35 + Math.random() * 0.5,
    }));
    setFlakes(generated);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {flakes.map((f) => (
        <span
          key={f.id}
          className="snowflake"
          style={{
            left: `${f.left}%`,
            animationDelay: `${f.delay}s`,
            animationDuration: `${f.duration}s`,
            width: `${f.size}px`,
            height: `${f.size}px`,
            opacity: f.opacity,
          }}
        />
      ))}
    </div>
  );
}

export default function Page() {
  const [opened, setOpened] = useState(false);
  const [lights, setLights] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Snow />

      {/* Fondo animado */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="aurora" />
        <div className="aurora delay-1" />
        <div className="aurora delay-2" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-14">
        {/* Encabezado */}
        <div className="mb-6 text-center">
          <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
            FELIZ NAVIDAD MI AMOR 🎄
          </h1>

          <p className="mt-3 text-base text-white/75">
            Un detallito navideño para que te llegue estés donde estés
          </p>

          <p className="mt-2 text-base text-white/75">
            Te extraño muchoooooo
          </p>
        </div>

        {/* Tarjeta */}
        <div
          className={[
            "relative w-full rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur",
            lights ? "ring-2 ring-emerald-400/50" : "ring-1 ring-white/10",
          ].join(" ")}
        >
          {/* Lucecitas */}
          <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 gap-2">
            {Array.from({ length: 9 }).map((_, i) => (
              <span
                key={i}
                className={[
                  "h-3 w-3 rounded-full",
                  lights ? "animate-twinkle" : "",
                  i % 3 === 0
                    ? "bg-rose-400"
                    : i % 3 === 1
                    ? "bg-emerald-400"
                    : "bg-amber-300",
                  lights ? "opacity-100" : "opacity-50",
                ].join(" ")}
                style={{ animationDelay: `${i * 0.12}s` }}
              />
            ))}
          </div>

          {/* Caja regalo */}
          <div className="mx-auto mt-6 flex w-full max-w-xl flex-col items-center">
            <div className="relative w-full">
              <div
                className={[
                  "relative mx-auto h-44 w-full max-w-md rounded-2xl border border-white/10 bg-gradient-to-b from-red-600/40 to-red-900/40 shadow-xl",
                  "transition-transform duration-500",
                ].join(" ")}
              >
                <div className="absolute left-1/2 top-0 h-full w-10 -translate-x-1/2 bg-emerald-500/60" />
                <div className="absolute left-0 top-1/2 h-10 w-full -translate-y-1/2 bg-emerald-500/60" />

                {/* Tapa */}
                <div
                  className={[
                    "absolute -top-10 left-1/2 h-16 w-[90%] -translate-x-1/2 rounded-2xl border border-white/10 bg-gradient-to-b from-red-500/40 to-red-800/40",
                    "origin-bottom transition-transform duration-700",
                    opened ? "-rotate-12 -translate-y-6" : "rotate-0 translate-y-0",
                  ].join(" ")}
                />

                {/* Moño */}
                <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-2">
                    <span className="h-6 w-10 rounded-full bg-emerald-400/80" />
                    <span className="h-6 w-10 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="mx-auto mt-1 block h-8 w-3 rounded-full bg-emerald-400/80" />
                </div>

                {/* Botón */}
                <button
                  onClick={() => setOpened((v) => !v)}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white/90 hover:bg-white/15 active:scale-[0.98]"
                >
                  {opened ? "Cerrar regalo" : "Abrir regalo"}
                </button>
              </div>

              {/* Mensaje */}
              <div
                className={[
                  "mx-auto mt-6 w-full max-w-md rounded-2xl border border-white/10 bg-black/20 p-5 text-center shadow-lg",
                  "transition-all duration-700",
                  opened ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
                ].join(" ")}
              >
                {/* Foto */}
                {opened && (
                  <div className="mx-auto mb-6 h-80 w-80 sm:h-[420px] sm:w-[420px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl ring-1 ring-white/20">
                    <Image
                      src="/miamor.jpeg"
                      alt="Nosotros"
                      width={1200}
                      height={1200}
                      className="h-full w-full object-cover"
                      priority
                    />
                  </div>
                )}

                <p className="text-lg font-semibold">🎁 Sorpresa</p>

                <p className="mt-2 text-white/80">
                  Feliz navidad mi amoor, espero que la pases muy bonito rodeada de tu
                  familia, fue nuestra primera navidad juntos bajo un arbolito mi amoor,
                  de hecho fue la primera vez que armo un árbol mi amor y estoy muy
                  feliz de haberlo armado contigo 💞, quedó muy bonito.
                </p>

                <p className="mt-2 text-white/80">
                  Sé que algún día estaremos pasando juntos muchas navidadeees 🎄.
                  Te amoo mi amorcito, espero tu regreso con ansias.
                </p>

                <p className="mt-3 text-white/70">
                  Atte. <span className="font-semibold text-white/90">Andy</span>
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setLights((v) => !v)}
                className="rounded-xl bg-emerald-500/20 px-4 py-2 text-sm font-medium text-emerald-100 hover:bg-emerald-500/25"
              >
                {lights ? "Apagar luces" : "Encender luces"}
              </button>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-white/45">
          Hecho con amoor + un poquito de magia navideña.
        </p>
      </div>
    </main>
  );
}
