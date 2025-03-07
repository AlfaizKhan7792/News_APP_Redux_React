import React from 'react'
import { useSelector } from 'react-redux'

const NewsSlider = () => {

    const {AllNews} = useSelector((state) => state.News)

  return (
    <>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  {/* <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div> */}
  <div class="carousel-inner">
      {
          AllNews.map((news,index) => {
              return (
                <div class={index === 0 ? "carousel-item active" : "carousel-item"}>
                <img src={news.urlToImage || "https://tse1.mm.bing.net/th?id=OIP.gj01TyLPi4vn7Mv8C45LiwAAAA&pid=Api&P=0&h=180"} class="d-block w-100" alt="..." id='sliderImage' />
    </div>
            )
        })
      }
  
   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default NewsSlider
