import { portableTextLink, TLinkProps } from "./link.dts";


export function isPortableTextLink(props: TLinkProps): props is portableTextLink {
    return (props
        && 'value' in props
        && 'href' in props.value
        );
}
