import Link from 'next/link';
import type { NextLinkProps, TLinkProps } from './link.dts';
import { isPortableTextLink } from "./guards";
import classNames from 'classnames';

export default function MainLink(props: TLinkProps) {
  
  if (isPortableTextLink(props)) {
      return <CustomLink children={props.children} className={props.className} href={props.value.href || ""}/>;
  }

  return <CustomLink  children={props.children} className={props.className} href={props.href}  />;
}

function CustomLink({ href = "", children, className }: NextLinkProps) {

  const linkClasses = classNames(className, {
      link: !!href,
  });
  
  const resolvedHref = href instanceof URL ? href.toString() : href;

  // Render as plain text if href is missing
  if (!href) {
      return <span className={linkClasses}>children</span>;
  }

  return (
      <Link href={resolvedHref} className={linkClasses}>
          {children}
      </Link>
  );
}