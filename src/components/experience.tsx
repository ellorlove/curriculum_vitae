import { withFetchedData } from "./withFetchData"
import { withInfoBlock } from "./withInfoBlock"
import { withListView } from "./withListView"

interface Experience {
    id : number,
    title : string,
    company : string,
    location : string,
    period : string
}

const ExperienceItem = ({
    title, 
    company, 
    location, 
    period
}: Experience) => {

    return(
        <div className='flex justify-between my-6'>
            <div className="flex flex-col items-start">
                <div className="text-xl font-bold">{title}</div>
                <h2 className="text-lg">{company}</h2>
                <div>{location}</div>
            </div>
            <div>{period}</div>
        </div>
    )
}

const ExperienceView = withListView(
    ExperienceItem, 
    'flex flex-col')

const WrappedExperience = withFetchedData(
    ExperienceView, 
    '/data/experience.json')

export const ExperienceBlock = withInfoBlock(WrappedExperience, 'Experience')