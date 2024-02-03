import React, { useEffect } from 'react'
import { useState } from 'react'
import MissionInput from '../MissionInput'
import styles from './style.module.css'
import axios from 'axios'
export default function MissionTable() {

    const [missions, setMissions] = useState([])



    const calculateHoursLeft = (CurrentDate, deadLine) => {

        let hours = Math.abs(deadLine - CurrentDate) / 36e5;
        let roundedHours = `${hours.toFixed(1)} Hours`
        if (hours < 2) roundedHours.replace('hours', 'hour')
        return roundedHours
    }

    const handleOnclickDelete = async (missionId) => {
        await axios.delete(`http://localhost:2500/mission/${missionId}`)
        if (missions.length === 1) return setMissions([])

        fetchDataFromServer()
    }

    const fetchDataFromServer = async () => {
        const res = await axios.get('http://localhost:2500/mission')
        setMissions(res.data)
    }


    const handleTickChange = async (id, index) => {
        const updatedMissions = [...missions]
        updatedMissions[index] = { ...updatedMissions[index], isDone: !updatedMissions[index].isDone }
        setMissions(updatedMissions)
        try {
            await axios.put(`http://localhost:2500/mission/${id}`)

        } catch (error) {
            console.log("failed to update mission status", error);
            setMissions(missions)
        }

    }

    useEffect(() => {
        fetchDataFromServer()

    }, [])

    return (
        <>
            <div className={styles.topTitle}>What do you have to do?</div>
            <div className={styles.missionsContainer}>
                {missions.map((mission, index) => {
                    const checkboxId = `missionCheckbox_${index}`;
                    const missionClassName = mission.isDone ? styles.done : ''
                    return <div key={index} className={`${styles.mission} ${missionClassName}`}>
                        <span>
                            <input type="checkbox"
                                id={checkboxId}
                                checked={mission.isDone}
                                className={styles.missionCheckbox}
                                onChange={() => handleTickChange(mission._id, index)}
                            />

                        </span>
                        <span>{mission.taskName}</span>
                        <span>{calculateHoursLeft(new Date(), new Date(mission.deadLine))}</span>
                        <span><button className={styles.missionButton} onClick={() => handleOnclickDelete(mission._id)}>Delete</button></span>
                    </div>
                })}
            </div>
            <MissionInput fetchDataFromServer={fetchDataFromServer} setMissions={setMissions} />
        </>
    )
}
