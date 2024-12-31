'use client';
import Image from '@/components/image';
import type { TImageProps } from '@/components/image/image.dts';

import CustomLink from '@/components/link';
import type { TLinkProps } from '@/components/link/link.dts';

import CodeBlock from '@/components/code';
import type { TCodeProps } from '@/components/code';
import React from 'react';

import CustomHeader from './layout/Header'
import CustomFooter from './layout/Footer'

export const H1 = ({ children }: React.HTMLAttributes<HTMLHeadingElement>) => <h1 className="font-accent font-bold text-4xl">{children}</h1>;

export const H2 = ({ children }: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className="font-accent font-bold text-3xl">{children}</h2>;

export const H3 = ({ children }: React.HTMLAttributes<HTMLHeadingElement>) => <h3 className="font-accent font-bold text-2xl">{children}</h3>;

export const H4 = ({ children }: React.HTMLAttributes<HTMLHeadingElement>) => <h4 className="font-accent font-bold text-base">{children}</h4>;

export const P = ({ children }: React.HTMLAttributes<HTMLParagraphElement>) => <p className="font-main text-base">{children}</p>;

export const Blockquote = ({ children }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => <blockquote className="border-l-4 pl-4 font-main italic">{children}</blockquote>;

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

export const Link = ({ children, value, href }: React.ComponentProps<typeof CustomLink>) => <CustomLink value={value} href={href}>{children}</CustomLink>;
// export const Link = (props) => <CustomLink props={props}>{props.children}</CustomLink>;


// Layout Components

export const Header = () => <CustomHeader />

export const Footer = () => <CustomFooter />