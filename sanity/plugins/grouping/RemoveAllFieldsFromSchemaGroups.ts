import { isNonEmptyArray } from "./helpers";
import { InputPropsWithGroups } from "./types";


export default function RemoveAllFieldsFromSchemaGroups(props: InputPropsWithGroups): InputPropsWithGroups {
    //  check if props.groups exists and ensure it isnt empty
    if (!props.groups || !isNonEmptyArray(props.groups)) {
        return props;
    }

    // Check if the first group is 'all-fields' and remove it
    if (props.groups[0].name === 'all-fields') {
        props.groups.shift()
      }
    // ensure that the first group is selected when the DOM loads
    props.groups[0].selected = true;

    return props;
}