import { HStack, VStack } from "@/components/ui";
import s from "./style.module.scss";

interface ClubProps {
    name : string;
    description : string;
    logo : string;
    tags : string[];
    color : string;
    link : {
            website : string;
            instagram : string;
        }
}

export default function Club( props : ClubProps) {
    const { name, description, logo, tags, color, link } = props;
    return (
        <HStack
            gap={65}
            align="start"
            justify="start"
            className={s.container}
        >
            <img src={logo} alt={name} width={325} height={325} />
            <VStack>
                <>
                    <span className={s.clubName}>{name}</span>
                    <span className={s.clubWhat}>는 무슨 동아리인가요?</span>
                </>
            </VStack>
        </HStack>
    );
}