import React from 'react'
import styles from './loading.module.css'
function LoadingCat() {
    return (
        <div className={`${styles.cat}`}>
            <div className={`${styles.catbody} dark:before:bg-[#121212]`}></div>
            <div
                className={`${styles.animationmask} dark:bg-[#121212] dark:before:bg-[#121212] dark:after:bg-[#121212]`}
            ></div>
            <div className={`${styles.head} dark:bg-[#121212]`}>
                <div className={styles.face}></div>
                <div className={styles.ear}></div>
                <div className={styles.hand}></div>
                <div className={styles.eye}></div>
                <div className={styles.eyelight}></div>
                <div className={styles.mouth}></div>
                <div className={`${styles.beard} ${styles.left}`}></div>
                <div className={`${styles.beard} ${styles.right}`}></div>
            </div>
            <div className={`${styles.foot} dark:bg-[#121212]`}>
                <div className={styles.belly}></div>
                <div className={styles.leg}></div>
                <div className={styles.tail}></div>
            </div>
        </div>
    );
}

export default LoadingCat