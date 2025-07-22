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
					alt={`${name}`}
					className={s.image}
				/>
				<VStack gap={10}>
					<HStack gap={6}>
						<Image src={club.imageSrc} width={19} height={19} alt={club.name} />
						<span style={{ color: club.color }} className={s.clubName}>
							{club.name} · {club.description}
						</span>
					</HStack>
				</VStack>
			</VStack>
		</Link>
	);
}
