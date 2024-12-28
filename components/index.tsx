'use client';
import Image from '@/components/image';
import type { TImageProps } from '@/components/image/image.dts';

import CustomLink from '@/components/link';
import type { TLinkProps } from '@/components/link/link.dts';

import CodeBlock from '@/components/code';
import type { TCodeProps } from '@/components/code';
import { Heading, Text } from '@sanity/ui';

export const Heading1 = ({ children }: { children: React.ReactNode }) => <Heading as="h1" size={[3,3,4,5]} className="font-accent font-bold carl">{children}</Heading>;

export const Heading2 = ({ children }: { children: React.ReactNode }) => <Heading as="h2" size={[2,2,3,4]} className="font-accent font-bold">{children}</Heading>;

export const Heading3 = ({ children }: { children: React.ReactNode }) => <Heading as="h3" size={[2,2,2,3]} className="font-accent font-bold">{children}</Heading>;

export const Heading4 = ({ children }: { children: React.ReactNode }) => <Heading as="h4" size={[1,2,2,2]} className="font-accent font-bold">{children}</Heading>;

export const NormalText = ({ children }: { children: React.ReactNode }) => <Text className="font-main text-base">{children}</Text>;

export const Blockquote = ({ children }: { children: React.ReactNode }) => <blockquote className="border-l-4 pl-4 font-main italic">{children}</blockquote>;

export const Bold = ({ children }: { children: React.ReactNode }) => <b className="font-bold">{children}</b>;

export const Italic = ({ children }: { children: React.ReactNode }) => <i>{children}</i>;

export const Underline = ({ children }: { children: React.ReactNode }) => <span className="underline">{children}</span>;

export const Code = ({ language, code }: TCodeProps) => <CodeBlock language={language} code={code} />

export const ImageComponent = (props: TImageProps) => <Image {...props}/>

export const BulletList = ({ children }: { children: React.ReactNode }) => (
  <ul className="list-disc pl-5">{children}</ul>
);

export const NumberedList = ({ children }: { children: React.ReactNode }) => (
  <ol className="list-decimal pl-5">{children}</ol>
);

export const Link = ({ children, value }: TLinkProps) => <CustomLink value={value}>{children}</CustomLink>;
// export const Link = (props) => <CustomLink props={props}>{props.children}</CustomLink>;
