import Link from 'next/link'

export default function Navbar() {
    return (
        <>
            <nav>
                <div>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/classes">Classes</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}