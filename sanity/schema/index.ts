import { type SchemaTypeDefinition } from 'sanity'
// enhancedGroupsDefinition groups unmapped schemas fields together
import { enhancedGroupsDefinition } from './functions/grouping';
import { postType } from './post.schema';
import { richText } from './richText.schema';


const enhancedSchemas = enhancedGroupsDefinition([
    postType
  ]);

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    richText,
    ...enhancedSchemas],
}