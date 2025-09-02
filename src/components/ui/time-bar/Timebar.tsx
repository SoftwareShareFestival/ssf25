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
            <p>지원 종료까지 <span className={s.bold}>{timeLeft}</span> 남음</p>
        </div>
    );
}