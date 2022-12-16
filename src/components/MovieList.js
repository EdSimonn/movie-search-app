import React from "react";

const MovieList = (props) => {
  return (
    <div className="mb-16">
      <div className="sm:flex md:px-16 mt-6 w-full flex-col justify-center">
        <div className="max-w-[1600px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
          <h1 className="font-normal text-[24px]">Search Result</h1>
        </div>
      </div>
      <div className="md:px-20 max-w-[1600px] mx-auto p-4 relative flex items-center -mt-8">
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide group"
        >
          {props.movies.map((movie, index) => (
            <>
              <img
                className="h-[300px] w-[300px] gap-10 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-500"
                alt="poster"
                src={movie.Poster}
                title={movie.Title}
                key={movie.key}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
