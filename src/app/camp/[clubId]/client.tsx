'use client';

import { VStack } from '@/components/ui';
import s from './style.module.scss';
import Introduce from '@/components/camp/introduce';

export default function CampClient({ clubInfo }: { clubInfo: any }) {
    if (!clubInfo) {
        return (
            <VStack 
                className={s.container} 
                align="center" 
                justify="center" 
                direction='column' 
                gap={120}
            >
                <p>해당 캠프를 찾을 수 없습니다.</p>
            </VStack>
        );
    }
    
    return (
        <VStack 
            className={s.container} 
            align="center" 
            justify="start" 
            direction='column' 
            gap={120}
            fullWidth
        >
            <Introduce
                title={clubInfo.title}
                description={clubInfo.description}
                imageSrc={clubInfo.imageSrc}
                link={clubInfo.link}
                club={clubInfo.club}
            />
        </VStack>
    );
}
