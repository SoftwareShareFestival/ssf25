import { HStack } from '@/components/ui/hstack';
import Image from 'next/image';

import s from './style.module.scss';
import { FilePen } from 'lucide-react';
import cn from 'classnames';
import Link from 'next/link';
import { VStack } from '@/components/ui';

export default function Hero() {
	return (
		<div className={s.container}>
			<VStack gap={12} align='center'>
				<Image
					src={'/sunrin_white.svg'}
					width={180}
					height={24}
					alt="선린인터넷고등학교 하얀색 로고"
				/>
				<h1 className={s.title}>
					소프트웨어 도약의 시작
					<br />
					SSF25에 오신것을 환영합니다
				</h1>
				<h2 className={s.description}>
					SSF는 소프트웨어에 대한 경험을 나누고,
					<br />
					다양한 소프트웨어를 직접 체험해볼 수 있는 행사입니다
				</h2>
			</VStack>
			<HStack gap={18}>
				<Link href={'as'} className={s.submit}>
					<FilePen size={22} />
					<span>SSF 지원하기</span>
				</Link>
				<Link href={'sa'} className={cn(s.submit, s.instagram)}>
					<Image
						src={'/instagram.svg'}
						width={22}
						height={22}
						alt="인스타그램 아이콘"
					/>
					<span>인스타그램</span>
				</Link>
			</HStack>
		</div>
	);
}
