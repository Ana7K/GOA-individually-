import gsap from "gsap";
import useApi from "./hooks/useApi";
function App() {
  const { data, error, isLoading } = useApi();
  const handleHover = () => {
    gsap.to({ primaryImage }, { rotation: 45, x: 100, duration: 1 });
  };
  return (
    <>
      {error ? (
        <div className="flex items-center justify-center min-h-screen text-red-600">
          error: {error.message}
        </div>
      ) : isLoading ? (
        <div className="flex items-center justify-center min-h-screen text-blue-500 animate-pulse">
          loading...
        </div>
      ) : (
        <div className="flex flex-col items-center min-h-screen mx-auto pt-4">
          <span className="font-bold text-4xl text-blue-900 text-shadow-lg pb-8">
            List Of Movies
          </span>
          <div>
            {data.map((movie: any, index: number) => (
              <div
                key={index}
                className="flex items-center justify-between sm:px-4 max-sm:flex-col max-sm:space-y-4 py-4"
              >
                <div className="flex flex-col space-y-2">
                  <h2 className="text-xl font-bold text-blue-800 pb-3">
                    {movie.originalTitle}
                  </h2>
                  <p className="text-blue-400 text-md">
                    Rating: {movie.averageRating}
                  </p>
                  <p className="text-blue-400 text-md">
                    Genres:{" "}
                    {movie.genres && movie.genres.length > 0
                      ? movie.genres.join(", ")
                      : "N/A"}
                  </p>
                </div>
                <div>
                  <img
                    src={movie.primaryImage}
                    alt={movie.originalTitle}
                    className="w-full h-30 w-auto"
                    onMouseEnter={handleHover}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
