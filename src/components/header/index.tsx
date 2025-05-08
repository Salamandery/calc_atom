import Link from "next/link";

export default function Header() {
    return (
        <header className="flex px-2 py-4 bg-zinc-900 text-white">
            <div className="flex items-center justify-between w-full mx-auto max-w-7x1">
                <div>Header</div>
                <nav>
                    <ul className="flex items-center justify-center gap-2">
                        <li className="text-sm font-semibold text-zinc-400 hover:text-zinc-200 transition-colors duration-200">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="text-sm font-semibold text-zinc-400 hover:text-zinc-200 transition-colors duration-200">
                            <Link href="/login">Login</Link>
                        </li>
                        <li className="text-sm font-semibold text-zinc-400 hover:text-zinc-200 transition-colors duration-200">
                            <Link href="/about">Sobre</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}