import { useDateContext } from "../../context/DateContext";

import { Button } from "../Button";
import { InputField } from "./InputField";

import './style.scss';

export function Form(){
    const { handleSubmit } = useDateContext();

    return(
        <form onSubmit={handleSubmit}>
            <InputField />
            <Button>
                Buscar imagem
            </Button>
        </form>
    )
}