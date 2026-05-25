import { withFetchedData } from "./withFetchData"
import { withInfoBlock } from "./withInfoBlock"
import { withListView } from "./withListView"

interface Skill {
    name : string,
    items : string[]
}


const SkillItem = ({name, items} : Skill) => {


    return(
        <div className='flex flex-col items-start mb-4'>
            <h2 className="text-l">{name}</h2>
            <div className="text-justify">{items.join(', ')}</div>
        </div>
    )

}

const SkillsView = withListView(SkillItem, 'flex flex-col items-start h-full')

const WrappedSkills = withFetchedData(SkillsView)

export const SkillsBlock = withInfoBlock(WrappedSkills, 'Skills')