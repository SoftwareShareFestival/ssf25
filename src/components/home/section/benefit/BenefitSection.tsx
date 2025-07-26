import { InformationCard, VStack } from "@/components/ui";

import { benefitData } from "@/data/benefits";

export default function BenefitSection() {
    return (
        <VStack fullWidth align={'center'} gap={64}>
            {benefitData.map((card, idx) => (
                <InformationCard
                    key={idx}
                    {...card}
                />
            ))}
        </VStack>
    )
}