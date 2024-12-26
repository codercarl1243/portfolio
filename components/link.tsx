'use client';

import classNames from 'classnames';
import Link from 'next/link';
import {ComponentProps, useState}  from 'react';

export type TLinkProps =  ComponentProps<typeof Link>;

export default function CustomLink({
    href,
    className,
    children
}: TLinkProps){
    const [isPressed, setIsPressed] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

    const linkClasses = classNames(
        'link',
        {
        'link-pressed': isPressed,
        'link-hover': !isPressed && isHovered,
        },
        className
    )

    return (
        <Link 
            className={linkClasses}
            href={href}
            onMouseDown={() => setIsPressed(true)}
			onMouseUp={() => setIsPressed(false)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
        >
            {children}
        </Link>
    )
}