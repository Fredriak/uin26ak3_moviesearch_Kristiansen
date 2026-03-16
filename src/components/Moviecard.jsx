//Koden er skrevet med hjelp fra chatgpt https://chatgpt.com/share/69b7d228-6e58-8008-85db-14b9c0d22a58

import { Link } from "react-router-dom"

export default function MovieCard({ movie }){

    return(

        <article>

            <Link to={`/${movie.Title}`}>

                <figure>

                    {movie.Poster !== "N/A"
                        ? <img src={movie.Poster} alt={movie.Title}/>
                        : <p>Bilde mangler</p>
                    }

                </figure>

                <header>
                    <h2>{movie.Title}</h2>
                    <p>{movie.Year}</p>
                </header>

            </Link>

        </article>

    )
}