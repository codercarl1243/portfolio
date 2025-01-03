import { PortableTextLinkProps, TLinkProps } from "./link.dts";


export function isPortableTextLink(props: TLinkProps): props is PortableTextLinkProps {
  return (
    props &&
    typeof props === 'object' &&
    'value' in props &&
    props.value !== undefined && // Explicitly check for undefined
    typeof props.value === 'object' &&
    props.value !== null &&
    props.value._type === 'link' && // Check that it's a "link" type
    typeof props.value.href === 'string' &&
    props.value.href.trim().length > 0
  );
}
