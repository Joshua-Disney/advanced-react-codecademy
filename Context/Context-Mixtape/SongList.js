import React, { useContext } from "react";
import { Song } from "./Song";
import { MixtapeContext } from "./MixtapeContext";

export const SongList = () => {
  // Your code here! ✨

  const { genre, sortOrder, songs } = useContext(MixtapeContext);

  return (
    <>
      {songs
        .filter((song) => {
          if (genre !== "all") {
            return song.genre === genre;
          } else {
            return song;
          }
        })
        .sort((songA, songB) => {
          if (sortOrder === "ascending") {
            return songA.year - songB.year;
          } else {
            return songB.year - songA.year;
          }
        })
        .map((song) => {
          return <Song {...song} key={song.name} />;
        })}
    </>
  );
};
