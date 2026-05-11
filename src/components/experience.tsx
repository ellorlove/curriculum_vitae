import { Fragment } from "react"
import { type Experience } from "../types/experience"
import { withWrappedData } from "./withFetchData"

const ExperienceView = () => {

    return(
        <div className="m-4 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-4">
                <h2 className="text-2xl font-bold whitespace-nowrap">Experience</h2>
                <div className="flex-1 h-[3px] bg-gray-400/50"></div>
            </div>
            <div className='flex flex-col h-full justify-around'>
            <WrappedExperience/>
            </div>
        </div>
    )
}

const ExperienceDataView = ({data} : {data : Experience[]}) => {
    if(!data) return null
    return (
        <>
            {data.map(item => (
                <Fragment key={item.id}>
                    <ExperienceItem {...item}/>
                </Fragment>
            ))}
        </>
    )
}

const WrappedExperience = withWrappedData(
    ExperienceDataView, 
    '/data/experience.json', 
    'experience')

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

export {ExperienceView}