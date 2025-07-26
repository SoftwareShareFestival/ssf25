'use client';

import React from 'react';
import s from './style.module.scss';
import { useInfiniteCarousel } from './hooks/useInfiniteCarousel';

interface CarouselProps<T> {
	items: T[];
	speed?: number;
	gap?: number;
	renderItem: (item: T, index: number) => React.ReactNode;
	className?: string;
}

export default function Carousel<T>({
	items,
	speed = 1,
	gap = 0,
	renderItem,
	className,
}: CarouselProps<T>) {
	const { trackRef } = useInfiniteCarousel({
		itemsLength: items.length,
		speed,
		gap,
	});

	// 아이템을 3번 복제하여 무한 스크롤 구현
	const triplicatedItems = [...items, ...items, ...items];

	return (
		<div className={`${s.carouselContainer} ${className || ''}`}>
			<div className={s.carouselTrack} ref={trackRef}>
				{triplicatedItems.map((item, index) => (
					<div
						key={`carousel-item-${Math.floor(index / items.length)}-${
							index % items.length
						}`}
						className={s.carouselItem}
					>
						{renderItem(item, index)}
					</div>
				))}
			</div>
		</div>
	);
}
