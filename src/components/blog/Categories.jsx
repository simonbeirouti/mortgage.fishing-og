export default function Categories({ category }) {
  return (
    <div className="mt-10">
      {category.map((category, index) => (
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
