import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../features/News/NewsService'
import { toast } from 'react-toastify'
import { Get_News } from '../features/News/NewsSlice'
import PoliticsCard from '../components/PoliticsCard'

const Politics = () => {

    const {AllNews} = useSelector((state) => state.News)
    const dispatch = useDispatch()

    const SportsNews = async (Topic) =>{
        try {
            const data = await fetchNews(Topic)
            if(data.error){
                toast.error("News Not Fetch !!")
            }else{
                dispatch(Get_News(data))
            }
        } catch (error) {
            toast.error("Some Thing Went Wrong Sports !!")
        }
    }

    useEffect(() =>{
        SportsNews("Politics")
    },[])

  return (
    <>
         <h3 className='text-center text-dark display-2 fw-bold fs-italic'>Politics_News</h3>
        <div className="container py-3 d-flex flex-wrap">
<div className="card-group">
{!AllNews || AllNews.length === 0 ? (<Loading />) : (
    AllNews?.map((news , index) => <PoliticsCard key={index} news={news} index={index} />)
)
}
</div>
</div>
    </>
  )
}

export default Politics
