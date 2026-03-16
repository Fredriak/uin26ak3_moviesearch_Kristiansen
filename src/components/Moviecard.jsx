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