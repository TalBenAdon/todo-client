import React from 'react'
import styles from './style.module.css'
import MissionTable from '../MissionsLayout/MissionTable'
export default function UserLayout() {
    return (
        <div className={styles.userLayoutContainer}>

            <div className={styles.topTitle}>What do you have to do?</div>
            <MissionTable />
        </div>

    )
}
