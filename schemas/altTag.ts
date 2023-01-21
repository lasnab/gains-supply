import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'altTag',
  title: 'AltTag',
  type: 'document',
  fields: [
    defineField({
      name: 'keyword',
      title: 'keyword',
      type: 'string',
    }),
  ],
});
