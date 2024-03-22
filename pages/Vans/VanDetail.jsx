import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import useFetch from '../../Hooks/useFetch'
import { FaArrowLeft } from "react-icons/fa";

export default function VanDetail() {

    const [vanDetail, setVanDetail] = React.useState(null)

    const params = useParams()

    const location = useLocation()
    console.log(location)

    React.useEffect(() => {
        const vansDetail = useFetch(`/api/vans/${params.id}`)
        vansDetail.then((result) => {
            setVanDetail(result)
        })
    }, [params.id])

    const search = location.state?.search || ""
    const type = location.state?.type || "all"

    return (
        <section className="vanDetail--section">
            { vanDetail ?
            <div className="vanDetail--content">
                <Link to={`..${search}`} relative="path"><FaArrowLeft /> <span>Back to {type} vans</span></Link>
                <img src={vanDetail.imageUrl} />
                <button className={`butn btn-${vanDetail.type}`}>{vanDetail.type.charAt(0).toUpperCase() + vanDetail.type.slice(1)}</button>
                <h1 className="van--name">{vanDetail.name}</h1>
                <h2 className="van--price">${vanDetail.price}<span>/day</span></h2>
                <h4 className="van--desc">{vanDetail.description}</h4>
                <button className="rent--btn butn">Rent this Van</button>
            </div>
            : <h1>Loading...</h1>}
        </section>
    )
}