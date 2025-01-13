'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig, } from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schemaTypes} from './sanity/schema'
import {structure} from './sanity/structure'
import {codeInput} from '@sanity/code-input'
import {GroupingPlugin} from './sanity/plugins/grouping'



export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema: {types: schemaTypes},
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  plugins: [
    structureTool({structure}),
    visionTool({defaultApiVersion: apiVersion}),
    codeInput(),
    GroupingPlugin(),
  ],
})
