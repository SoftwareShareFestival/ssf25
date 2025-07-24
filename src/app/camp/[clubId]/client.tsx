'use client';

import { VStack } from '@/components/ui';
import s from './style.module.scss';
import Introduce from '@/components/camp/introduce';
import Club from '@/components/camp/club';
import OtherClub from '@/components/camp/otherClub';

export default function CampClient({
	clubInfo,
	allClubList,
}: {
	clubInfo: any;
	allClubList: any;
}) {
	if (!clubInfo) {
		return (
			<VStack
				className={s.container}
				align="center"
				justify="center"
				direction="column"
				gap={120}
			>
				<p>해당 캠프를 찾을 수 없습니다.</p>
			</VStack>
		);
	}

	return (
		<VStack
			className={s.container}
			align="center"
			justify="start"
			direction="column"
			style={
				{
					'--mobile-gap': '60px',
					'--tablet-gap': '90px',
					'--desktop-gap': '120px',
				} as React.CSSProperties
			}
		>
			<Introduce
				title={clubInfo.title}
				description={clubInfo.description}
				imageSrc={clubInfo.imageSrc}
				link={clubInfo.link}
				club={clubInfo.club}
			/>
			<Club
				name={clubInfo.club.name}
				description={clubInfo.club.description}
				logo={clubInfo.club.logo}
				tags={clubInfo.club.tags}
				color={clubInfo.club.color}
				link={clubInfo.club.link}
			/>
			<OtherClub
				clubList={allClubList.filter(
					(club: any) => club.club.name !== clubInfo.club.name
				)}
			/>
		</VStack>
	);
}
