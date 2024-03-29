type Props = {
  categories: Category[];
};

function CategoryHeader({ categories }: Props) {
  if (categories.length < 1) {
    return null;
  }
  return (
    <div className="hidden md:flex md:visible justify-center items-center w-full bg-myBlack h-6 cursor-pointer">
      {categories.map((category) => (
        <div
          key={category._id}
          className="text-sm font-bold uppercase text-secondary px-4"
        >
          {category.title}
        </div>
      ))}
    </div>
  );
}

export default CategoryHeader;
