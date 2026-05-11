import { Fragment } from "react"
import { v4 as uuidv4} from 'uuid';
import { type Experience } from "../types/experience"
import { withFetchedData } from "./withFetchData"
import { withInfoBlock } from "./withInfoBlock";

const ExperienceDataView = ({data} : {data : Experience[]}) => {
    if(!data) return null
    return (
        <div className='flex flex-col h-full justify-around'>
            {data.map(item => (
                <Fragment key={uuidv4()}>
                    <ExperienceItem {...item}/>
                </Fragment>
            ))}
        </div>
    )
}

const WrappedExperience = withFetchedData(
    ExperienceDataView, 
    '/data/experience.json')

const ExperienceItem = (props: Experience) => {

    const {title, company, location, period} = props

    return(
        <div className='flex justify-between mb-6'>
            <div className="flex flex-col items-start">
                <h2 className="text-base font-extrabold text-black">{title}</h2>
                <h2 className="text-lg">{company}</h2>
                <div>{location}</div>
            </div>
            <div>{period}</div>
        </div>
    )
}

export const ExperienceBlock = withInfoBlock(WrappedExperience, 'Experience')