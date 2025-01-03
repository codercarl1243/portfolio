import type { PortableTextMarkComponentProps } from 'next-sanity';
import type {TypedObject} from '@portabletext/types'
import Link from 'next/link';

// export type portableTextLinkProps = PortableTextMarkComponentProps & {value: {href: string | undefined}} & Omit<NextLinkProps , 'href'>;


export interface PortableTextLinkValue extends TypedObject {
  _type: 'link';
  href: string | undefined;
}
  
export interface PortableTextLinkProps extends PortableTextMarkComponentProps<PortableTextLinkValue> {}

export type NextLinkProps = React.ComponentProps<typeof Link>;


export type TLinkProps = PortableTextLinkProps | NextLinkProps;
