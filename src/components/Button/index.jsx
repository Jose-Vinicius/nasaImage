import './style.scss'

export function Button({children, eventClick, width, height, fontSize}){
    const style = {
        width: width,
        height: height,
        fontSize: fontSize
    }
    return(
        <button onClick={eventClick} style={style}>
            {children}
        </button>
    )
}
