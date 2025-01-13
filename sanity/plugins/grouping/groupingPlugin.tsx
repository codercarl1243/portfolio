import { definePlugin } from "sanity";
import { addGeneralGroupToSchemasGroups } from './AddGeneralToSchemaGroups';
import type {GroupingPluginConfig, DocumentObjectDefinitionType } from "./types";

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
 *        defaultGroupIcon: Icon
 *     })
 *   ]
 * })
 * ```
 */
export const GroupingPlugin = definePlugin<GroupingPluginConfig>((config = {}) => {
  return {
    name: 'clean-grouping-plugin',
    schema: {
      types: (prevTypes) => {
        console.log('Types before GroupingPlugin:', prevTypes);
        return prevTypes.map(type => addGeneralGroupToSchemasGroups(type as DocumentObjectDefinitionType, config))
      },
    },
  }
})

