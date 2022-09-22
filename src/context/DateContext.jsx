import { createContext, useContext, useEffect, useState } from "react";

export const DateContext = createContext();
DateContext.displayName = "DateContext";

export const DateProvider  = ({children}) => {

    function getDate(){
        const newDate = new Date()
        let day = newDate.getDate();
        let mounth = newDate.getMonth()+1;
        let year = newDate.getFullYear();

        return(
            `${year}-${mounth < 10 ? '0'+mounth : mounth}-${day <= 10 ? '0'+day : day}`
        )
    }
   
    const [date, setDate] = useState(getDate());
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');
    const [data, setData] = useState('')
    const [hiddenDescription, setHiddenDescription] = useState(false)
    const [mediaType, setMediaType] = useState('')
    const [video, setVideo] = useState('')

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
                video, setVideo
            }}
        >
            {children}
        </DateContext.Provider>
    )
}

export const useDateContext = () => {
    const { 
        date,setDate,
        image, setImage,
        title, setTitle,
        text, setText,
        author, setAuthor,
        data, setData,
        hiddenDescription, setHiddenDescription,
        mediaType, setMediaType,
        video, setVideo
        
    } = useContext(DateContext);

    const urlAPI = 'https://api.nasa.gov/planetary/apod?';
    const APIkey = 'bMplXeQVtXuMG56JMPr3FatQIL13raAijCIAJNg7';

    async function getData(date){
        const response = await fetch(`${urlAPI}api_key=${APIkey}&date=${date}`)
        const Data = await response.json()
        setData(Data)
    }

    function handleSubmit(event){
        event.preventDefault();
        getData(date);
    }

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
        setVideo(() => {
            if(mediaType === 'video'){
                catchYoutubeId(data.url)
            }
        })
    },[data])

    return {
        date,
        setDate,
        handleSubmit,
        image,
        title,
        text,
        author,
        hiddenDescription,
        setHiddenDescription,
        mediaType,
        video
    }
}
