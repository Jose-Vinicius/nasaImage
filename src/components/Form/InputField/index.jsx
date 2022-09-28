import { useContext } from "react";
import { DateContext } from "../../../context/DateContext";
import './style.scss';

export function InputField(){
    const {date, setDate} = useContext(DateContext)
    return(
        <input type="date" name="date" value={date} onChange={(event) => setDate(event.target.value)}/>
    )
}