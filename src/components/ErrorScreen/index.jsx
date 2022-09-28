import './style.scss'

export function ErrorScreen(){
    return(
        <main className='error-screen'>
            <p>Data superior a atual</p>
            <div>
                <img src="/not-found.png"  alt="Not Found"/>
            </div>
        </main>
    )
}