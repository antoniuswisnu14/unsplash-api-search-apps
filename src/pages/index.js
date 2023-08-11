import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import FilterOptions from "./components/FilterOptions";
import Loader from "./components/Loader";
const Home = () => {
  const [images, setImages] = useState([]);
  const [filter, setFilter] = useState({
    sort: "relevant",
    color: "any",
    orientation: "any",
  });
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const ApiRoot = "https://api.unsplash.com";
  const CollectionId = "2423569";
  const clientId = process.env.NEXT_PUBLIC_ACCESS_KEY;
  const imagesPerPage = 100;

  const handleSelectFilter = (
    selectedFilter,
    selectedFilter2,
    selectedFilter3
  ) => {
    setFilter({
      ...filter,
      sort: selectedFilter,
      color: selectedFilter2,
      orientation: selectedFilter3,
    });
  };

  const fetchImages = async (page = 1) => {
    try {
      setLoading(true);
      let apiUrl = "";

      if (query) {
        apiUrl = `${ApiRoot}/search/photos/?client_id=${clientId}&query=${query}&per_page=${imagesPerPage}`;
      } else {
        apiUrl = `${ApiRoot}/collections/${CollectionId}/photos/?client_id=${clientId}&per_page=${imagesPerPage}`;
      }
      if (filter.sort === "latest") {
        apiUrl += "&order_by=latest";
      }

      if (filter.color === "blackandwhite") {
        apiUrl += "&color=black_and_white";
      }

      if (filter.orientation === "landscape") {
        apiUrl += "&orientation=landscape";
      } else if (filter.orientation === "portrait") {
        apiUrl += "&orientation=portrait";
      } else if (filter.orientation === "square") {
        apiUrl += "&orientation=squarish";
      }
      console.log(apiUrl);
      const response = await axios.get(apiUrl);
      console.log(response);

      if (query) {
        setImages(response.data.results);
      } else {
        setImages(response.data);
      }
      setPage(page);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching images:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [filter, query]);

  return (
    <div>
      <SearchBar onSearch={setQuery} setIsFilterVisible={setIsFilterVisible} />
      {isFilterVisible && (
        <FilterOptions
          selectFilter={handleSelectFilter}
          setIsFilterVisible={setIsFilterVisible}
        />
      )}
      {loading ? (
        <Loader />
      ) : (
        <>
          {images.length === 0 ? (
            <p className="text-center">No results found</p>
          ) : (
            <ImageList images={images} />
          )}
        </>
      )}
    </div>
  );
};

export default Home;
