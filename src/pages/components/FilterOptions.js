import React, { useState } from "react";

const FilterOptions = ({ selectFilter, setIsFilterVisible }) => {
  const [selectedValue1, setSelectedValue1] = useState("relevant");
  const [selectedValue2, setSelectedValue2] = useState("anycolor");
  const [selectedValue3, setSelectedValue3] = useState("any");

  const handleSelectFilter1 = (selectedFilter1) => {
    setSelectedValue1(selectedFilter1);
    selectFilter(selectedFilter1, selectedValue2, selectedValue3);
  };

  const handleSelectFilter2 = (selectedFilter2) => {
    setSelectedValue2(selectedFilter2);
    selectFilter(selectedValue1, selectedFilter2, selectedValue3);
  };

  const handleSelectFilter3 = (selectedFilter3) => {
    setSelectedValue3(selectedFilter3);
    selectFilter(selectedValue1, selectedValue2, selectedFilter3);
  };

  const handleRadioSortChange = (event) => {
    const selectedSort = event.target.value;
    setSelectedValue1(selectedSort);
    handleSelectFilter1(selectedSort);
  };

  const handleRadioColorChange = (event) => {
    const selectedColor = event.target.value;
    setSelectedValue2(selectedColor);
    handleSelectFilter2(selectedColor);
  };

  const handleRadioOrientationChange = (event) => {
    const selectedOrientation = event.target.value;
    setSelectedValue3(selectedOrientation);
    handleSelectFilter3(selectedOrientation);
  };

  const handleClearFilter = () => {
    setSelectedValue1("relevant");
    setSelectedValue2("anycolor");
    setSelectedValue3("any");
    selectFilter("");
    setIsFilterVisible(false);
  };

  return (
    <div>
      <div className="border rounded-lg max-w-7xl mx-auto">
        <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 sm:gap-5 p-5">
          <ul className="grid">
            <h1>SORT BY</h1>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="relevant"
                checked={selectedValue1 === "relevant"}
                onChange={handleRadioSortChange}
                className="form-radio text-blue-500"
              />
              <span className="ml-2">Relevance</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="latest"
                checked={selectedValue1 === "latest"}
                onChange={handleRadioSortChange}
                className="form-radio text-blue-500"
              />
              <span className="ml-2">Newest</span>
            </label>
          </ul>
          <ul className="grid">
            <h1>COLOR</h1>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="anycolor"
                checked={selectedValue2 === "anycolor"}
                onChange={handleRadioColorChange}
                className="form-radio text-blue-500"
              />
              <span className="ml-2">Any Color</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="blackandwhite"
                checked={selectedValue2 === "blackandwhite"}
                onChange={handleRadioColorChange}
                className="form-radio text-blue-500"
              />
              <span className="ml-2">Black and White</span>
            </label>
          </ul>
          <div className="grid md:mt-10 lg:mt-0">
            <h1>ORIENTATION</h1>
            <div className="grid grid-cols-2">
              <div className="grid">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="any"
                    checked={selectedValue3 === "any"}
                    onChange={handleRadioOrientationChange}
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2">Any</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="landscape"
                    checked={selectedValue3 === "landscape"}
                    onChange={handleRadioOrientationChange}
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2">Landscape</span>
                </label>
              </div>
              <div className="grid pl-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="portrait"
                    checked={selectedValue3 === "portrait"}
                    onChange={handleRadioOrientationChange}
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2">Portrait</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="square"
                    checked={selectedValue3 === "square"}
                    onChange={handleRadioOrientationChange}
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2">Square</span>
                </label>
              </div>
            </div>
          </div>
          <div className="text-right self-end ">
            <button
              onClick={handleClearFilter}
              className="border rounded-lg py-1 px-2 w-fit "
            >
              Clear Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterOptions;
