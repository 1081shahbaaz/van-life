import React from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { FaArrowLeft } from "react-icons/fa";

export default function HostVanDetail() {

    const [hostVan, setHostVan] = React.useState(null)

    const params = useParams()

    React.useEffect(() => {
        const data = useFetch(`/api/host/vans/${params.id}`)
        data.then((result) => {
            setHostVan(result[0])
        })
    }, [])

    return (
        <main className="host-van-detail-main">
            <Link to='..' relative="path"><FaArrowLeft /> <span>Back to all vans</span></Link>
            { 
                hostVan ? 
                    <div className="host-van-detail-container">
                        <div className="host-van-detail-info">
                            <img src={hostVan.imageUrl} alt="" />
                            <div className="host-van-detail-section">
                                <button className={`btn-${hostVan.type}`}>{hostVan.type}</button>
                                <h3>{hostVan.name}</h3>
                                <p>${hostVan.price}<span>/day</span></p>
                            </div>
                        </div>
                        <nav className="host-van-detail-navigation">
                            <NavLink end className={({isActive}) => isActive ? "active1" : ""} to=".">Details</NavLink>
                            <NavLink className={({isActive}) => isActive ? "active1" : ""} to="pricing">Pricing</NavLink>
                            <NavLink className={({isActive}) => isActive ? "active1" : ""} to="photos">Photos</NavLink>
                        </nav>
                        <Outlet context={hostVan} />
                    </div>
                    : <h1>Loading...</h1>
            }
            
        </main>
    )
}