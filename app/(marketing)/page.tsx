import { Button } from "@/components/ui/button"
import { Medal } from "lucide-react"
import Link from "next/link"

import localFont from "next/font/local"
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"

const headingFont = localFont({
    src: "../../public/fonts/font.woff2",
})

const textFont = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})
function MarketingPage() {
    return (
        <div className="flex items-center justify-center flex-col bg-gradient-to-t from-orange-200 to-yellow-400 h-screen w-screen">
            <div className={cn("flex items-center justify-center flex-col space-x-8 space-y-6", headingFont.className)}>
                {/* <div className={"flex items-center justify-center flex-col"}> */}
                <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
                    <Medal className="h-6 w-6 mr-2" />
                    Leading the pack in task management excellence
                </div>
                <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
                    TaskTackle propels teams forward.
                </h1>
                <div className="text-3xl md:text-6xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
                    Work forward.
                </div>
            </div>
            <div
                className={cn(
                    "text-small md:text-xl text-neutral-700 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
                    textFont.className
                )}
            >
                Embark on a journey of collaboration, project management, and soaring productivity, whether amidst
                towering skyscrapers or within the comfort of home offices.
            </div>
            <Button className="mt-6" size="lg" asChild>
                <Link href={"/sign-up"}>Get TaskTackle for free</Link>
            </Button>
        </div>
    )
}

export default MarketingPage
