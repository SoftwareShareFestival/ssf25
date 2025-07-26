import { InformationCard, VStack } from "@/components/ui";

import s from './style.module.scss'
import { benefitData } from "@/data/benefits";

export default function BenefitSection() {
    return (
        <VStack fullWidth align={'center'} gap={64} className={s.container}>
            {benefitData.map((card, idx) => (
                <InformationCard
                    key={idx}
                    {...card}
                />
            ))}
        </VStack>
    )
}