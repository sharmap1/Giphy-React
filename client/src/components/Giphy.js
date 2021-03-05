import React from "react";

export const Giphy = ({ giphy }) => {
  return (
    <>
      {giphy.map((gf) => (
        <div key={gf.id}>
          <img src={gf.images.fixed_height.url} alt="giphy" />
        </div>
      ))}
    </>
  );
};
