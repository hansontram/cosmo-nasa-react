import React from "react";

function SpaceContent(props) {
  const { url, title, explanation, media_type } = props.data;
  return (
    <div>
      <h2>{title}</h2>
      <div className="content-box"></div>
      {media_type === "image" && (
        <img className="content-img" src={url} alt={title} />
      )}
      {media_type === "video" && (
        <iframe className="content-vid" src={url} alt={title} />
      )}
      <p className="content-description">{explanation}</p>
    </div>
  );
}

export default SpaceContent;
