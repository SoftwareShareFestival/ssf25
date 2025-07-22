'use client';
import { VStack } from '@/components/ui';
import s from './style.module.scss';

export default function Layer7() {
    return (
        <VStack 
            className={s.container} 
            align="center" 
            justify="start" 
            direction='column' 
            gap={120}
        >
            <h1>Layer7</h1>
        </VStack>
    );
}