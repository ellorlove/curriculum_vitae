import { Fragment } from "react/jsx-runtime"
import { withFetchedData } from "./withFetchData"
import { v4 as uuidv4} from 'uuid'
import { withInfoBlock } from "./withInfoBlock"

const SummaryView = ({data} : {data : string[]}) => {
    if(!data) return null

    return(
        <div className="text-justify">
            {data.map(item => (
                <Fragment key={uuidv4()}>
                    {item}<br/>
                </Fragment>
            ))}
        </div>
    )
}

const WrappedSummary = withFetchedData(
    SummaryView,
    '/data/summary.json'
)

export const SummaryBlock = withInfoBlock(WrappedSummary, 'Summary')