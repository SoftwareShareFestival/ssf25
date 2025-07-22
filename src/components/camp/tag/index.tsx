import { VStack } from "@/components/ui";
import s from "./style.module.scss";

interface TagProps {
    name : string;
    color : string;
}

export default function Tag(props : TagProps) {
    const { name, color } = props;
    return (
        <VStack
            align="center"
            justify="center"
            style={{backgroundColor : color}}
            className={s.container}
        >
            <p className={s.text}>{name}</p>
        </VStack>
    );
}