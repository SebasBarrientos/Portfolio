import React from "react";

const Biography = () => {
    return (
        <div className="p-2">
            <h2 className="text-4xl mb-4 text-center font-bold">Sebastian Barrientos</h2>
            <h2 className="text-2xl mb-4 text-center underline underline-offset-4 ">Programador Full Stack.</h2>
            <div className="text-justify flex flex-col items-center gap-4 py-1">
                <p className="px-3">
                    Soy Desarrollador Full Stack con experiencia en entornos SaaS y Startup. Manejo tecnologías como Python, TypeScript,
                    SQL, JavaScript, React, Next.js, TailwindCSS, Prisma ORM, MERN y despliegues en Google Cloud Platform y AWS, entre
                    otras.
                </p>
                <p className="px-3">
                    Recientemente, formé parte del equipo de Coolx (Climate Tech SaaS), participando en el desarrollo de una plataforma de
                    análisis satelital basada en imágenes e IA, diseñando pantallas dinámicas, creando APIs, automatizando procesos en la
                    nube y mejorando la ciberseguridad.
                </p>
                <p className="px-3">
                    En 2020 me gradué en Abogacía, pero tras un tiempo en el sector descubrí que mi verdadera pasión estaba en la
                    programación. Desde entonces me he formado y trabajado en proyectos que combinan análisis de datos, IA y desarrollo web.
                </p>
                <p className="px-3">
                    Completé una diplomatura en Python y un bootcamp intensivo de Full Stack Development en EDEM (480 horas), donde trabajé
                    en proyectos reales junto a diseñadores UX/UI y analistas de datos.
                </p>
            </div>
        </div>
    );
};

export default Biography;
