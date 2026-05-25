import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import type { Info } from '../header'
import { HeaderBlock } from '../header'
import { SummaryBlock } from '../summary'
import { ExperienceBlock } from '../experience'
import { SkillsBlock } from '../skills'
import { LanguageBlock } from '../languages'
import { EducationBlock } from '../education'


import './Page.scss'

interface DataType {
    id : string,
    info : Info,
    urls : any
}

export const Page = () => {

    const id = useParams().id

    const [data, setData] = useState<DataType>()

    useEffect(() => {
        fetch(`http://localhost:3000/api/${id}`)
            .then(response => response.json())
            .then(response => setData(response))
    }, [id])

    return (
        <>
        <div  className='background h-screen fixed'/>
            {data? 
            <div>
                <HeaderBlock info={data.info} avatarUrl={data.urls.avatar}/>
                <section id='mainInfo' className='p-8 grid grid-cols-[40%_60%]'>
                    <div>
                        <EducationBlock url={data.urls.education}/>
                        <LanguageBlock url={data.urls.language}/>
                        <SkillsBlock url={data.urls.skills}/>
                    </div>
                    <div>
                        <SummaryBlock url={data.urls.summary}/>
                        <ExperienceBlock url={data.urls.experience}/>
                    </div>
                </section>
            </div> : null}
        </>
    )
}