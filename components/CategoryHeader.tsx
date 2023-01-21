type Props = {
  categories: Category[];
};

function CategoryHeader({ categories }: Props) {
  if (categories.length < 1) {
    return null;
  }
  return (
    <div className="hidden md:flex md:visible justify-center items-center w-full bg-primary h-6 cursor-pointer">
      {categories.map((category) => (
        <p
          key={category._id}
          className="text-sm font-bold uppercase text-secondary px-4"
        >
          {category.title}
        </p>
      ))}
    </div>
  );
}

export default CategoryHeader;
