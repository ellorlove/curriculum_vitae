import type { ComponentType } from "react"
import { InfoBlock } from "./InfoBlock"

export const withInfoBlock = <P extends object>(
    WrappedComponent : ComponentType<P>,
    title : string
) => {
    return (props : P) => {
        return(
            <InfoBlock title={title}>
                <WrappedComponent {...props}/>
            </InfoBlock>
        )
    }
}