import React from 'react'

const Biography = () => {
  return (
    <div>
      <h2 className='text-2xl mb-4'>¡Hola! Mi nombre es Sebastian Barrientos y soy programador Full Stack. </h2><br />
      <div className=' text-justify flex flex-col items-center gap-4 border border-2 rounded-md py-1 px-2 '>
        <p className="px-2">Hace ya más de 2 años que empecé mi camino como desarrollador. Tengo conocimientos en Python, JavaScript, SQL y Mongoose, entre otras tecnologías y lenguajes.</p>
        <p className="px-2">Era abogado, me recibí en 2020 pero tras un tiempo trabajando de ello, vi que no era mi vocación. Tras mucho autodescubrimiento opté por la programación y me encanta.
        </p>
        <p className="px-2">Hice una diplomatura en Python (entre otras cosas) y recientemente finalice un bootcamp de Full Stack Development, presencial e intensivo en EDEM, Valencia, España. Consistió en más de 480 horas de teoría y práctica con proyectos reales y culminó con un trabajo para una empresa donde tuve la experiencia de trabajar con desarrolladores UX-UI y de datos para llevar adelante un prototipo de aplicación acorde a las necesidades del cliente.</p>
      </div>
    </div>
  )
}

export default Biography