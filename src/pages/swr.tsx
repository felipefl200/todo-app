import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import AddTodo from '../components/AddTodo'
import Navbar from '../components/Navbar'
import { Todo } from '../lib/db'
import axios from 'axios'

function swr() {

    const { data: todos } = useSWR<Todo[]>('/api/todo', (url: string) => axios(url).then(res => res.data))


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

export default swr