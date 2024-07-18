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
            <div className= "flex-item">

                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Create project</CardTitle>
                        <CardDescription>Deploy your new project in one-click.</CardDescription>
                    </CardHeader>
                    <CardContent>
                    <p>HOla</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button>Visitar pagina Web</Button>
                    </CardFooter>
                </Card>
            </div>
            <div className= "flex-item">

                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Create project</CardTitle>
                        <CardDescription>Deploy your new project in one-click.</CardDescription>
                    </CardHeader>
                    <CardContent>
                    <p>HOla</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button>Visitar pagina Web</Button>
                    </CardFooter>
                </Card>
            </div>
            <div className= "flex-item">

                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Create project</CardTitle>
                        <CardDescription>Deploy your new project in one-click.</CardDescription>
                    </CardHeader>
                    <CardContent>
                    <p>HOla</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button>Visitar pagina Web</Button>
                    </CardFooter>
                </Card>
            </div>

        </div>
    )
}

export default MyWork