import React, { useEffect, useState } from 'react'
import AddTodo from '../components/AddTodo'
import Navbar from '../components/Navbar'
import { Todo } from '../lib/db'

function spa() {
    const [todos, setTodos] = useState<Todo[]>()
    useEffect(() => {
        const loadData = async () => {
            const response = await fetch('http://localhost:3000/api/todo')
            const data = await response.json()
            setTodos(data)
        }
        loadData()
    }, [])

    return (
        <div className='h-screen bg-gray-500'>
            <Navbar />
            {!todos
                ? <h2 className='text-2xl'>Carregando...</h2>
                :
                <div>
                    <AddTodo />
                </div>
            }
        </div>
    )
}

export default spa