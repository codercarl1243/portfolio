'use client';

import classNames from 'classnames';
import Link from 'next/link';
import {ComponentProps, useState}  from 'react';


export default function CustomLink(props: ComponentProps<typeof Link>){
    const [isPressed, setIsPressed] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

    const linkClasses = classNames(
        'link',
        {
        'link-pressed': isPressed,
        'link-hover': !isPressed && isHovered,
        },
        props.className
    )

    return (
        <Link 
            className={linkClasses}
            href={props.href}
            onMouseDown={() => setIsPressed(true)}
			onMouseUp={() => setIsPressed(false)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
        >
            {props.children}
        </Link>
    )
}