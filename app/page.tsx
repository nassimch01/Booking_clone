import SearchForm from "@/components/SearchForm";
import { trending_data } from "./data/Trending";
export default function Home() {
  return (
    <main className="bg-[#003580]">
      <section className="max-w-7xl mx-auto p-3">
        <h2 className="font-bold text-4xl text-white ">Find your next stay</h2>
        <h3 className="text-white py-3 text-l">
          Search low prices on Hotels, Homes and much more...
        </h3>
      </section>
      <section className="m-4 mt-0 -mb-10 px-2 lg:px-4">
        <SearchForm />
      </section>

      <section className="mx-auto max-w-7xl p-6 bg-white rounded-t-lg">
        <div className="pt-5">
          <h3 className="text-xl font-bold">Trending Destinations</h3>
          <p className="font-light">
            Most popular choices for travellers from around the World
          </p>
        </div>
        <div className="flex space-x-4 py-5 overflow-x-scroll">
          {trending_data.map((item) => (
            <div
              key={item.id}
              className="w-80 space-y-1 shrink-0 cursor-pointer"
            >
              <img
                key={item.id}
                className="w-80 h-72 object-cover rounded-lg pb-2"
                src={item.imageSrc}
                alt=""
              ></img>
              <p className="font-bold">{item.title}</p>
              <p className="font-light text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
