import Image from 'next/image';
import s from './style.module.scss';
import { HStack } from '../hstack';
import { VStack } from '../vstack';
import Link from 'next/link';
import cn from 'classnames';
import { CampInfo } from '@/data/camp-data';

export default function Camp({ title, imageSrc, club }: CampInfo) {
	return (
		<Link href={`/camp/${club.slug}`} className={s.a}>
			<VStack align="start" gap={14}>
				<Image
					src={imageSrc}
					width={230}
					height={350}
					alt={`${title}`}
					className={s.image}
				/>
				<HStack gap={6}>
					<Image src={club.logo} width={19} height={19} alt={club.name} />
					<HStack gap={4} className={s.clubNameContainer}>
						<span style={{ color: club.color }} className={s.clubName}>
							{club.name}
						</span>
						<span
							style={{ color: club.color }}
							className={cn(s.dot, s.clubName)}
						>
							·
						</span>
						<span
							style={{ color: club.color }}
							className={cn(s.clubIntroduce, s.clubName)}
						>
							{club.catchphrase}
						</span>
					</HStack>
				</HStack>
			</VStack>
		</Link>
	);
}
