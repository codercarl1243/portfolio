import { type SchemaTypeDefinition } from 'sanity'
import { postType } from './post.schema';
import { richText } from './richText';
import {CustomImage} from './Image.schema';

export const schemaTypes: SchemaTypeDefinition[] = [
    CustomImage,
    richText,
    postType
  ]