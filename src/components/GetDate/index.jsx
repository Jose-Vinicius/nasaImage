//Função para pegar a data do dia e formatar a mesma
export function getDate(){
    const newDate = new Date()
    let day = newDate.getDate();
    let mounth = newDate.getMonth()+1;
    let year = newDate.getFullYear();

    return(
        `${year}-${mounth < 10 ? '0'+mounth : mounth}-${day <= 10 ? '0'+day : day}`
    )
}