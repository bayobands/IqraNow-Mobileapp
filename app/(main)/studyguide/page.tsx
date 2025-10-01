import Image from "next/image";
import Link from "next/link";

const Studyguide = async () => {
  const items = [
    {
      id: 99,
      name: "99 names of Allah",
      imageSrc:
        "https://res.cloudinary.com/dkahuuvrf/image/upload/v1753765129/99_ozthxc.png",
      link: "/study/99",
    },
    // Add more items here
  ];

  return (
    <div className="bg-transparent min-h-screen px-6 py-10">
      <h1 className="text-2xl font-bold mb-8 text-center sm:text-left">
        StudyGuide:
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {items.map((item) => (
          <Link key={item.id} href={item.link} className="no-underline">
            <div className="bg-white border border-neutral-800 rounded-xl shadow-md p-5 w-64 text-center hover:shadow-lg hover:scale-105 hover:bg-gray-100 transition-transform duration-300 cursor-pointer">
              <Image
                src={item.imageSrc}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-lg object-cover mx-auto"
              />
              <p className="text-neutral-800 font-semibold mt-4 text-lg">
                {item.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Studyguide;
