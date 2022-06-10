import React from 'react'
import styles from './loading.module.css'
function LoadingCat() {
    return (
        <div className={styles.cat}>
            <div className={styles.catbody}></div>
            <div className={styles.animationmask}></div>
            <div className={styles.head}>
                <div className={styles.face}></div>
                <div className={styles.ear}></div>
                <div className={styles.hand}></div>
                <div className={styles.eye}></div>
                <div className={styles.eyelight}></div>
                <div className={styles.mouth}></div>
                <div className={`${styles.beard} ${styles.left}`}></div>
                <div className={`${styles.beard} ${styles.right}`}></div>
            </div>
            <div className={styles.foot}>
                <div className={styles.belly}></div>
                <div className={styles.leg}></div>
                <div className={styles.tail}></div>
            </div>
        </div>
    );
}

export default LoadingCat