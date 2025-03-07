import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LogOutUser } from '../features/Auth/AuthSlice'
// import { useNavigate } from 'react-router'
import { Link } from 'react-router'
import { fetchNews } from '../features/News/NewsService'
import { toast } from 'react-toastify'
import { Get_News } from '../features/News/NewsSlice'

const Navbar = () => {

    // const {user} = useSelector((state) => state.Auth)
    const {AllNews} = useSelector((state) => state.News)
    const dispatch = useDispatch()
    // const navigate = useNavigate()

    const [Topic , setTopic] = useState("")

    const handleExit = () =>{
        dispatch(LogOutUser())
    }

    const getNews = async (Topic) =>{
        try {
        const data = await fetchNews(Topic)
        if(data.error){
            toast.error("Enter a Valid Name")
        }
        else{
            dispatch(Get_News(data))
        }
        } catch (error) {
            toast.error("SomeThing Went Wrong!!")
        }
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        getNews(Topic)
        setTopic("")
    }

    // useEffect(() =>{
    //     if(user){
    //         navigate("/")
    //     }
    // },[user])

    if(!AllNews || AllNews.length === 0){
        getNews("India")
    }

  return (
    <>
   {
    !user ? <></> : 
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <Link class="navbar-brand" to="/" onClick={() => getNews("India")}>News):- _App</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/intertainment">Intertainment</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/sports">Sports</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/business">Business</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/politics">Politics</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/state">State</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/international">International</Link>
          </li>
        </ul>
        <form class="d-flex gap-2" onSubmit={handleSubmit}>
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setTopic(e.target.value)} value={Topic} />
          <button class="btn btn-outline-dark" type="submit">Search</button>
          <button onClick={handleExit} class="btn btn-outline-dark" type="submit">LogOut</button>
        </form>
      </div>
    </div>
  </nav>
   
   }
    </>
  )
}

export default Navbar
