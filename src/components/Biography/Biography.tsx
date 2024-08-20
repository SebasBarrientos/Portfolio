import React from 'react'

const Biography = () => {
  return (
    <div className='p-5'>
      <h2 className='text-4xl mb-1 text-center font-bold'>Sebastian Barrientos</h2>
      <h2 className='text-2xl mb-4 text-center underline underline-offset-4 '>Programador Full Stack.</h2>
      <div className=' text-justify flex flex-col items-center gap-4 border border-2 rounded-md py-1 '>
        <p className="px-3">Hace ya más de 2 años que empecé mi camino como Desarrollador. Tengo conocimientos en Python, JavaScript, SQL y Mongoose, entre otras tecnologías y lenguajes.</p>
        <p className="px-3">En 2020 me gradué en Abogacía, pero tras un tiempo trabajando en el sector, vi que no era mi vocación. Tras mucho autodescubrimiento opté por la Programación y me encanta.
        </p>
        <p className="px-3">Hice una diplomatura en Python (entre otras cosas) y recientemente finalice un bootcamp de Full Stack Development, presencial e intensivo en EDEM, Valencia, España. Consistió en más de 480 horas de teoría y práctica con proyectos reales y culminó con un trabajo para una empresa donde tuve la experiencia de trabajar con Diseñadores UX/UI y Analistas de Datos para llevar adelante el MVP de una aplicación acorde a las necesidades del cliente.</p>
      </div>
    </div>
  )
}

export default Biography