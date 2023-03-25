import React, { useContext } from "react";
import { Song } from "./Song";
import { MixtapeContext } from "./MixtapeContext"

export const SongList = () => {
  // Your code here! ✨
  const {genre, sortOrder, songs} = useContext(MixtapeContext)
  return (
    <>
      <Song artist="Nickelback" genre="rock" name="Photograph" year={2005} />
      {songs.map(song => <Song {...song} key={song.name} />)}
    </>
  );
};
