import React from "react";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      name: "Row House Messenger",
      url: "https://github.com/AADEESH27/ROW-HOUSE-MESSENGER",
    },
    {
      id: 2,
      name: "Anime Flix",
      url: "https://github.com/AADEESH27/animeflix",
    },
    {
      id: 3,
      name: "Appoint Me Up",
      url: "https://github.com/AADEESH27/clinic-management-system",
    },
    {
      id: 4,
      name: "Sort-Me",
      url: "https://github.com/AADEESH27/SORT-ME",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-10">
          {portfolios.map((item, id) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <h2 style={{ fontWeight: "bolder" }}>{item.name}</h2>
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => {
                    window.open(item.url);
                  }}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
