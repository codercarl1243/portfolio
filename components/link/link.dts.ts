import Link from 'next/link';

export interface NextLinkProps extends Omit<React.ComponentProps<typeof Link>, 'href'> { href?: string; };
export type portableTextLink = {value: {href: string | undefined}} & Omit<NextLinkProps , 'href'>;
export type TLinkProps = portableTextLink | NextLinkProps;
