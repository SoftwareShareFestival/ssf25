import { HStack } from "@/components/ui";
import s from "./style.module.scss";
import { ArrowUpLeft } from "lucide-react";

interface ClubLinkProps {
    state : 'website' | 'instagram';
    link : string;
    color : string;
}

export default function ClubLink(props: ClubLinkProps) {
    const { state, link, color } = props;
    
    const handleClick = () => {
        if (link) {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
            <HStack
                align="center"
                justify="center"
                gap={10}
                style={{backgroundColor : color}}
                className={s.container}
            >
                <ArrowUpLeft size={24} color="#fff"/>
                {state === 'website' ? (
                    <span className={s.text}>동아리 웹사이트</span>
                ) : (
                    <span className={s.text}>동아리 인스타그램</span>
                )}
            </HStack>
        </div>
    )
}