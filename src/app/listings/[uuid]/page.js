import { notFound } from "next/navigation";
import { fetchPropertyById } from "@/lib/api";
import { FiMapPin, FiCheckCircle } from "react-icons/fi"; 
import Image from "next/image";

const AmenityItem = ({ children }) => (
  <li className="flex items-center">
    <FiCheckCircle className="text-green-500 mr-2" />
    {children}
  </li>
);

export default async function ListingDetails({ params }) {
  const { uuid } = await params;
  const data = await fetchPropertyById(uuid);

  if (!data) {
    return notFound();
  }

  const propertyImages = data.images ? data.images : ["/placeholder-image.png"];

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen my-20">
      <div className="container mx-auto p-4 md:p-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Image
              src={propertyImages}
              alt={data.title}
              width={500}
              height={700}
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <main className="lg:col-span-2">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{data.title}</h1>
              <div className="flex items-center text-lg text-zinc-600 dark:text-zinc-400">
                <FiMapPin className="mr-2" />
                <span>{`${data.location}, ${data.city}, ${data.state} ${data.zipcode}`}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8 pb-4 border-b border-zinc-200 dark:border-zinc-800">
              <div className="bg-zinc-100 dark:bg-zinc-900 p-3 rounded-lg text-center">
                <span className="font-semibold">{data.bedrooms}</span> Bedrooms
              </div>
              <div className="bg-zinc-100 dark:bg-zinc-900 p-3 rounded-lg text-center">
                <span className="font-semibold">{data.bathrooms}</span> Bathrooms
              </div>
              <div className="bg-zinc-100 dark:bg-zinc-900 p-3 rounded-lg text-center">
                <span className="font-semibold">{data.area_sqft}</span> sqft
              </div>
              <div className="bg-zinc-100 dark:bg-zinc-900 p-3 rounded-lg text-center">
                {data.property_type}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">About this property</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {data.description}
              </p>
            </div>

            {data.amenities && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {data.amenities.map((amenity, index) => (
                    <AmenityItem key={index}>{amenity}</AmenityItem>
                  ))}
                </ul>
              </div>
            )}
          </main>

          <aside className="lg:col-span-1">
            <div className="sticky top-8 bg-zinc-50 dark:bg-zinc-900 p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold mb-4">
                Rs. {new Intl.NumberFormat().format(data.price)}
              </div>
              <div className="mb-6">
                <p className="text-zinc-600 dark:text-zinc-400">Listed by: <span className="font-semibold">{data.listed_by}</span></p>
                {data.is_verified ? (
                  <div className="flex items-center text-green-500 mt-2">
                    <FiCheckCircle className="mr-2" />
                    Verified Listing
                  </div>
                ): ( <div className="flex items-center text-zinc-500 mt-2">
                  <FiCheckCircle className="mr-2" />
                  Unerified Listing
                </div>)}
              </div>
              <button className="w-full bg-white text-black font-bold py-3 px-6 rounded-lg cursor-pointer transition duration-300">
                Contact Agent
              </button>
              <button className="w-full cursor-pointer mt-3 bg-transparent border border-blue-600 text-blue-600 dark:text-white dark:border-white font-bold py-3 px-6 rounded-lg transition duration-300">
                Request a Tour
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}