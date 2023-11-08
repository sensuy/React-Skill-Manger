import { useState } from 'react'
import ListTask from './components/ListSkill'
import { useEffect } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Toaster } from 'react-hot-toast';
import { InputSkill } from './components/InputSkill'
import Skills from './components/Skills'

function App() {
  const [tasks, setTasks] = useState<any>([])

  useEffect(() => {
    setTasks(JSON.parse((localStorage.getItem('tasks')) as any) || [])
  }, [])

  return (
    <DndProvider backend={HTML5Backend}>
      <Toaster toastOptions={{
        duration: 3000,
      }} />
      <div className='w-screen -h-screen flex flex-col items-center pt-3 gap-16 mt-12'>
        <div>
          <h1 className='text-4xl text-center font-bold text-slate-700'>Skill Manager</h1>
          <p className='text-slate-500'>Drag and drop skills to point out your level</p>
        </div>
        <Skills />
        <InputSkill />
        <ListTask tasks={tasks} setTasks={setTasks} />
      </div>
      <a
        href="https://github.com/iamnullman/react-todo-list"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 hover:text-indigo-500 transition-all duration-300"
      >
        <i className="fab fa-github fa-2x"></i>
      </a>
    </DndProvider>
  )
}

export default App
