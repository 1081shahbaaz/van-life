import React from "react";
import useFetch from "../../Hooks/useFetch";
import { Link } from "react-router-dom";

export default function HostVans() {

    const [hostVansData, setHostVansData] = React.useState([])

    React.useEffect(() => {
        const data = useFetch('/api/host/vans')
        data.then((result) => {
            setHostVansData(result)
        })
    }, [])

    const hostVansEls = hostVansData.map(van => (
        <Link to={`${van.id}`} key={van.id}>
            <div className="hostVan--card">
                <img src={van.imageUrl} alt="" />
                <div className="hostVan--info">
                    <h3>{van.name}</h3>
                    <p>${van.price}</p>/day
                </div>
            </div>
        </Link>
    ))

    return (
        <main className="host--vans">
            <h1>Your listed vans</h1>
            <div className="vans--list">
                {hostVansData.length > 0 ? (hostVansEls) : (<h1>Loading....</h1>)}
            </div>
        </main>
    )
}