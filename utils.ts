export const getImageAltTags = (post: Post) => {
  return post.imageAltText;
};

export const getFormattedDate = (createdAt: string) => {
  return new Date(createdAt)
    .toLocaleDateString('en-us', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
    })
    .replace(/\//g, '.');
};

export const getCategoryCopy = (categories: Category[]) => {
  if (categories.length > 1) {
    return `${categories[0].title} and more...`;
  }
  return categories[0].title;
};
