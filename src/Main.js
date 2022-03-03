import { Route, Routes } from 'react-router-dom'

import List from './page/List'
import Read from './page/Read'
import Write from './page/Write'
import Update from './page/Update'

import './Main.css'

function Main() {

  return (
    <Routes>
      <Route path='/' element={<List />} />
      <Route path='/read/:no' element={<Read />}  />
      <Route path='/write' element={<Write />} />
      <Route path='/update' element={<Update />} />
    </Routes>
  )
}

export default Main
