import Link from 'next/link';

export type NextLinkProps = React.ComponentProps<typeof Link>;
export type portableTextLink = {value: {href: string | undefined}} & Omit<NextLinkProps , 'href'>;
export type TLinkProps = portableTextLink | NextLinkProps;
