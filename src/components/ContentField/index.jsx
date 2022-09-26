import { useDateContext } from "../../context/DateContext";
import { Button } from '../Button/';
import { YoutubeEmbed } from "../EmbedPlayer";

import './style.scss';

export function ContentField(){
    const {image, title, author, text,  hiddenDescription, setHiddenDescription, mediaType, videoID} = useDateContext();
    
    return(
        <main>
            <h2>{title}</h2>
            <div>
                {
                    mediaType === 'image' || mediaType === undefined ?
                    <img src={image} alt={title}/> :
                    <YoutubeEmbed videoID={videoID}/>

                }
                <small>{author}</small>
            </div>
            <Button
                eventClick={() => setHiddenDescription(!hiddenDescription)}
            >
                <a href="#description--text">{hiddenDescription ? 'Esconder descrição' : 'Mostrar descrição'}</a>
            </Button>
            {hiddenDescription && <p id="description--text">{text}</p>}
        </main>
    )
}