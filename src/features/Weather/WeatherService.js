
export const fetchWeather = async () =>{
    const res = await fetch(``)
    const data = await res.json()
    return data
}