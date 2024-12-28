import Image from "next/image";
import {Link} from "@/components";


export default function Header() {

    return (
        <header className="w-full">
            <nav className="flex justify-between items-stretch">
                {/* <Link href="/"> */}
                    <Image
                        // className="dark:invert"
                        src="/coderCarl_main_transparent.png"
                        alt="Coder Carl logo"
                        width={90}
                        height={38}
                        priority
                    />
                {/* </Link> */}
                <div className="grow"/>
                <ul className="flex justify-between items-center gap-4">
                    {/* <li>
                        <Link className={'block h-full border'} href={'/posts'}>Posts</Link>
                    </li>
                    <li>
                        <Link  className={'block h-full border'}  href={'/'}>+_+_TOODO_+_+</Link>
                    </li>
                    <li>
                        <Link  className={'block h-full border'}  href={'/'}>+_+_TOODO_+_+</Link>
                    </li> */}
                </ul>
            </nav>
        </header>
    )
}