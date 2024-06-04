import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navbar() {
    return (
        <div className=" fixed top-0 w-full h-14 px-[5%] border-b shadow-sm flex items-center from-slate-400">
            <div className=" md:max-w-screen-2xl mx-auto flex items-center justify-between w-full">
                <Logo />

                <div className=" space-x-4 md:block md:w-auto flex items-center justify-center">
                    <Button size="sm" variant="outline" asChild>
                        <Link href="/sign-in">Login</Link>
                    </Button>
                    <Button size="sm" asChild>
                        <Link href="/sign-up">Get TaskTackle free</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
