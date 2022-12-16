import React from "react";

const Category = (props) => {
  return (
    <>
      <div className="mb-16">
        <div className="sm:flex md:px-16 mt-6 w-full flex-col justify-center">
          <div className="max-w-[1600px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
              <h1 className="font-normal text-[24px]">Movies</h1>
          </div>
        </div>
        <div className="md:px-20 max-w-[1600px] mx-auto p-4 relative flex items-center -mt-8">
          <div
            id="slider"
            className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            {props.movie.map((movies, index) => (
              <img
                className="h-[300px] w-[300px] gap-10 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-500"
                alt="poster"
                src={movies.Poster}
                title={movies.Title}
                key={movies.key}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="-mt-16">
        <div className="sm:flex md:px-16 mt-6 w-full flex-col justify-center">
          <div className="max-w-[1600px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
              <h1 className="font-normal text-[24px]">Series</h1>
          </div>
        </div>
        <div className="md:px-20 max-w-[1600px] mx-auto p-4 relative flex items-center -mt-8">
          <div
            id="slider"
            className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            {props.series.map((series, index) => (
              <img
                className="h-[300px] w-[300px] gap-10 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-500"
                alt="poster"
                src={series.Poster}
                title={series.Title}
                key={series.key}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
