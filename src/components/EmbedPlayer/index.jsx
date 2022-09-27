import React from "react";

import './style.scss';

export const YoutubeEmbed = ({videoID, title}) => (
    <iframe
        src={`https://www.youtube.com/embed/${videoID}`}
        frameBorder='0'
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
    >
    </iframe>
)