import Image from 'next/image';
import s from './style.module.scss';
import { HStack, VStack } from '..';

export default function Footer() {
	return (
		<footer className={s.footer}>
			<HStack gap={32} justify="between" className={s.container}>
				<VStack gap={22}>
					<Image
						src={'/sunrin_full_black.svg'}
						width={222}
						height={32}
						alt="선린인터넷고등학교 로고"
					/>

					<span className={s.additionInfo}>
						서울특별시 용산구 원효로97길 33-4 (청파동3가)
						<br />
						Tel. 02-717-4616 | Fax. 02-704-0960
						<br />© 2025. 선린인터넷고등학교 All Rights Reserved.
					</span>
				</VStack>
				<VStack gap={32}>
					<VStack gap={8}>
						<span className={s.sectionName}>후원</span>
						<HStack gap={22}>
							<Image
								src={'/yongsan-gu.png'}
								width={94}
								height={24}
								alt="선린인터넷고등학교 로고"
							/>
							<Image
								src={'/cyber_guardians.png'}
								width={122}
								height={24}
								alt="선린인터넷고등학교 로고"
							/>
						</HStack>
					</VStack>
					<HStack gap={32}>
						<VStack gap={8}>
							<span className={s.sectionName}>총괄</span>
							<span>이동건</span>
						</VStack>
						<VStack gap={8}>
							<span className={s.sectionName}>디자인팀</span>
							<HStack gap={12}>
								<span>조예서</span>
								<span>박은우</span>
								<span>김래현</span>
							</HStack>
						</VStack>
						<VStack gap={8}>
							<span className={s.sectionName}>개발팀</span>
							<HStack gap={12}>
								<span>조성주</span>
								<span>신유준</span>
							</HStack>
						</VStack>
					</HStack>
				</VStack>
			</HStack>
		</footer>
	);
}
