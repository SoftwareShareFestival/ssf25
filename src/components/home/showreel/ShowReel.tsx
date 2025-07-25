'use client'

import YouTube from 'react-youtube';
import s from './style.module.scss';

export default function ShowReel() {
    const opts = {
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <section className={s.container}>
            <div className={s.videoWrapper}>
                <YouTube videoId="u1qovPmoABE" opts={opts} />
            </div>
        </section>
    );
}