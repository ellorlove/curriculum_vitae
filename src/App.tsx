import './App.css'
import { HeaderBlock } from './components/header'
import { SummaryBlock } from './components/summary'
import { ExperienceBlock } from './components/experience'
import { SkillsBlock } from './components/skills'
import { LanguageBlock } from './components/languages'
import { EducationBlock } from './components/education'

function App() {

    return (
      <div id='page' className='block'>
        <div className='background h-screen fixed'/>
        <HeaderBlock/>
        <section id='mainInfo' className='p-8 grid grid-cols-[33%_67%]'>
          <div>
            <SummaryBlock/>
            <SkillsBlock/>
          </div>
          <div>
            <ExperienceBlock/>
            <EducationBlock/>
            <LanguageBlock/>
          </div>
        </section>
      </div>
    )
}

export default App
