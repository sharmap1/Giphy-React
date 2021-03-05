import React from "react";

const Header = ({ search, updateSearch, onSearchClick }) => {
  return (
    <>
      <div className="jumbotron">
        <h1>Search Giphy</h1>
        <input
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Search Your giphy..."
        />
        <button onClick={onSearchClick} type="submit">
          search
        </button>
      </div>
    </>
  );
};

export default Header;
