import React from 'react'
import { useState } from 'react'
import styles from "./style.module.css"
import axios from 'axios'
export default function MissionInput({ fetchDataFromServer }) {

    const [input, setInput] = useState({ taskName: '', deadLine: '' })


    const handleSubmit = async (event) => {
        event.preventDefault()
        await axios.post('http://localhost:2500/mission', input)
            .then(() => fetchDataFromServer())
        setInput((oldInput) => ({
            ...oldInput, taskName: ''
        }))
    }

    const handleChange = (event) => {
        let { name, value } = event.target
        if (name === "deadLine") {
            value = new Date(value)

        }

        setInput(oldInput => {
            const newData = { ...oldInput, [name]: value }
            console.log(newData);
            return newData
        })
    }
    return (
        <>
            <form className={styles.BottomFormContainer} onSubmit={handleSubmit}>


                <input className={styles.taskInput} type="text" name='taskName' value={input['taskName']} placeholder='Add Task' onChange={handleChange} />
                <input className={styles.taskInput} type="datetime-local" name='deadLine' onChange={handleChange} />
                <button className={styles.addButton} type='submit'>Add</button>
            </form>
        </>
    )
}
