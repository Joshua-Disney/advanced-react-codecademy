import React, { useContext } from "react";
import { MixtapeContext } from "MixtapeContext";

export const Controls = () => {
  const { genre, sortOrder } = useContext(MixtapeContext);

  return (
    <div className="controls">
      {/* TODO: add some controls! */}
      <select value={genre}>
        <option value="all">All</option>
        <option value="hip hop">Hip Hop</option>
        <option value="rap">Rap</option>
        <option value="rock">Rock</option>
        <option value="pop">Pop</option>
      </select>
    </div>
  );
};
