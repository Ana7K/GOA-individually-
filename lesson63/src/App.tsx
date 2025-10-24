import { useCallback, useRef, useState } from "react";
import HomePage from "./shared/pages/home/HomePage";
import SearchHistoryPage from "./shared/pages/history/SearchHistoryPage";
import useSearch from "./shared/components/Search";
import Modal from "./shared/components/ui/dialog";

export default function App() {
  // State for routing
  const path = window.location.pathname;
  let component;

  // State for search and infinite scroll
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  // Handlers (ყოვ ელ ასოზე ირანება და ააფდეითებს usesearch-ს)
  function handleSearch(e: any) {
    setQuery(e.target.value);
    setPageNumber(1); // Reset page number on new search
  }

  const { loading, error, images, hasMore } = useSearch(query, pageNumber);

  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle intersection observer for infinite scroll
  const observer = useRef();
  const lastImageElementRef = useCallback(
    (node: any) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect(); // disconnect observer from previous last image
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1); // load next page
        }
      });
      if (node) observer.current.observe(node);
      // console.log(node); // last image in console
    },
    [loading, hasMore]
  );

  // Routing logic
  switch (path) {
    case "/":
    case "/home":
      component = <HomePage />;
      break;
    case "/history":
      component = <SearchHistoryPage />;
      break;
  }
  return (
    <>
      <nav className="bg-red-300 p-4 flex justify-between items-center">
        <span className="font-bold">Photo Gallery</span>
        <ul className="flex gap-4">
          <li>
            <a href="/home">Home Page</a>
          </li>
          <li>
            <a href="/history">Search History</a>
          </li>
        </ul>
      </nav>
      <div className="mt-4">{component}</div>

      <div>
        <input
          type="text"
          placeholder="search here"
          className="m-2 border-2 border-blue-700 px-2 py-1 rounded"
          value={query}
          onChange={handleSearch}
        ></input>

        {images.map((image, index) => {
          if (images.length === index + 1) { // very last image
            return (
              <div>
                <img
                  ref={lastImageElementRef}
                  className="w-full"
                  key={image}
                  src={image}
                  alt="surati"
                />
              </div>
            );
          } else {
            return (
              <div>
                <img
                  className="w-full border-4 border-none rounded-2xl"
                  key={image}
                  src={image}
                  alt="aqac surati"
                />
              </div>
            );
          }
        })}

        <div>{loading && "Loading..."}</div>
        <div>{error && "Error..."}</div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-4">
          <div>
            <p>download</p>
            <p>views</p>
            <p>likes</p>
          </div>
        </div>
      </Modal>
    </>
  );
}
