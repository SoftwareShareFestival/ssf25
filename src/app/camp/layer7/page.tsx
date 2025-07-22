'use client';
import { VStack } from '@/components/ui';
import s from './style.module.scss';
import { campData } from '@/data/camp-data';
import Introduce from '@/components/camp/introduce';

export default function Layer7() {

    const clubName : string = 'Layer7';
    
    return (
        <VStack 
            className={s.container} 
            align="center" 
            justify="start" 
            direction='column' 
            gap={120}
        >
            <Introduce
                title={campData[0].title}
                description={campData[0].description}
                imageSrc={campData[0].imageSrc}
                link={campData[0].link}
                club={campData[0].club}
            />
        </VStack>
    );
}