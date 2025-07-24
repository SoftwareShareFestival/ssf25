'use client';

import { HStack, VStack } from '@/components/ui';
import s from './style.module.scss';
import { LastYearPhoto as LastYearPhotoList } from '@/data/last-year-photo';
import Image from 'next/image';
import cn from 'classnames';
import { useEffect, useState, useCallback } from 'react';

export default function LastYearPhoto() {
	const [isMobile, setIsMobile] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	const [imgSize, setImgSize] = useState<{width: number, height: number}>({width: 0, height: 0});

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);

		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	const handleImageClick = useCallback((image: string) => {
		const img = new window.Image();
		img.src = image;
		img.onload = () => {
			let maxW = window.innerWidth * (isMobile ? 0.98 : 0.9);
			let maxH = window.innerHeight * (isMobile ? 0.7 : 0.8);
			let width = img.width;
			let height = img.height;
			const ratio = Math.min(maxW / width, maxH / height, 1);
			setImgSize({ width: width * ratio, height: height * ratio });
			setSelectedImage(image);
			setModalOpen(true);
		};
	}, [isMobile]);

	const handleCloseModal = useCallback(() => {
		setModalOpen(false);
		setSelectedImage(null);
	}, []);

	useEffect(() => {
		if (!modalOpen) return;
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') handleCloseModal();
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [modalOpen, handleCloseModal]);

	return (
		<section className={s.container}>
			<VStack gap={22} align="center">
				<h3 className={s.title}>재학생 선배와 함께하는 소프트웨어 캠프</h3>
				<h4 className={s.description}>
					준비부터 진행까지, 재학생이 직접 만드는 선린인터넷고등학교의 대표
					행사입니다.
				</h4>
			</VStack>
			<HStack className={s.list}>
				{LastYearPhotoList.map((image, index) => {
					if (index === 0) {
						return (
							<VStack key={index}>
								{!isMobile && (
									<HStack gap={4} className={cn(s.arrow, s.leftArrow)}>
										<Image
											src={'/arrow.png'}
											width={60}
											height={60}
											alt="그냥 화살표 ㅋ"
										/>
										<span>2024 SSF 사진</span>
									</HStack>
								)}
								<Image
									key={index}
									src={image}
									width={300}
									height={170}
									alt="작년 SSF24 이미지 중"
									className={cn(s.photo, s.firstPhoto)}
									onClick={() => handleImageClick(image)}
									style={{ cursor: 'pointer' }}
								/>
							</VStack>
					);
					}

					return (
						<Image
							key={index}
							src={image}
							width={300}
							height={170}
							alt="작년 SSF24 이미지 중"
							className={s.photo}
							onClick={() => handleImageClick(image)}
							style={{ cursor: 'pointer' }}
						/>
					);
				})}
				{!isMobile && (
					<VStack gap={4} className={cn(s.arrow, s.rightArrow)}>
						<Image
							src={'/arrow.png'}
							width={60}
							height={60}
							alt="그냥 화살표 ㅋ"
						/>
						<span>2024 SSF 사진</span>
					</VStack>
				)}
			</HStack>

			{modalOpen && selectedImage && (
				<div className={s.modalOverlay} onClick={handleCloseModal}>
					<div className={s.modalContent} onClick={e => e.stopPropagation()}>
						<div className={s.modalImageWrapper}>
							<Image
								src={selectedImage}
								alt="확대된 작년 SSF24 이미지"
								width={0}
								height={0}
								style={isMobile ? {
									width: '90vw',
									height: '26vh',
									objectFit: 'cover',
									borderRadius: 16
								} : {
									width: '600px',
									height: '450px',
									maxWidth: '90vw',
									maxHeight: '80vh',
									objectFit: 'cover',
									borderRadius: 16
								}}
								sizes={isMobile ? '90vw' : '600px'}
								priority
							/>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}
