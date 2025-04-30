import { useState } from 'react'
import './App.css'
import Tree from './components/Tree'
import menus from './components/data'

function App() {
 

  return (
    <>
      <Tree menus={menus} />
    </>
  )
}

export default App
