import { v4 as uuidv4} from 'uuid';
import { withFetchedData } from './withFetchData';
import { withInfoBlock } from './withInfoBlock';

const SkillsDataView = ({data} : {data : string[]}) => {
    if(!data) return null
    return (
    <div className='flex flex-col items-start h-full'>
        {data.map(item => (
            <div className='mb-6' key={uuidv4()}>
                {item}
            </div>
        ))}
    </div>
    )
}

const WrappedSkills = withFetchedData(
    SkillsDataView,
    '/data/skills.json'
)

export const SkillsBlock = withInfoBlock(WrappedSkills, 'Skills')