import Image from "next/image";
import Link from "@/components/link";


export default function Header() {

    return (
        <header>
            <nav className="flex justify-between items-stretch">
                <Image
                    // className="dark:invert"
                    src="/coderCarl_main_transparent.png"
                    alt="Coder Carl logo"
                    width={90}
                    height={38}
                    priority
                />
                <ul className="flex justify-between align-bottom">
                    <li>
                        <Link className={'block h-full'} href={'/posts'}>Posts</Link>
                    </li>
                    <li>
                        <Link href={'/'}>+_+_TOODO_+_+</Link>
                    </li>
                    <li>
                        <Link href={'/'}>+_+_TOODO_+_+</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}