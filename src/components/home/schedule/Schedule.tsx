'use client';

import { Title, VStack } from '@/components/ui';
import s from './style.module.scss';
import cn from 'classnames';
import { HStack } from '@/components/ui/hstack';
import Image from 'next/image';
import Link from 'next/link';

export default function Schedule() {
	return (
		<section className={s.container}>
			<Title
				title="캠프 일정"
				description="접수를 통해 참가자를 선발 후 캠프를 진행합니다!"
			/>
			<HStack className={s.visualize} align="center">
				<div className={s.circle}>
					<span>
						지원 시작
						<br />
						09.01
					</span>
				</div>
				<div className={s.line} />
				<div className={cn(s.circle, s.circleFill)}>
					<span>
						지원 마감
						<br />
						09.07
					</span>
				</div>
				<div className={cn(s.line, s.centerLine)} />
				<div className={cn(s.circle, s.circleFill)}>
					<span>
						참가자 발표
						<br />
						09.09
					</span>
				</div>
				<div className={s.line} />
				<div className={s.circle}>
					<span>
						캠프 시작
						<br />
						09.13
					</span>
				</div>
			</HStack>
			{/* <Link
				href="https://calendar.google.com/calendar/u/0?cid=Njc3ODU2NTY2OWIxMDdiN2E4Mjg4ZTUzZTRiMDNlYzU4NDAyMjc3NTMzN2M4MzVhZDA1Nzk5NzQwYzFiNzdkMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
				target="_blank"
			>
				<Image
					src={'/calendar.svg'}
					width={30}
					height={30}
					alt="눌러서 구글 캘린더에 일정 등록하기"
				/>
			</Link> */}
		</section>
	);
}
