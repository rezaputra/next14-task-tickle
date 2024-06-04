import { Footer } from "./_components/footer"
import { Navbar } from "./_components/navbar"

function MarketingLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className=" h-full w-full">
            <Navbar />
            <main className=" flex flex-col items-center justify-center">{children}</main>
            <Footer />
        </div>
    )
}

export default MarketingLayout
