import React from 'react'
import { useDispatch } from 'react-redux'
import { Remove_News } from '../features/News/NewsSlice'

const StateCard = ({news , index}) => {

    const dispatch = useDispatch()

    const handleRemove = (index) =>{
        dispatch(Remove_News(index))
    }

  return (
    <div className='w-50'>
       <div class="card">
  <img src={news?.urlToImage || "https://i.pinimg.com/originals/58/f1/04/58f104821b9c1b27dfbc8a22e96ad88d.jpg"} class="card-img-top" alt="..." />
  <div class="card-body">
  <button type="button" class="btn-close float-end ps-3" data-bs-dismiss="alert" aria-label="Close" onClick={() => handleRemove(index)}></button>
    <h5 class="card-title">{news?.title}</h5>
    <p class="card-text">{news?.description}</p>
    <p class="card-text"><small className="text-muted">Date : {new Date(news?.publishedAt).toDateString("en-In")} </small></p>
    <p class="card-text"><small className='text-muted'>Author :</small>{news?.author}
    <a href={news?.url} target='_blank' class="btn btn-outline-primary float-end">View Full News</a>
    </p>
  </div>
</div>
    </div>
  )
}

export default StateCard
