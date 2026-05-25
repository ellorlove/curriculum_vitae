import { withFetchedData } from "./withFetchData"
import { withInfoBlock } from "./withInfoBlock"
import { withListView } from "./withListView"

const SummaryItem = ({value} : {value : string}) => {
    return (
        <>{value ? value + ' ' : <><br/><br/></>}</>
    )
}

const SummaryView = withListView(SummaryItem, 'text-justify')

const WrappedSummary = withFetchedData(SummaryView)

export const SummaryBlock = withInfoBlock(WrappedSummary, 'Summary')