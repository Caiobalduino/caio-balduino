import React from "react";

export function Weather() {
  return (
    <div className="p-4">
      <div className="container mx-auto flex justify-center md:justify-start">
        <div className="inline-flex items-center rounded-md bg-zinc-700">
          <span className="w-2 h-2 bg-blue-500 block rounded-full relative left-2"></span>
          <div className="flex text-blue-300 divide-x-2 divide-zinc-900">
            <div className="px-4 py-2 capitalize" id="dia">
              segunda
            </div>
            <div className="px-4 py-2" id="temperatura">
              25°
            </div>
            <div className="px-4 py-2" id="tempo">
              🌤
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}