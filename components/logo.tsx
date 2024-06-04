import Image from "next/image"
import Link from "next/link"

import localFont from "next/font/local"
import { cn } from "@/lib/utils"
import { Boxes } from "lucide-react"

const headingFont = localFont({
    src: "../public/fonts/font.woff2",
})

export function Logo() {
    return (
        <Link href={"/"}>
            <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
                <Boxes className=" size-5" />
                <p className={cn(" text-lg text-neutral-700", headingFont.className)}>TaskTackle</p>
            </div>
        </Link>
    )
}
