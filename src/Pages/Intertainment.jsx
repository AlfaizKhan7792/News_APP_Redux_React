import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../features/News/NewsService'
import { Get_News } from '../features/News/NewsSlice'
import { toast } from 'react-toastify'
import IntertainmentCard from '../components/IntertainmentCard'
import Loading from './Loading'

const Intertainment = () => {

    const {AllNews} = useSelector((state) => state.News)
    const dispatch = useDispatch()

    const IntertainmentNews = async (Topic) =>{
       try {
        const data = await fetchNews(Topic)
        if(data.error){
            toast.error("News Not Fetch !!")
        }else{
            dispatch(Get_News(data))
        }
       } catch (error) {
        toast.error("Some Thing Went Wrong Intertainment !!")
       }
    }

    useEffect(() =>{
        IntertainmentNews("Bollywood")
    },[])

  return (
    <>
        <h3 className='text-center text-dark display-2 fw-bold fs-italic'>Intertainment_News</h3>
        <div className="container py-3 d-flex flex-wrap">
<div className="card-group">
{!AllNews || AllNews.length === 0 ? (<Loading />) : (
    AllNews?.map((news , index) => <IntertainmentCard key={index} news={news} index={index} />)
)
}
</div>
</div>
    </>
  )
}

export default Intertainment
