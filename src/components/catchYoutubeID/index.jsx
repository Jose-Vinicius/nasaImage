//Pegar o ID do video do youtube
export function catchYoutubeId(videoURL){
    let videoID
    if(videoURL){
        videoID = videoURL.split("embed/")[1].split("?")[0];
        return videoID
    }
}