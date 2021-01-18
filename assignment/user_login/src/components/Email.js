import React from 'react';
import styles from "../scss/Email.module.scss";

export default ({ email, onChange }) => {

    return (
        <div className={styles['container']}>
            <input type="text" className={styles['input']} name="email" value={email} onChange={onChange} placeholder="이메일" />
            <button className={styles['check-btn']}>
                <div className={styles['text']}>중복확인</div>
            </button>
        </div>
    )
}