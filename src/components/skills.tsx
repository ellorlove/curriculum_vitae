import { withFetchedData } from './withFetchData';
import { withInfoBlock } from './withInfoBlock';
import { withListView } from './withListView';

const SkillItem = ({value} : {value: string}) => {
    return (
        <div className='mb-6'>
            {value}
        </div>
        )
}

const SkillsView = withListView(SkillItem, 'flex flex-col items-start h-full')

const WrappedSkills = withFetchedData(
    SkillsView,
    '/data/skills.json'
)

export const SkillsBlock = withInfoBlock(WrappedSkills, 'Skills')