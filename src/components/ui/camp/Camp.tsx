import Image from 'next/image';
import s from './style.module.scss';
import { HStack } from '../hstack';
import { VStack } from '../vstack';
import { Camp as CampType } from '@/data/camp-list';
import Link from 'next/link';

export default function Camp({ club, thumbnail, name }: CampType) {
	return (
		<Link href={`/camp/${club.name.toLowerCase()}`} className={s.a}>
			<VStack align="start" gap={14}>
				<Image
					src={thumbnail}
					width={230}
					height={350}
					alt={`${club.name}의 캠프 표지`}
					className={s.image}
				/>
				<VStack gap={10}>
					<span className={s.title}>{name}</span>
					<HStack gap={6}>
						<Image src={club.imageSrc} width={19} height={19} alt={club.name} />
						<span style={{ color: club.color }} className={s.clubName}>
							{club.name}
						</span>
					</HStack>
				</VStack>
			</VStack>
		</Link>
	);
}
