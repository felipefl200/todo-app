import { useState } from "react"

function AddTodo() {
    const [description, setDescription] = useState('')
    const handleClick = async () => {
        await fetch('/api/todo', {
            method: 'POST',
            body: JSON.stringify(description)
        })
    }
    return (
        <form className="flex justify-center mt-10">
            <div className="bg-gray-50 p-8 rounded-lg">
                <h1 className="text-center mb-4 text-gray-400">Insira uma nova tarefa</h1>
                <div className="flex space-x-2 p-2 bg-white rounded-md">
                    <input onChange={e => setDescription(e.currentTarget.value)} type="text" placeholder="Nova tarefa..." className="w-full outline-none" />
                    <button onClick={() => handleClick()} className="bg-green-500 px-2 py-1 rounded-md text-white font-semibold hover:bg-green-400 duration-100">Enviar</button>
                </div>
            </div>
        </form>
    )
}

export default AddTodo