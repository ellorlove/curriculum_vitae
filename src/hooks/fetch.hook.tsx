import { useEffect, useState } from "react"

const useFetch = (url : RequestInfo, key : string) => {

    const [data, setData] = useState<Array<any> | Object | null>(null)
    const [load, setLoad] = useState<string>('idle')
    const [error, setError] = useState<string>('')

    useEffect(()=>{
        setLoad('loading')

        fetch(url)
        .then(response => response.json())
        .then(response => setData(response[key]))
        .catch(error => setError(
            error instanceof Error ? 
            error.message : 
            `Error fetching ${key} data`
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