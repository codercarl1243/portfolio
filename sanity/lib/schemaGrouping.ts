import {DocumentDefinition, FieldGroupDefinition, ObjectDefinition} from 'sanity'
import { GoUnlink } from "react-icons/go";

// this is the definition of our custom group for unmapped fields
const unmappedFieldGroup: FieldGroupDefinition = {
  name: 'unmapped-fields',
  icon: GoUnlink,
  title: 'Unmapped Fields',
}


type DocumentObjectDefinitionType = DocumentDefinition | ObjectDefinition

export const enhancedGroupsDefinition = (definitions: DocumentObjectDefinitionType[]): DocumentObjectDefinitionType[]  => {
  
  const isolateFieldsWithoutAGroup = (def: DocumentObjectDefinitionType) => {
    // Check if your document/object has any groups defined.
    if (def.groups && Array.isArray(def.groups) && def.groups.length > 0) {
      
      // Check if every field has a group defined.
      const everyFieldsHaveGroup = !!def.fields.every(
        (field) =>
          typeof field.group === 'string' || (Array.isArray(field.group) && field.group.length > 0)
      )

      // If some fields don't have a group, we can add our custom group.
      if (!everyFieldsHaveGroup) {
        // Add our custom group at the end of the list.
        def.groups.push(unmappedFieldGroup)
        // Loop through all fields and add the unmapped group if a group is not defined.
        def.fields = def.fields.map((field) => {
          if (!field.group || (Array.isArray(field.group) && field.group.length === 0))
            field.group = unmappedFieldGroup.name
          return field
        })
      }
    }
    return def
  }

  return definitions.map(isolateFieldsWithoutAGroup)
}