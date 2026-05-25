import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import { Page } from './components/Page/Page'

function App() {

    return (
      <div id='page' className='block'>
        <BrowserRouter>
        <Routes>
          <Route path='/:id' element={<Page/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App
