//Koden er skrever med delvis hjelp fra chatgpt https://chatgpt.com/share/69b7d228-6e58-8008-85db-14b9c0d22a58

import { useEffect, useState } from "react"
import History from '../components/History'
import MovieCard from "../components/MovieCard"

export default function Home (){

    const [search, setSearch] = useState("")
    const [movies, setMovies] = useState([])

    const storedHistory = localStorage.getItem("search")
    const [focused, setFocused] = useState(false)

    const [history, setHistory] = useState(
        storedHistory ? JSON.parse(storedHistory) : []
    )

    const apiKey = import.meta.env.VITE_APP_API_KEY

    const baseUrl = `https://www.omdbapi.com/?s=${search}&apikey=${apiKey}`

    useEffect(()=>{
        localStorage.setItem("search", JSON.stringify(history))
    },[history])


    // henter James Bond filmer ved start
    useEffect(()=>{

        const getBondMovies = async ()=>{

            try{

                const response = await fetch(`https://www.omdbapi.com/?s=james+bond&apikey=${apiKey}`)
                const data = await response.json()

                if(data.Search){
                    setMovies(data.Search.slice(0,10))
                }

            }
            catch(err){
                console.error(err)
            }

        }

        getBondMovies()

    },[])


    const getMovies = async()=>{

        if(!search || search.length < 3) return

        try{

            const response = await fetch(baseUrl)
            const data = await response.json()

            if(data.Search){
                setMovies(data.Search)
            }

        }
        catch(err){
            console.error(err)
        }

    }


    const handleChange = (e)=>{
        setSearch(e.target.value)
    }


    const handleSubmit = (e)=>{
        e.preventDefault()

        if(!search || search.length < 3) return

        setHistory((prev)=>[...prev, search])

        getMovies()

        e.target.reset()
    }


    return(
    <main>

        <header>
            <h1>Forside</h1>
        </header>

        <section>

        <form onSubmit={handleSubmit}>

            <label>

                Søk etter film

                <input
                    type="search"
                    placeholder="Harry Potter"
                    onChange={handleChange}
                    onFocus={()=> setFocused(true)}
                    value={search}
                />

                {focused ? <History history={history} setSearch={setSearch}/> : null }

            </label>

            <button type="submit">
                Søk
            </button>

        </form>

        </section>


        <section>

            <ul>

                {movies?.map(movie => (
                    <li key={movie.imdbID}>
                        <MovieCard movie={movie}/>
                    </li>
                ))}

            </ul>

        </section>

    </main>

    )
}