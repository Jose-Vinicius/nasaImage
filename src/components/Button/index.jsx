import './style.scss'

export function Button({children, eventClick}){
    return(
        <button onClick={eventClick}>
            {children}
        </button>
    )
}