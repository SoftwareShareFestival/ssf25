'use client';

import { HStack, VStack } from '@/components/ui';
import s from './style.module.scss';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface OtherClubProps {
	clubList: {
		imageSrc: string;
		club: {
			name: string;
			slug: string;
		};
	}[];
}

export default function OtherClub({ clubList }: OtherClubProps) {
	const [shuffledClubList, setShuffledClubList] = useState(clubList);

	useEffect(() => {
		const arr = [...clubList];
		for (let i = arr.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
		setShuffledClubList(arr);
	}, [clubList]);

	return (
		<VStack align="start" justify="start" gap={24} className={s.container}>
			<p className={s.title}>다른 캠프도 확인해보세요</p>
			<div className={s.grid}>
				{shuffledClubList.map((club) => (
					<a
						key={club.club.slug}
						href={`/camp/${club.club.slug}`}
						className={s.clubLink}
					>
						<div
							className={s.img}
							style={{
								backgroundImage: `url(${club.imageSrc})`,
							}}
							title={club.club.name}
						/>
					</a>
				))}
			</div>
		</VStack>
	);
}
