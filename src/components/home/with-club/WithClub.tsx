'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';

import s from './style.module.scss';

interface CarouselItem {
	id: number;
	src: string;
}

interface CarouselProps {
	items: CarouselItem[];
	speed?: number;
}

export default function WithClub({ items, speed = 1 }: CarouselProps) {
	const trackRef = useRef<HTMLDivElement>(null);
	const [translateX, setTranslateX] = useState(0);
	const animationFrameRef = useRef<number>(0);
	const [itemWidth, setItemWidth] = useState(0);

	const triplicatedItems = [...items, ...items, ...items];

	useEffect(() => {
		if (trackRef.current && trackRef.current.children.length > 0) {
			const firstChild = trackRef.current.children[0] as HTMLElement;
			const itemRect = firstChild.getBoundingClientRect();
			const computedStyle = getComputedStyle(firstChild);

			const gap = 69;
			setItemWidth(itemRect.width + gap);
		}
	}, [items]);

	const animateScroll = useCallback(() => {
		if (!trackRef.current || itemWidth === 0) return;

		setTranslateX((prevTranslateX) => {
			let newTranslateX = prevTranslateX + speed;

			const originalSetWidth = itemWidth * items.length;

			if (newTranslateX >= originalSetWidth) {
				newTranslateX = 0;
			}

			return newTranslateX;
		});

		animationFrameRef.current = requestAnimationFrame(animateScroll);
	}, [itemWidth, items.length, speed]);

	useEffect(() => {
		if (itemWidth > 0) {
			animationFrameRef.current = requestAnimationFrame(animateScroll);
		}

		return () => {
			if (animationFrameRef.current) {
				cancelAnimationFrame(animationFrameRef.current);
			}
		};
	}, [animateScroll, itemWidth]);

	useEffect(() => {
		if (trackRef.current) {
			trackRef.current.style.transform = `translateX(-${translateX}px)`;
		}
	}, [translateX]);

	return (
		<section className={s.container}>
			<div className={s.carouselContainer}>
				<span className={s.title}>5+개의 선린인고 전공 동아리와 함께해요</span>
				<div className={s.carouselTrack} ref={trackRef}>
					{triplicatedItems.map((item, index) => (
						<div
							key={`${item.id}-${Math.floor(index / items.length)}-${
								index % items.length
							}`}
							className={s.carouselItem}
						>
							<Image
								src={item.src}
								width={45}
								height={45}
								alt={'동아리 이미지'}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
