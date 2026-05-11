import './App.css'
import { ExperienceBlock } from './components/experience'
import { Header } from './components/header'
import { SkillsBlock } from './components/skills'
import { SummaryBlock } from './components/summary'

function App() {

  return (
    <>
      <div id='page' className='h-full'>
        <Header/>
        <section id='mainInfo' className='p-8 grid grid-cols-[33%_67%]'>
          <SummaryBlock/>
          <ExperienceBlock/>
          <SkillsBlock/>
        </section>
      </div>
    </>
  )
}

export default App
