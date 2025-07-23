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
			<VStack gap={12} align="center">
				<Image
					src={'/sunrin_white.svg'}
					width={180}
					height={24}
					style={{ marginBottom: 24 }}
					alt="선린인터넷고등학교 하얀색 로고"
				/>
				<Image
					src={'/orange_logo.svg'}
					width={405}
					height={145}
					alt="선린인터넷고등학교 하얀색 로고"
					className={s.logo}
				/>
				<h1 className={s.title}>
					2025 Software Share Festival
				</h1>
				<h2 className={s.description}>
					소프트웨어 도약의 시작 SSF25에 오신것을 환영합니다
				</h2>
			</VStack>
			<HStack gap={18} className={s.linkContainer}>
				<Link href={'https://lu.ma/92qeg481'} className={s.submit} target='_blank'>
					<FilePen size={22} />
					<span>SSF 지원하기</span>
				</Link>
				<Link
					href={'https://www.instagram.com/sunrin_ssf/'}
					target='_blank'
					className={cn(s.submit, s.instagram)}
				>
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
