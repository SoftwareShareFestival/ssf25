import { HStack, VStack } from "@/components/ui";
import { ArrowLeft } from "lucide-react";
import s from "./style.module.scss";

interface IntroduceProps {
    title : string;
    description : string;
    imageSrc : string;
    link : {
        share : string;
        reels : string;
        cardnews : string;
    }
    club : {
        name : string;
        description : string;
        logo : string;
    }
}

export default function Introduce(props : IntroduceProps) {
    const { title, description, imageSrc, link, club } = props;
    return (
        <VStack
            align="start"
            justify="start"
            direction='column'
            gap={50}
            className={s.container}
        >
            <HStack
                gap={12}
                align="center"
                justify="start"
            >
                <ArrowLeft size={32} />
                <>
                    <img src={club.logo} alt={club.name} width={24} height={24} />
                    <span className={s.clubName}>{club.name}</span>
                </>
            </HStack>
            <VStack
                gap={18}
                fullWidth
                align="start"
                justify="start"
            >
                <img src={imageSrc} alt={title} height={350} className={s.clubImage} />
                <VStack
                    gap={18}
                    fullWidth
                    align="start"
                    justify="start"
                    className={s.clubIntroSection}
                >
                    <p className={s.clubTitle}>{title}</p>
                    <div className={s.divider}/>
                    <p className={s.clubDescription}>{description}</p>
                </VStack>
            </VStack>
            <HStack
                gap={20}
                fullWidth
                align="center"
                justify="end"
            >
                <p>추가예정~</p>
            </HStack>
        </VStack>
    );
}