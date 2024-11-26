import { type SchemaTypeDefinition } from 'sanity'
// enhancedGroupsDefinition groups unmapped schemas fields together
import { enhancedGroupsDefinition } from '../lib/schemaGrouping';
import { postType } from './post';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    ...enhancedGroupsDefinition(
      [
        postType
      ]
    )],
}
