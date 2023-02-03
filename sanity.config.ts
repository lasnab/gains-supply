import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import StudioNavbar from './components/StudioNavbar';
import StudioLogo from './components/StudioLogo';
import { getDefaultDocumentNode } from './structure';
// import { studioTheme } from './styles/studioTheme';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: '/studio',
  name: 'Gains_Supply_Content_Studio',
  title: 'Gains Supply Content Studio',
  projectId,
  dataset,
  plugins: [
    deskTool({ defaultDocumentNode: getDefaultDocumentNode }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: StudioLogo,
      navbar: StudioNavbar,
    },
  },
  // theme: studioTheme,
});
