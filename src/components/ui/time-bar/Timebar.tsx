'use client'

import { useEffect, useState } from 'react';
import s from './style.module.scss';
import { leftTime } from './leftTime';

export default function Timebar() {
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        setTimeLeft(leftTime());
        
        const timer = setInterval(() => {
            setTimeLeft(leftTime());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className={s.time}>
            {timeLeft === '00:00:00' ? (
                <p className={s.bold}>각 캠프별 합격자가 공개되었습니다.</p>
            ) : (
                <p>참가 신청 마감까지 <span className={s.bold}>{timeLeft}</span> 남음</p>
            )}
        </div>
    );
}