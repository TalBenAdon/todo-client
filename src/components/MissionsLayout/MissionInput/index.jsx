import React from 'react'
import { useState } from 'react'
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import styles from "./style.module.css"
export default function MissionInput({ setMissions }) {
    const [date, setDate] = useState(new Date())
    const [input, setInput] = useState({ taskName: '', Date: date })

    // const dateNow = new Date()
    // var hours = Math.abs(date - dateNow) / 36e5
    // console.log(hours);
    const handleSubmit = (event) => {
        event.preventDefault()
        setMissions(oldMissions => {
            return [...oldMissions, input]
        })
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setInput(oldInput => {
            const newData = { ...oldInput, [name]: value }
            console.log(newData);
            return newData
        })
    }
    return (
        <>
            <form className={styles.BottomFormContainer} onSubmit={handleSubmit}>


                <input type="text" name='taskName' placeholder='Add Task' onChange={handleChange} />

                <div>
                    <DatePicker selected={date} onChange={(date) => { setDate(date); setInput(oldInput => ({ ...oldInput, Date: date })); }} />
                </div>
                <button type='submit'>Add</button>
            </form>
        </>
    )
}
