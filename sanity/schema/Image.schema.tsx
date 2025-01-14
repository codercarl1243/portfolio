import { defineType } from 'sanity'
import { CiImageOn } from "react-icons/ci";
import { mediaAssetSource } from 'sanity-plugin-media';

export const CustomImage = defineType({
    name: 'CustomImage',
    title: 'Image',
    type: 'image',
    icon: CiImageOn,
    options: {
        sources: [mediaAssetSource], // Restrict to only the media asset source
        hotspot: true
      },
})