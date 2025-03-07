import React from 'react'
import { useDispatch } from 'react-redux'
import { Remove_News } from '../features/News/NewsSlice'

const NewsCard = ({news , index}) => {

    const dispatch = useDispatch()

    const handleRemove = (index) =>{
        dispatch(Remove_News(index))
    }

  return (
    <>
      <div class="card mb-3" style={{"max-width": "540px;"}}>
  <div class="row g-0">
    <div class="col-md-4 col-sm-12">
      <img src={news?.urlToImage} class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-8 col-sm-12">
      <div class="card-body">
        <button onClick={() => handleRemove(index)} className="btn-close float-end ps-3" data-bs-dismiss="alert" aria-label="Close" type='submit'></button>
        <h5 className="card-title">{news?.title}</h5>
          <p className="card-text">{news?.description}</p>
          <p className="card-text"><small className="text-muted">Date : {new Date(news?.publishedAt).toDateString('en-IN')} </small>
          </p>
          <p className="card-text"><small className="text-muted">Author : {news?.author}</small>
          <a target='_blank' href={news.url} className="btn btn-sm btn-outline-primary float-end my-3" >View Full News</a>
          </p>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default NewsCard
