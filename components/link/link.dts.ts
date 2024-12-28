import Link from 'next/link';

export type NextLinkProps = React.ComponentProps<typeof Link>;
export type TLinkProps = {value: {href: string}} & Omit<NextLinkProps , 'href'>;
