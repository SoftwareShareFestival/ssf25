import { HStack, VStack } from "@/components/ui";
import s from './style.module.scss'

export default function Introduce() {
    return (
        <HStack className={s.container} align="center" justify="between" >
            <VStack
                gap={22}
                justify="start"
                align="start"
            >
                <p className={s.title}>소프트웨어 나눔 축제란 무엇일까요?</p>
                <p className={s.description}>선린인터넷고등학교 소프트웨어 나눔 축제, SSF는 2018년부터 개최된 
선린인터넷고등학교의 최대 축제 중 하나입니다. 
먼저 소프트웨어를 경험한 사람들이 미래 세대에게 
소프트웨어에 대한 경험을 나누고, 다양한 소프트웨어를 직접 만들고 
체험해볼 수 있는 행사입니다.</p>
            </VStack>
        </HStack>
    )   
}