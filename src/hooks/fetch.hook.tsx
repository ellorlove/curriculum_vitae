import { useEffect, useState } from "react"

const useFetch = (url : RequestInfo) => {

    const [data, setData] = useState<Array<any> | Object | null>(null)
    const [load, setLoad] = useState<string>('idle')
    const [error, setError] = useState<string>('')

    useEffect(()=>{
        setLoad('loading')

        fetch(url)
        .then(response => response.json())
        .then(response => setData(response))
        .catch(error => setError(
            error instanceof Error ? 
            error.message : 
            `Error fetching ${url}`
        ))
        .finally(() => setLoad('idle'))

    }, [url])

    return { 
        data,
        load,
        error
     }
}

export {useFetch}