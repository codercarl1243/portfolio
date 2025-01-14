import { definePlugin, createPlugin  } from "sanity";
import { addGeneralGroupToSchemasGroups } from './AddGeneralToSchemaGroups';
import type {GroupingPluginConfig, DocumentObjectDefinitionType, InputPropsWithGroups } from "./types";
import RemoveAllFieldsFromSchemaGroups from "./RemoveAllFieldsFromSchemaGroups";

/**
 * ### Usage in sanity.config.ts (or .js)
 * 
 * ```tsx
 * import { defineConfig } from 'sanity';
 * import { GroupingPlugin } from './sanity/plugins/GroupingPlugin';
 * 
 * export default defineConfig({
 *   //...
 *   plugins: [
 *     GroupingPlugin({
 *        // a string that will be displayed to the user
 *        defaultGroupTitle: 'Name Displayed To Users',
 *        // This is a react component
 *        defaultGroupIcon: Icon,
 *        // An Array of Schemas which should be grouped.
 *        schemas:  SchemaTypeDefinition[],
 *        // Should AllFields be removed? default is false
 *        allFieldsShown: true
 *     })
 *   ]
 * })
 * ```
 * original code from https://github.com/sanity-io/sanity/issues/3142
 * @author Carl Davidson <codercarl1243@gmail.com>
 * 
 */
export const GroupingPlugin = definePlugin<GroupingPluginConfig>((config = {}) => {
  return {
    name: 'clean-grouping-plugin',
    schema: {
      types: (prevTypes) => {
        if (!config?.schemas){
          return prevTypes
        }
       return config?.schemas?.map(type => addGeneralGroupToSchemasGroups(type as DocumentObjectDefinitionType, config))
      }
    },
    form: {
      components: {
        input: (props) => {
          if (config?.allFieldsShown === true){
            return props.renderDefault(props)
          }

          RemoveAllFieldsFromSchemaGroups(props as InputPropsWithGroups);
          return props.renderDefault(props)
        }
      }
    }
  }
})

