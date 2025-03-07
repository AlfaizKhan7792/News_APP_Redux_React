import axios from "axios"

const GetCurrentDate = () =>{
    const requireDate = new Date(Date.now()).toLocaleDateString("en-In")
    const day = requireDate.split("/")[0]
    const month = requireDate.split("/")[1] - 1
    const year = requireDate.split("/")[2]
    return `${year}-${month}-${day}`
}
const currentDate = GetCurrentDate()

export const fetchNews = async (Topic) =>{
    const response = await fetch(`https://newsapi.org/v2/everything?q=${Topic}&from=${currentDate}&sortBy=publishedAt&apiKey=bb48682e820f414ba82501f4b6a003d8`)
const data = await response.json()

    const filteredArticles = await data.articles.filter(article => article.title !== "[Removed]")
    return filteredArticles
}