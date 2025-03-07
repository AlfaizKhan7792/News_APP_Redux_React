import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import NewsSlider from '../components/NewsSlider'
import NewsCard from '../components/NewsCard'
import { fetchNews } from '../features/News/NewsService'
import { Get_News } from '../features/News/NewsSlice'
import Loading from './Loading'

const Home = () => {

    const {user} = useSelector((state) => state.Auth)
    const {AllNews} = useSelector((state) => state.News)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const getNews = async (Topic) =>{
const data = await fetchNews(Topic)
dispatch(Get_News(data))
    }

    useEffect(() =>{
        if(!user){
            navigate("/login")
        }
        getNews("Indore")
    },[user])

  return (
    <>
        <div className="container-fluid p-5">
            <NewsSlider />
            <h1 className="text-center w-100 fw-bold display-1 mb-5">Top-News</h1>
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    Left Side
                </div>
                {/* Left-Side End */}
                <div className="col-md-8 col-sm-12">
                    {!AllNews || AllNews.length === 0 ? ( <Loading />) : (
                        AllNews?.map((news, index) => <NewsCard key={index} news={news} index={index} />)
                    )}
                </div>
                {/* Right-Side End */}
            </div>
            {/* Row End */}
        </div>
    </>
  )
}

export default Home
