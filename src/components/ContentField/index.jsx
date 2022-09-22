import { useDateContext } from "../../context/DateContext";
import { Button } from '../Button/';
import YouTube from 'react-youtube';

import './style.scss';

export function ContentField(){
    const {image, title, author, text,  hiddenDescription, setHiddenDescription, mediaType, video} = useDateContext();
    const optsYoutube = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1,
        },
    }
    return(
        <main>
            <h2>{title}</h2>
            <div>
                {
                    mediaType === 'image' || mediaType !== '' ?
                    <img src={image} alt={title}/> :
                    <YouTube videoId={video} opts={optsYoutube}/>
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