import { useDateContext } from "../../context/DateContext";
import { Button } from '../Button/';

import { YoutubeEmbed } from "../EmbedPlayer";
import { ErrorScreen } from "../ErrorScreen";
import { getDate } from "../GetDate";

import './style.scss';

export function ContentField(){
    const {
        image, 
        title, 
        author, 
        text,  
        hiddenDescription, 
        setHiddenDescription, 
        mediaType, 
        videoUrlID,
        date,
        hdImage
    } = useDateContext();
    
    return(
       date <= getDate() ? 
        <main>
            <h2>{title}</h2>
            <div>
                {
                    mediaType === 'image' || mediaType === undefined ?
                    <img src={image} alt={title}/> :
                    <YoutubeEmbed videoID={videoUrlID}title={title}/>
                }
                <small>{author}</small>
            </div>
            {image && <Button eventClick={() => setHiddenDescription(!hiddenDescription)}>
                <a href="#description--text">{hiddenDescription ? 'Esconder descrição' : 'Mostrar descrição'}</a>
            </Button>}
            {hiddenDescription && <p id="description--text">{text}</p>}
           { mediaType === 'image' ? 
           <Button
                width='200px'
                height='50px'
                fontSize='1.3rem'
           >
                <a href={hdImage} target="__blank">Imagem completa</a>
            </Button> : ''}
        </main>
        : <ErrorScreen />
    )
}