import { HStack, VStack } from '@/components/ui';
import s from './style.module.scss';
import { LastYearPhoto as LastYearPhotoList } from '@/data/last-year-photo';
import Image from 'next/image';
import cn from 'classnames';

export default function LastYearPhoto() {
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
							<VStack>
								<HStack gap={4} className={cn(s.arrow, s.leftArrow)}>
									<Image
										src={'/arrow.png'}
										width={60}
										height={60}
										alt="그냥 화살표 ㅋ"
									/>
									<span>2024 SSF 사진</span>
								</HStack>
								<Image
									key={index}
									src={image}
									width={300}
									height={170}
									alt="작년 SSF24 이미지 중"
									className={cn(s.photo, s.firstPhoto)}
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
						/>
					);
				})}
				<VStack gap={4} className={cn(s.arrow, s.rightArrow)}>
					<Image
						src={'/arrow.png'}
						width={60}
						height={60}
						alt="그냥 화살표 ㅋ"
					/>
					<span>2024 SSF 사진</span>
				</VStack>
			</HStack>
		</section>
	);
}
