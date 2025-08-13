import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "OpenIA Chatbot Script",
    description: "Chatbot Python con OpenAI API",
    content: "Chatbot interactivo usando OpenAI GPT-4o-mini con Python, variables de entorno para API key y control de versiones Git.",
    link: "https://github.com/SebasBarrientos/OpenAIPythonScript"
  },
  {
    title: "MovieMatch",
    description: "Proyecto para resolver una cuestion diaria, que vemos hoy?",
    content: "MovieMatch es una app interactiva que ayuda a decidir películas rápidamente, usando Next.js, TypeScript, Tailwind CSS y WebSockets para comunicación en tiempo real.",
    link: "https://github.com/SebasBarrientos/MovieMatch"
  },
  {
    title: "Explorador de Planetas",
    description: "Prueba tecnica de Next.js y Prisma ORM",
    content: "Explorador de Planetas App es una aplicación full-stack que gestiona planetas ficticios usando Next.js, React, TypeScript, Prisma y PostgreSQL.",
    link: "https://github.com/SebasBarrientos/Explorador-de-Planetas-App"
  },
  {
    title: "Toxicity",
    description: "Red social con renderizado 3D.",
    content: "Se trata de un proyecto de red social desplegada y funcional que cuenta con tecnologías 3D (Three.js).",
    link: "https://main.d31mzlavia190v.amplifyapp.com/"
  },
  {
    title: "Ecommerce",
    description: "Pagina para tienda de ropa.",
    content: "Página diseñada para un Ecommerce con diseño minimalista.",
    link: "https://main.d2rddp4uan2mx0.amplifyapp.com/"
  },
  {
    title: "PokeQuiz",
    description: "Juego de pokemon con Javascript y CSS.",
    content: "Pokemasters Quiz Game es un juego de preguntas basado en Pokémon, donde los jugadores deben identificar el nombre del Pokémon en una imagen, entre varias opciones.",
    link: "https://github.com/SebasBarrientos/PokeQuiz"
  }
];

export default function ProjectCards() {
  return (
    <div className="flex flex-wrap justify-between gap-4">
      {projects.map((project, index) => (
        <div key={index} className="flex-item">
          <Card className="w-[400px] bg-slate-900">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-justify">{project.content}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Visitar
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
}