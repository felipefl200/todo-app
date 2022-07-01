import Link from "next/link"

function Navbar() {
    return (

        <nav className="flex flex-col items-center justify-center p-4 bg-gray-600">
            <Link href="/">
                <h1 className="text-white text-2xl font-bold hover:text-gray-300 cursor-pointer">TodoApp - SSR</h1>
            </Link>
            <Link href="swr">
                <h1 className="text-white text-2xl font-bold hover:text-gray-300 cursor-pointer">TodoApp - SWR</h1>
            </Link>
            <Link href="spa">
                <h1 className="text-white text-2xl font-bold hover:text-gray-300 cursor-pointer">TodoApp - SPA</h1>
            </Link>
        </nav>

    )
}

export default Navbar