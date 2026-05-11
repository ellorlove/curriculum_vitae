import './App.css'
import { ExperienceView } from './components/experience'
import { Header } from './components/header'
import { SummaryView } from './components/summary'

function App() {

  return (
    <>
      <div id='page' className='h-screen'>
        <Header/>
        <section id='mainInfo' className='p-8 grid grid-cols-[33%_67%]'>
          <SummaryView/>
          <ExperienceView/>
        </section>
      </div>
    </>
  )
}

export default App
