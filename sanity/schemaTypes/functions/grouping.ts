import { DocumentDefinition, FieldGroupDefinition, ObjectDefinition } from 'sanity'
import { GoUnlink } from "react-icons/go";

// original code from https://github.com/sanity-io/sanity/issues/3142
type DocumentObjectDefinitionType = DocumentDefinition | ObjectDefinition

export const enhancedGroupsDefinition = (definitions: DocumentObjectDefinitionType[]): DocumentObjectDefinitionType[] => {

  const isolateFieldsWithoutAGroup = (def: DocumentObjectDefinitionType) => {

    // Check if your document/object has any groups defined. No groups = nothing done
    if (def.groups && Array.isArray(def.groups) && def.groups.length > 0) {

      const everyFieldsHaveGroup = !!def.fields.every((field) =>
        typeof field.group === 'string' || (Array.isArray(field.group) && field.group.length > 0)
      );

      if (!everyFieldsHaveGroup) {

        const unmappedFieldGroupDefinition: FieldGroupDefinition = {
          name: 'general',
          icon: GoUnlink,
          title: 'general',
        }
        def.groups.push(unmappedFieldGroupDefinition)
        def.fields = def.fields.map((field) => {
          if (!field.group || (Array.isArray(field.group) && field.group.length === 0))
            field.group = unmappedFieldGroupDefinition.name
          return field
        })
      }
    }
    return def
  }

  return definitions.map(isolateFieldsWithoutAGroup)
}