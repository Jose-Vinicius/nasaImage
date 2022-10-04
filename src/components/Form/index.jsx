import { useDateContext } from "../../context/DateContext";
import { Button } from "../Button";
import { InputField } from "./InputField";
import { getData } from "../../services/get.apod.service";

import './style.scss';

export function Form(){

    const {date, setData} = useDateContext()

    //Prevenir evento padrão de envio do formulario e enviar a data solicitada
    function handleSubmit(event){
        event.preventDefault();
        getData(date).then(Data => {
            setData(Data)
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <InputField />
            <Button>
                Buscar imagem
            </Button>
        </form>
    )
}