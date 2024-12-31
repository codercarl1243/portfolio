'use client'
import Link from 'next/link';
import type { NextLinkProps, TLinkProps } from './link.dts';
import { Text } from "..";
import { isPortableTextLink } from "./guards";
import classNames from 'classnames';

export default function Main(props: TLinkProps) {


  if (isPortableTextLink(props)) {
    return <CustomLink {...props} href={props.value.href} />
  }

  return <CustomLink {...props} />
}


function CustomLink({ href = "", children }: NextLinkProps) {

  if (!href || !String(href).length) {
    return <Text >{children}</Text>
  }

  return (
  <Link href={href}>
    {children}
  </Link>
  )

}
// </Tooltip>


// 'use client';

// import classNames from 'classnames';
// import { useState } from 'react';



// export default function CustomLink({
//     value,
//     className,
//     children
// }: TLinkProps) {
// const [isPressed, setIsPressed] = useState(false);
// const [isHovered, setIsHovered] = useState(false);
// const linkClasses = classNames(
//     'link',
//     // {
//     //     'link-pressed': isPressed,
//     //     'link-hover': !isPressed && isHovered,
//     // },
//     className
// )

// return (
// <Tooltip
//     content={
//         <Box padding={3}>
//             <Text align="center" size={1}>
//             This is a link
//                 {/* {`${value?.href}` || 'No url found'} */}
//             </Text>
//         </Box>
//     }
//     placement="bottom"
//     fallbackPlacements={['right', 'left']}
//     portal
// >

// <Link
//         className={linkClasses}
//         href={value.href}
//         onMouseDown={() => setIsPressed(true)}
//         onMouseUp={() => setIsPressed(false)}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//     >
//         {children}
//     </Link>
// </Tooltip>
// )
// }