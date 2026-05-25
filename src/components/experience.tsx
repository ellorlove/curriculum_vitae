import { withFetchedData } from "./withFetchData"
import { withInfoBlock } from "./withInfoBlock"
import { withListView } from "./withListView"

interface Experience {
    id : number,
    title : string,
    company : string,
    period : string,
    achievements : string[]
}

const ExperienceItem = ({
    title, 
    company, 
    period,
    achievements
}: Experience) => {

    return(
        <div className="flex flex-col my-4">
            <div className='flex justify-between'>
                <div className="flex flex-col items-start">
                    <div className="text-xl font-bold">{title}</div>
                    <h2 className="text-lg">{company}</h2>
                </div>
                <div>{period}</div>
            </div>       
            {achievements && achievements.length ? 
            <ul className="text-start list-disc list-inside">
                {achievements.map(item => (
                    <li>{item}</li>
                ))}
            </ul>: null}
        </div>

    )
}

const ExperienceView = withListView(
    ExperienceItem, 
    'flex flex-col')

const WrappedExperience = withFetchedData(ExperienceView)

export const ExperienceBlock = withInfoBlock(WrappedExperience, 'Experience')