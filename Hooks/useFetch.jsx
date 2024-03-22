import React from "react";

export default async function useFetch(url){
    const res = await fetch(url)
    let obj = await res.json();

    return obj.vans
}