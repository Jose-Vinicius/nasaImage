import { createContext, useContext, useEffect, useState } from "react";
import { getDate } from "../components/GetDate";

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
                videoUrlID, setVideoUrlID
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
        videoUrlID, setVideoUrlID
        
    } = useContext(DateContext);

    const urlAPI = 'https://api.nasa.gov/planetary/apod?';
    const APIkey = import.meta.env.VITE_APOD_KEY

    //Fazer a conexão e pegar os dados da API Apod da Nasa
    async function getData(date){
        const response = await fetch(`${urlAPI}api_key=${APIkey}&date=${date}`)
        const Data = await response.json()
        setData(Data)
    }

    //Prevenir evento padrão de envio do formulario e enviar a data solicitada
    function handleSubmit(event){
        event.preventDefault();
        getData(date);
    }

    //Pegar o ID do video do youtube
    function catchYoutubeId(videoURL){
        let videoID
        if(videoURL){
            videoID = videoURL.split("embed/")[1].split("?")[0];
            return videoID
        }
    }
    
    useEffect(() => {
        setImage(data.url)
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
        handleSubmit,
        image,
        title,
        text,
        author, 
        hiddenDescription, setHiddenDescription,
        mediaType,
        videoUrlID
    }
}
