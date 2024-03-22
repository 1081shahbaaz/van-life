import React from 'react'
import useFetch from '../../Hooks/useFetch'
import Van from '../../components/Van'
import { useSearchParams, Link } from 'react-router-dom'

export default function Vans() {

    const [vansData, setVansData] = React.useState([])
    let [searchParams, setSearchParams] = useSearchParams()

    let typeFilter = searchParams.get('type')

    React.useEffect(() =>{
        const data = useFetch('api/vans')
        data.then((result) => {
            setVansData(result)
        })
    },[])

    let typeVansData = typeFilter ?
        vansData.filter(data => data.type === typeFilter)
        : vansData

    console.log(typeVansData)

    const vansCard = typeVansData
        .map(van => 
            <Van 
                key={van.id}
                imageUrl={van.imageUrl}
                name={van.name}
                price={van.price}
                type={van.type}
                id={van.id}
                searchParams = {searchParams}
                typeFilter={typeFilter}
            />
        )

    function handleFilterChange(key, value){
        setSearchParams(prevParams => {
            if (!value){
                prevParams.delete(key)
            }else{
                prevParams.set(key,value)
            }

            return prevParams
        })
    }


    return (
        <section className='vans--section'>
            <h1>Explore our van options</h1>
            <div className='vans--filter'>
                <button className={`van-type simple ${typeFilter==='simple' ? 'selected' : ''}`} onClick={() => handleFilterChange('type','simple')}>Simple</button>
                <button className={`van-type luxury ${typeFilter==='luxury' ? 'selected' : ''}`} onClick={() => handleFilterChange('type','luxury')}>Luxury</button>
                <button className={`van-type rugged ${typeFilter==='rugged' ? 'selected' : ''}`} onClick={() => handleFilterChange('type','rugged')}>Rugged</button>
                { typeFilter && <p onClick={() => handleFilterChange('type',null)}>Clear Filters</p> }
            </div>
            <div className='vans--content'>
            <div className="con">
                <div className="row">
                    {vansCard}
                </div>
                </div>
            </div>
        </section>
    )
}