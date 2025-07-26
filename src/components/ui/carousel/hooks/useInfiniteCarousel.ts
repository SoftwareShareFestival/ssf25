'use client'

import { useEffect, useRef, useState, useCallback } from 'react';

interface UseInfiniteCarouselProps {
	itemsLength: number;
	speed?: number;
	gap?: number;
}

export const useInfiniteCarousel = ({
	itemsLength,
	speed = 1,
	gap = 0,
}: UseInfiniteCarouselProps) => {
	const trackRef = useRef<HTMLDivElement>(null);
	const [translateX, setTranslateX] = useState(0);
	const animationFrameRef = useRef<number>(0);
	const [itemWidth, setItemWidth] = useState(0);

	// 아이템 너비 계산
	const calculateItemWidth = useCallback(() => {
		if (trackRef.current && trackRef.current.children.length > 0) {
			const firstChild = trackRef.current.children[0] as HTMLElement;
			const itemRect = firstChild.getBoundingClientRect();
			setItemWidth(itemRect.width + gap);
		}
	}, [gap]);

	// 애니메이션 루프
	const animateScroll = useCallback(() => {
		if (!trackRef.current || itemWidth === 0) return;

		setTranslateX((prevTranslateX) => {
			let newTranslateX = prevTranslateX + speed;
			const originalSetWidth = itemWidth * itemsLength;

			if (newTranslateX >= originalSetWidth) {
				newTranslateX = 0;
			}

			return newTranslateX;
		});

		animationFrameRef.current = requestAnimationFrame(animateScroll);
	}, [itemWidth, itemsLength, speed]);

	// 아이템 너비 계산 (초기 + 리사이즈)
	useEffect(() => {
		calculateItemWidth();

		const handleResize = () => calculateItemWidth();
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, [calculateItemWidth]);

	// 애니메이션 시작/정지
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

	// Transform 적용
	useEffect(() => {
		if (trackRef.current) {
			trackRef.current.style.transform = `translateX(-${translateX}px)`;
		}
	}, [translateX]);

	return {
		trackRef,
	};
};
