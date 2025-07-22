import { HStack, VStack } from "@/components/ui";
import s from "./style.module.scss";
import Tag from "../tag";
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
            <VStack
                align="start"
                justify="start"
                gap={20}
            >
                <p className={s.clubName}>{name}<span className={s.clubWhat}>는 무슨 동아리인가요?</span></p>
                <HStack
                    align="center"
                    justify="start"
                    gap={22}
                >
                    {tags.map((tag) => (
                        <Tag
                            name={tag}
                            color={color}
                        />
                    ))}
                </HStack>
                <p className={s.clubDescription}>{description}</p>
            </VStack>
        </HStack>
    );
}