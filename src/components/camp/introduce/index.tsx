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
        </VStack>
    );
}