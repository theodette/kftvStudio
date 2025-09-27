// src/pages/Menu.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const videoCategories = [
    {
      title: "Films",
      links: [
        "https://youtu.be/fPgIhlhFvQE",
        "https://youtu.be/EWiUW5vTYAM",
        "https://youtu.be/Eri05LHvZws",
      ],
    },
    {
      title: "Adverts",
      links: [
        "https://youtu.be/CUOFMR4f_dk",
        "https://youtu.be/hGpqBQybNqs",
        "https://youtu.be/nW7TV16lwmw",
        "https://youtu.be/zvItH2r0aUo",
        "https://youtu.be/8s-xqTlqYYw",
        "https://youtu.be/RO2OGENpxL0",
      ],
    },
    {
      title: "Corporate Documentaries & Event Coverage",
      links: [
        "https://youtu.be/6RwKyUXS6Qs",
        "https://youtu.be/k0f2rhPkZ6U",
        "https://youtu.be/p0WUw2V8klo",
        "https://youtu.be/MVcB3UAKGyU",
        "https://youtu.be/9fTH-ZNErII",
        "https://youtu.be/_QntIindyfo",
        "https://youtu.be/F3xSN770sLQ?list=PLKqBJKoCl5cPsx42sFlXnVooUwjXpoY8R",
      ],
    },
    {
      title: "Wedding Coverage",
      links: [
        "https://youtu.be/uqBKyiuwXRU?list=PLKqBJKoCl5cPNzRG1yR7t1jz39sHz-JS8",
        "https://youtu.be/DGw9MJvShxc?list=PLKqBJKoCl5cPNzRG1yR7t1jz39sHz-JS8",
        "https://youtu.be/ihJonlz1ZPs?list=PLKqBJKoCl5cPNzRG1yR7t1jz39sHz-JS8",
        "https://youtu.be/6AFomz89a70?list=PLKqBJKoCl5cPNzRG1yR7t1jz39sHz-JS8",
        "https://youtu.be/DFuDFnviAQE?list=PLKqBJKoCl5cPNzRG1yR7t1jz39sHz-JS8",
        "https://youtu.be/YBv8sl6MTrw?list=PLKqBJKoCl5cPNzRG1yR7t1jz39sHz-JS8",
        "https://youtu.be/Xn1V-3x11HY",
      ],
    },
  ];

  return (
    <section className="container mx-auto px-6 py-12">
      {/* Go Back Button */}
      <div className="mb-8 text-center">
        <Link
          to="/"
          className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg shadow hover:bg-red-700 transition"
        >
          Go Back
        </Link>
      </div>

      <h1 className="text-4xl font-bold text-center mb-12">Our Gallery</h1>

      <div className="grid gap-16">
        {videoCategories.map((category, idx) => (
          <div key={idx}>
            <h2 className="text-2xl font-semibold text-red-600 mb-6">{category.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.links.map((link, i) => {
                const videoId = link.split("youtu.be/")[1]?.split("?")[0];
                if (!videoId) return null;

                return (
                  <div key={i} className="aspect-w-16 aspect-h-9">
                    <iframe
                      className="w-full h-full rounded-lg shadow-lg"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={`Video ${i + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
