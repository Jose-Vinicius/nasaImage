import { createContext, useContext, useEffect, useState } from "react";
import { getDate } from "../components/GetDate";
import { catchYoutubeId } from "../components/catchYoutubeID";


export const DateContext = createContext();
DateContext.displayName = "DateContext";

export const DateProvider  = ({children}) => {
   
    const [date, setDate] = useState(getDate());
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');
    const [data, setData] = useState('')
    const [hiddenDescription, setHiddenDescription] = useState(false)
    const [mediaType, setMediaType] = useState('')
    const [videoUrlID, setVideoUrlID] = useState('')
    const [hdImage, setHdImage] = useState('');

    return(
        <DateContext.Provider
            value={{
                date,setDate,
                image, setImage,
                title, setTitle,
                text, setText,
                author, setAuthor,
                data, setData,
                hiddenDescription, setHiddenDescription,
                mediaType, setMediaType,
                videoUrlID, setVideoUrlID,
                hdImage, setHdImage
            }}
        >
            {children}
        </DateContext.Provider>
    )
}

export const useDateContext = () => {
    const { 
        date, setDate,
        image, setImage,
        title, setTitle,
        text, setText,
        author, setAuthor,
        data, setData,
        hiddenDescription, setHiddenDescription,
        mediaType, setMediaType,
        videoUrlID, setVideoUrlID,
        hdImage, setHdImage

        
    } = useContext(DateContext);

    
    
    useEffect(() => {
        setImage(data.url)
        setHdImage(data.hdurl)
        setAuthor(data.copyright)
        setText(data.explanation)
        setTitle(data.title)
        setMediaType(data.media_type)
        if(data.media_type === 'video'){
            setVideoUrlID(() => catchYoutubeId(data.url))
        }
    },[data])

    return {
        date,setDate,
        setData,
        image,
        title,
        text,
        author, 
        hiddenDescription, setHiddenDescription,
        mediaType,
        videoUrlID,
        hdImage,
    }
}
