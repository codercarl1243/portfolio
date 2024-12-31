import { portableTextLink, TLinkProps } from "./link.dts";


export function isPortableTextLink(props: TLinkProps): props is portableTextLink {
    return (
        props &&
        typeof props === 'object' &&
        'value' in props &&
        typeof props.value === 'object' &&
        props.value !== null &&
        typeof props.value.href === 'string' &&
        props.value.href.trim().length > 0
      );
}
