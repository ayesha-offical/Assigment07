"use client";
import { MagnifyingGlass } from "react-loader-spinner";
import React, { useEffect, useState } from "react";

type Data = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category?: string;
  rating: {
    rate: number;
    count: number;
  };
};

const Clientpage = () => {
  const [items, setitems] = useState<Data[]>([]);
  const [load, setload] = useState(false);
  useEffect(() => {
    setload(true);

    const fetching = async () => {
      const url = await fetch("https://fakestoreapi.com/products");
      const data: Data[] = await url.json();
      setitems(data);
      setload(false);
    };
    fetching();
  }, []);
  return (
    <main className="bg-gradient-to-r from-purple-200 to-pink-200 min-h-screen flex justify-center items-center">
      {load ? (
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="magnifying-glass-loading"
          wrapperStyle={{}}
          wrapperClass="magnifying-glass-wrapper"
          glassColor="#c0efff"
          color="#e048d6"
        />
      ) : (
        
          <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-6 p-7">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white pb-3 shadow-md flex flex-col gap-3 rounded-md "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 object-cover p-3 "
                />
                <h2 className="text-lg font-semibold text-gray-700 mt-4 px-4 line-clamp-1">
                  {item.title}
                </h2>

                <p className="text-gray-600 px-4 line-clamp-2">
                  {item.description}
                </p>
                <p className="text-lime-800 font-bold px-4">
                  Price: ${item.price}
                </p>

                <p className="text-gray-600 px-4">
                  Rating: {item.rating.rate} ({item.rating.count} votes)
                </p>
              </div>
            ))}
          </div>
        
      )}
    </main>
  );
};

export default Clientpage;
