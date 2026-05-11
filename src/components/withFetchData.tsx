import { useEffect, type ComponentType } from "react";
import { useFetch } from "../hooks/fetch.hook";

const withWrappedData = <P extends object>(
    WrappedComponent : ComponentType<P>,
    url : RequestInfo,
    key : string
) => {
    return (props: Omit<P, 'data'>) => {
        const {data, load, error} = useFetch(url, key)

        if(load == 'loading') return null
        if(error){
            console.error(error)
            return null
        }

        return <WrappedComponent {...(props as P)} data={data} />;
    }

}

export {withWrappedData}