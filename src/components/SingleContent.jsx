import React from "react";
import "./SingleContent.css";
import { img_300, unavailable } from "../config/config";
import { Badge } from "@material-ui/core";
import ContentModal from "./ContentModal";

const single = {
  backdrop_path: "/jQGdWUAtcAZBeqCCKZGqLPm0JVu.jpg",
  first_air_date: "2022-03-03",
  genre_ids: (2)[(16, 10759)],
  id: 152483,
  media_type: "tv",
  name: "The Boys Presents: Diabolical",
  origin_country: ["US"],
  original_language: "en",
  original_name: "The Boys Presents: Diabolical",
  overview:
    "From some of the most unhinged and maniacal minds in Hollywood today comes this animated anthology series, a collection of irreverent and emotionally shocking animated short films. Each episode plunges elbow-deep into unseen crevices of The Boys Universe.",
  popularity: 173.361,
  poster_path: "/kZKfZWwFOAicgoKS2IO7oM1GuHZ.jpg",
  vote_average: 7.4,
  vote_count: 19,
};

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <ContentModal media_type={media_type} id={id}>
    <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "movie" ? "Movie" : "TV Series"}
        <span className="subTitle">{date}</span>
      </span>
    </ContentModal>
  );
};

export default SingleContent;
