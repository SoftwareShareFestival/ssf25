'use client';

import { HStack, VStack } from '@/components/ui';
import s from './style.module.scss';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface OtherClubProps {
	clubList: {
		imageSrc: string;
		club: {
			name: string;
		};
	}[];
}

export default function OtherClub({ clubList }: OtherClubProps) {
	const [showAll, setShowAll] = useState(false);
	return (
		<VStack align="start" justify="start" gap={24} className={s.container}>
			<p className={s.title}>다른 캠프도 확인해보세요</p>
			<div className={s.grid}>
				{clubList.slice(0, showAll ? clubList.length : 4).map((club) => (
					<a
						key={club.club.name}
						href={`/camp/${encodeURIComponent(club.club.name)}`}
						className={s.clubLink}
					>
						<img src={club.imageSrc} alt={club.club.name} className={s.img} />
					</a>
				))}
			</div>
			<HStack gap={20} fullWidth align="center" justify="center">
				<button
					className={s.showAllButton}
					onClick={() => setShowAll(!showAll)}
				>
					<HStack
						gap={22}
						align="center"
						justify="center"
						style={{ minWidth: '64px' }}
					>
						<span className={s.description}>
							{showAll ? '간략히 보기' : '모든 캠프 보기'}
						</span>
						<ArrowRight
							size={24}
							color="#FE5521"
							className={`${s.arrow} ${showAll ? s.rotated : ''}`}
						/>
					</HStack>
				</button>
			</HStack>
		</VStack>
	);
}
