import { defineField, defineType } from 'sanity';

const postBodyDescription =
  'Use H2 for main section headings within each post, and sub headings within each post as H3. Good Sturcture = Good Google Discoverability. Edit for grammar and consumption, use Hemingway for help (write so it can be easily be understood by 4th grader. Use internal links to connect the dots. ';

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description:
        "H1 - Title of the post, keep this to 65 Characters or less. This is 80% of the reason why reader will continue reading, don't rush this",
      type: 'string',
    }),
    defineField({
      name: 'description',
      description: 'Enter a short snippet for the blog...',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      description: 'Width of 1280px, Height (variable) of 1080px',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'imageAltText',
      title: 'Image Alt Text',
      description:
        'Put target keywords here for SEO visibility, less than 125 characters, specific description of image',
      type: 'string',
      validation: (Rule) =>
        Rule.max(124).warning(
          `Alt text shouldn't be more than 124 characters.`
        ),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      description: postBodyDescription,
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
