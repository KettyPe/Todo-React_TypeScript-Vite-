import { useState, useEffect, useRef } from 'react'
import { ITodo } from "@/types/data"
import { TodoList } from "@/components/TodoList"

export const App: React.FC = () => {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState<ITodo[]>([])

  const addTodo = () => {
    if(value) {
      setTodos([...todos, {
        id: Date.now(),
        title: value,
        complete: false
      }])
      //очистка поля ввода после того, как данные были отправлены
      setValue('')
    }
  }

  return (
    <div>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
      <button onClick={addTodo}> Add</button>
      <TodoList items={todos}/>
    </div>
  )
}
