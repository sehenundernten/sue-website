import Link from "next/link"
import { Button } from "../ui/button"
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import Image from "next/image"

export default function Work() {
    return (
        <div className="container mx-auto py-16 flex flex-col gap-6">
            <h2 className="text-4xl font-bold text-brand-blue">Was wir machen</h2>
            <div className="flex flex-row gap-4 justify-between">
                <Card className="w-full">
                    <CardHeader>
                        <Image className="w-full h-[250px]" src="/work_design-projects.png" alt="Sehen und Ernten Design Projekt mit der KI-Werkstatt der HTW-Berlin" width={100} height={100} />
                    </CardHeader>
                    <CardContent>
                        <h3 className="text-2xl font-bold">Design</h3>
                        <p>#CD #Konzeption #Webdesign #Programmierung</p>
                    </CardContent>
                    <CardAction>
                        <Button variant="link">
                            <Link href="/">Zum Projekt</Link>
                        </Button>
                    </CardAction>
                </Card>
                <Card className="w-full">
                    <CardHeader>
                        <Image className="w-full h-[250px]" src="/work_workshops.png" alt="Sehen und Ernten Workshops" width={100} height={100} />
                    </CardHeader>
                    <CardContent>
                        <h3 className="text-2xl font-bold">Workshops</h3>
                        <p>#Weiterbildung #Theorie #Praxis</p>
                    </CardContent>
                    <CardAction>
                        <Button variant="link">
                            <Link href="/">Mehr erfahren</Link>
                        </Button>
                    </CardAction>
                </Card>
                <Card className="w-full">
                    <CardHeader>
                        <Image className="w-full h-[250px]" src="/work_co-working.png" alt="Sehen und Ernten Co-Working" width={100} height={100} />
                    </CardHeader>
                    <CardContent>
                        <h3 className="text-2xl font-bold">Co-Working</h3>
                        <p>#Kreativnetzwerk #NewWork</p>
                    </CardContent>
                    <CardAction>
                        <Button variant="link">
                            <Link href="/">Mehr erfahren</Link>
                        </Button>
                    </CardAction>
                </Card>
            </div>
        </div>
    );
}