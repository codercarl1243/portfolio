import Image from '@/components/image';
import type { TImageProps } from '@/components/image/image.dts';
import CustomLink from '@/components/link';
import CodeBlock from '@/components/code';
import type { TCodeProps } from '@/components/code';

export const Heading1 = ({ children }: { children: React.ReactNode }) => <h1 className="font-accent font-bold text-4xl">{children}</h1>;

export const Heading2 = ({ children }: { children: React.ReactNode }) => <h2 className="font-accent font-bold text-3xl">{children}</h2>;

export const Heading3 = ({ children }: { children: React.ReactNode }) => <h3 className="font-accent font-bold text-2xl">{children}</h3>;

export const Heading4 = ({ children }: { children: React.ReactNode }) => <h3 className="font-accent font-bold text-xl">{children}</h3>;

export const NormalText = ({ children }: { children: React.ReactNode }) => <p className="font-main text-base">{children}</p>;

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

export const Link = ({ children, href }: { children: React.ReactNode; href: string }) => <CustomLink href={href}>{children}</CustomLink>;
