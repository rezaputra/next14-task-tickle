import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Footer() {
    return (
        <div className=" fixed bottom-0 w-full px-[5%]  border-t flex bg-sky-100">
            <div className=" md:max-w-screen-2xl mx-auto flex items-center justify-between w-full">
                <Logo />
                <div className=" space-x-4 md:block md:w-auto flex items-center justify-center">
                    <Button size="sm" variant="ghost">
                        Privacy Policy
                    </Button>
                    <Button size="sm" variant="ghost">
                        Terms of service
                    </Button>
                </div>
            </div>
        </div>
    )
}
