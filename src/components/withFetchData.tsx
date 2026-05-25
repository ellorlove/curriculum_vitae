import { type ComponentType } from "react";
import { useFetch } from "../hooks/fetch.hook";

interface WithFetchedDataProps {
    url: string;
}

const withFetchedData = <P extends { data: any }>(
    WrappedComponent : ComponentType<Pick<P, 'data'>>
) => {
    return (props: WithFetchedDataProps) => {
        const {data, load, error} = useFetch(props.url)

        if(load == 'loading') return null
        if(error){
            console.error(error)
            return null
        }

        return <WrappedComponent data={data} />;
    }

}

export {withFetchedData}