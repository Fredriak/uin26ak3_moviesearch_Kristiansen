//Koden er skrevet med delvis hjelp fra Chatgpt https://chatgpt.com/share/69b7d228-6e58-8008-85db-14b9c0d22a58

export default function History({history, setSearch}){

    const handleChange = (e)=>{
        setSearch(e.target.value)
    }

    return (

        <select onChange={handleChange}>

            {history?.map((item, i) => (
                <option key={i} value={item}>
                    {item}
                </option>
            ))}

        </select>

    )
}