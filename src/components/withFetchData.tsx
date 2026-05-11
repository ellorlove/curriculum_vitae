import { type ComponentType } from "react";
import { useFetch } from "../hooks/fetch.hook";

const withFetchedData = <P extends object>(
    WrappedComponent : ComponentType<P>,
    url : RequestInfo
) => {
    return (props: Omit<P, 'data'>) => {
        const {data, load, error} = useFetch(url)

        if(load == 'loading') return null
        if(error){
            console.error(error)
            return null
        }

        return <WrappedComponent {...(props as P)} data={data} />;
    }

}

export {withFetchedData}