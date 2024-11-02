import Link from "next/link";

const currentYear = new Date().getFullYear()

export function Footer () {
    return (
        <footer className="min-h-[58px] lg:h-[68px] flex flex-col md:flex-row justify-between md:items-center bg-gray-300 px-2 md:px-12 lg:px-16">
            <div>
                <p className="text-2xl text-gray-800 mb-1">Wholesalers NG</p>
                <p className="text-gray-600 text-xs">&copy; {currentYear} All Rights Reserved</p>
            </div>

            <ul className="flex items-center gap-4">
                <li className="text-xs text-gray-600">
                    <Link href="#">Site Map</Link>
                </li>
                <li className="text-xs text-gray-600">
                    <Link href="#">terms of Use</Link>
                </li>
                <li className="text-xs text-gray-600">
                    <Link href="#">Report a Bug</Link>
                </li>
            </ul>
        </footer>
    )
}