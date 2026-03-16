import { useParams } from "react-router-dom"

export default function Movie(){

    const { movie } = useParams()

    return(
        <main>
            <header>
                <h1>{movie}</h1>
            </header>
        </main>
    )
}