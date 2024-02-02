import React from 'react'
import styles from './style.module.css'
import MissionTable from '../MissionsLayout/MissionTable'
export default function UserLayout() {
    return (
        <div className={styles.userLayoutContainer}>


            <MissionTable />
        </div>

    )
}
