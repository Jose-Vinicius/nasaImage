import React from "react";

export const YoutubeEmbed = ({videoID}) => (
    <iframe
        width='600'
        height='500'
        src={`https://www.youtube.com/embed/${videoID}`}
        frameBorder='0'
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
    >
    </iframe>
)