import Image from 'next/image';
import s from './style.module.scss';
import { HStack } from '../hstack';
import { VStack } from '../vstack';

interface Props {
	title: string;
	description: string;
	imageSrc: string;
}

export default function InformationCard({
	title,
	description,
	imageSrc,
}: Props) {
	return (
		<HStack align="center" justify="between" className={s.container}>
			<VStack gap={16}>
				<span className={s.title}>{title}</span>
				<span className={s.description}>{description}</span>
			</VStack>
			<Image
				src={imageSrc}
				width={240}
				height={150}
				alt={`${title} 관련 이미지`}
			/>
		</HStack>
	);
}
