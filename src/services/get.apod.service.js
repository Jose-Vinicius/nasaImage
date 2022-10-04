const urlAPI = 'https://api.nasa.gov/planetary/apod?';
const APIkey = import.meta.env.VITE_APOD_KEY;

//Fazer a conexão e pegar os dados da API Apod da Nasa
export async function getData(date){
    const response = await fetch(`${urlAPI}api_key=${APIkey}&date=${date}`)
     return await response.json()
}
