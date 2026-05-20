import { Fragment } from "react/jsx-runtime";
import { v4 as uuidv4 } from 'uuid'
import { withFetchedData } from "./withFetchData";
import { withInfoBlock } from "./withInfoBlock";
import { withListView } from "./withListView";

interface Education {
    speciality : string,
    degree : string,
    school : string,
    period : string,
    location : string
}

const EducationItem = ({
    speciality,
    degree,
    school,
    period,
    location,
} : Education) => {
    return(
        <div className="flex flex-col items-start my-4">
            <div className="text-xl font-bold">{speciality}</div>
            <div>{degree}</div>
            <h2 className="text-lg">{school}</h2>
            <div>{period} {location}</div>
        </div>
    )
}

const EducationView = withListView(EducationItem, '')

const WrappedEducation = withFetchedData(
    EducationView,
    '/data/education.json')

export const EducationBlock = withInfoBlock(WrappedEducation, 'Education')