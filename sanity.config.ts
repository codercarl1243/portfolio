'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig, InputProps} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'
import {structure} from './sanity/structure'

interface Group {
  disabled: boolean;
  i18n?: any;
  icon?: any;
  name: string;
  selected: boolean;
  title: string;
}
type customInputProps = InputProps & {
  groups?: Group[];
};

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
  form: {
    components: {
      input: (props: InputProps )  => {
        const customProps = props as customInputProps;

        if (Array.isArray(customProps.groups) && customProps.groups.length > 0) {
          if (customProps.groups[0].name === 'all-fields') {
            customProps.groups.shift()
          }
        }
        return customProps.renderDefault(props)
      },
    },
  },
})
