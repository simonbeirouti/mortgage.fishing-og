export default function Categories({ categories }) {
  return (
    <div className="mt-10">
      {categories.map((category, index) => (
        <a
          key={index}
          href={category.href}
          className="relative rounded-full bg-gray-500 px-3 py-1.5 mr-2 font-medium text-white hover:bg-timber hover:text-gray-500"
        >
          {category.name}
        </a>
      ))}
    </div>
  );
}
