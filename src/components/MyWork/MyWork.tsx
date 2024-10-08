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

const MyWork = () => {
    return (
        <div className="flex flex-wrap justify-between gap-4">
            <div className="flex-item">

                <Card className="w-[400px]">
                    <CardHeader>
                        <CardTitle>Toxicity</CardTitle>
                        <CardDescription>Red social con renderizado 3D.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className=' text-justify'>Se trata de un proyecto de red social desplegada y funcional que cuenta con tecnologías 3D (Three.js).</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button> <a href="https://main.d31mzlavia190v.amplifyapp.com/" target="_blank" rel="noopener noreferrer">
                            Visitar
                        </a></Button>
                    </CardFooter>
                </Card>
            </div>
            <div className="flex-item">

                <Card className="w-[400px]">
                    <CardHeader>
                        <CardTitle>Ecommerce</CardTitle>
                        <CardDescription>Pagina para tienda de ropa.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className=' text-justify'>Página diseñada para un Ecommerce con diseño minimalista.</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button> <a href="https://main.d2rddp4uan2mx0.amplifyapp.com/" target="_blank" rel="noopener noreferrer">
                            Visitar
                        </a></Button>
                    </CardFooter>
                </Card>
            </div>
            <div className="flex-item">

                <Card className="w-[400px]">
                    <CardHeader>
                        <CardTitle>PokeQuiz</CardTitle>
                        <CardDescription>Juego de pokemon con Javascript y CSS.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className=' text-justify'>Pokemasters Quiz Game es un juego de preguntas basado en Pokémon, donde los jugadores deben identificar el nombre del Pokémon en una imagen, entre varias opciones.</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button><a href="https://github.com/SebasBarrientos/PokeQuiz" target="_blank" rel="noopener noreferrer">
                            Visitar
                        </a></Button>
                    </CardFooter>
                </Card>
            </div>

        </div>
    )
}

export default MyWork