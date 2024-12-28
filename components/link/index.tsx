'use client'
import { Box, Text, Tooltip } from "@sanity/ui"

//  <Tooltip
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
export default function CustomLink(props) {
    console.log(props)
    return (
        <>

      <Box padding={3}>
        
            {props.children}
      </Box>
        </>
    )
}
// </Tooltip>


// 'use client';

// import classNames from 'classnames';
// import Link from 'next/link';
// import { Box, Text, Tooltip } from '@sanity/ui'
// import { useState } from 'react';
// import type { TLinkProps } from './link.dts';



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