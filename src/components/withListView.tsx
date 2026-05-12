import { Fragment, type ComponentType } from "react"

interface ListViewProps<T> {
    data : T[]
}

export const withListView = <T extends object>(
    WrappedComponent : ComponentType<any>,
    classList : string
) => {
    return ({data} : ListViewProps<T>) => {
        if(!data) return null
        return (
            <div className={classList}>
                {data.map((item, idx) => (
                    <Fragment key={idx}>
                        {typeof item !== 'string' ?
                        <WrappedComponent {...item}/>:
                        <WrappedComponent value={item}/>}
                    </Fragment>
                ))}
            </div>
        )
    }
}