import { FieldGroupDefinition } from 'sanity'
import { FiFolder } from "react-icons/fi";
import { DocumentObjectDefinitionType, GroupingPluginConfig } from './types';
import { isNonEmptyArray } from './helpers';

// original code from https://github.com/sanity-io/sanity/issues/3142 - https://github.com/williamiommi

/**
 * Ensures that every field in a Sanity schema definition belongs to a group. 
 * If a field is not assigned to any group, it will be assigned to a default 'general' group.
 *
 * @param schemaDefinition - The schema definition object (document or object schema).
 * @returns The updated schema definition with all fields assigned to groups.
 */
export const addGeneralGroupToSchemasGroups = (schemaDefinition: DocumentObjectDefinitionType, config: GroupingPluginConfig = {}): DocumentObjectDefinitionType => {
  const DEFAULT_GROUP_NAME = 'general';
  const DEFAULT_GROUP_TITLE = config && 'defaultGroupTitle' in config ? String(config.defaultGroupTitle) : 'General';
  const DEFAULT_GROUP_ICON = config && 'defaultGroupIcon' in config ? config.defaultGroupIcon : FiFolder;

  return _addDefaultGroup(schemaDefinition);


   /**
   * Adds a default 'general' group to the schema and assigns ungrouped fields to it.
   *
   * @param def - The schema definition being processed.
   * @returns The updated schema definition.
   */
  function _addDefaultGroup(definition: DocumentObjectDefinitionType ){
    // if no fields are present, exit early
    if (!definition.fields || !isNonEmptyArray(definition.fields)) {
      console.warn(`Schema definition ${definition.name ? `for ${definition.name}` : 'NO NAME IN SCHEMA'} has no fields`);
      return definition;
    }
    // Check if your document/object has any groups defined. No groups = nothing done
    definition.groups = definition.groups || [];
    const hasGroups = isNonEmptyArray(definition.groups);

    if (hasGroups) {
      const hasUngroupedFields = !definition.fields.every((field) => typeof field.group === 'string' ||(Array.isArray(field.group) && field.group.length > 0));
      if (hasUngroupedFields) {

        const defaultGroup: FieldGroupDefinition = {
          name: DEFAULT_GROUP_NAME,
          icon: DEFAULT_GROUP_ICON,
          title: DEFAULT_GROUP_TITLE,
        }

        if (!definition.groups.some(group => group.name === DEFAULT_GROUP_NAME)){
          definition.groups.push(defaultGroup);
        }

        definition.fields = definition.fields.map((field) => {          
          if (!field.group || (Array.isArray(field.group) && field.group.length === 0)){
            field.group = DEFAULT_GROUP_NAME;
          }

          return field
        })
      }
    }
    return definition
  }
}