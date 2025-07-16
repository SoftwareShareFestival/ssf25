'use client';

import { useState } from 'react';
import { Camp, HStack, VStack } from '@/components/ui';
import s from './style.module.scss';
import { SSFCampList } from '@/data/camp-list';
import cn from 'classnames';
import { paperlogy } from '@/utils/font';

type FilterType = 'all' | 'software' | 'security';

interface FilterButton {
	key: FilterType;
	label: string;
}

const filterButtons: FilterButton[] = [
	{ key: 'all', label: '전체' },
	{ key: 'security', label: '정보보호과' },
	{ key: 'software', label: '소프트웨어과' },
];

export default function CampList() {
	const [activeFilter, setActiveFilter] = useState<FilterType>('all');

	const filteredCamps = SSFCampList.filter((camp) => {
		if (activeFilter === 'all') return true;
		return camp.department === activeFilter;
	});

	return (
		<section className={s.container}>
			<VStack gap={22} align="center">
				<h3 className={s.title}>캠프 소개</h3>
				<h4 className={s.description}>
					정보보호과 소프트웨어과가 준비한 8개의 캠프를 확인해보세요!
				</h4>
			</VStack>

			<HStack gap={12} justify="center" className={s.filterContainer}>
				{filterButtons.map(({ key, label }) => (
					<button
						key={key}
						className={cn(s.filterButton, {
							[s.active]: activeFilter === key,
						})}
						onClick={() => setActiveFilter(key)}
					>
						<span className={paperlogy.className}>{label}</span>
					</button>
				))}
			</HStack>

			<HStack wrap="wrap" justify="between" className={s.list}>
				{filteredCamps.map((camp, index) => (
					<Camp key={index} {...camp} />
				))}
			</HStack>

			{filteredCamps.length === 0 && (
				<div className={s.emptyState}>
					<p>해당 카테고리에는 캠프가 없습니다.</p>
				</div>
			)}
		</section>
	);
}
