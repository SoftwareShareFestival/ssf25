'use client';

import React from 'react';
import Image from 'next/image';
import { Carousel } from '@/components/ui';
import { CarouselItem, carouselItems } from '@/data/carousel';
import s from './style.module.scss';

export default function WithClubSection() {
	const renderCarouselItem = (item: CarouselItem) => (
		<Image
			src={item.src}
			width={45}
			height={45}
			alt="동아리 이미지"
			className={s.clubImage}
		/>
	);

	return (
		<section className={s.container}>
			<div className={s.content}>
				<span className={s.title}>
					8개의 선린인터넷고등학교 전공 동아리와 함께해요
				</span>
				<Carousel
					items={carouselItems}
					speed={1}
					gap={69}
					renderItem={renderCarouselItem}
					className={s.carousel}
				/>
			</div>
		</section>
	);
}
