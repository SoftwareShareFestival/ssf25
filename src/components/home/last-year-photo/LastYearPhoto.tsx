import { HStack, VStack } from '@/components/ui';
import s from './style.module.scss';
import { LastYearPhoto as LastYearPhotoList } from '@/data/last-year-photo';
import Image from 'next/image';

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
				{LastYearPhotoList.map((image, index) => (
					<Image
						key={index}
						src={image}
						width={300}
						height={170}
						alt="작년 SSF24 이미지 중"
					/>
				))}
			</HStack>
		</section>
	);
}
