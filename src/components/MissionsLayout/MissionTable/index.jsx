import React, { useEffect } from 'react'
import { useState } from 'react'
import MissionInput from '../MissionInput'
import styles from './style.module.css'
import axios from 'axios'
export default function MissionTable() {

    const [missions, setMissions] = useState([])

    // useEffect(() => {
    //     axios.get('/')

    // }, [])


    return (
        <>
            <div className={styles.missionsContainer}>
                {missions.map(mission => {
                    return <div className={styles.mission}>
                        <span><input type="checkbox" /></span>
                        <span>{mission.taskName}</span>
                        <span>{mission.hoursLeft}</span>
                        <span><button>Delete</button></span>
                    </div>
                })}
            </div>
            <MissionInput setMissions={setMissions} />
        </>
    )
}
