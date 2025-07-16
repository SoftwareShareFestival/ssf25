'use client';

import { Camp, HStack, VStack } from '@/components/ui';
import s from './style.module.scss';
import { SSFCampList } from '@/data/camp-list';

export default function CampList() {
	return (
		<section className={s.container}>
			<VStack gap={22} align="center">
				<h3 className={s.title}>캠프 소개</h3>
				<h4 className={s.description}>
					정보보호과 소프트웨어과가 준비한 8개의 캠프를 확인해보세요!
				</h4>
			</VStack>

			<HStack wrap="wrap" justify="between" className={s.list}>
				{SSFCampList.map((camp, index) => (
					<Camp key={index} {...camp} />
				))}
			</HStack>
		</section>
	);
}
