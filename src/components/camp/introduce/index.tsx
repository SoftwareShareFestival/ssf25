'use client';

import { HStack, VStack } from '@/components/ui';
import { ArrowLeft } from 'lucide-react';
import s from './style.module.scss';
import { useRouter } from 'next/navigation';
import Link from '../link';

interface IntroduceProps {
	title: string;
	description: string;
	imageSrc: string;
	color: string;
	link: {
		share: string;
		reels: string;
		cardnews: string;
	};
	club: {
		name: string;
		description: string;
		logo: string;
	};
}

export default function Introduce(props: IntroduceProps) {
	const router = useRouter();
	const { title, description, imageSrc, color, link, club } = props;
	return (
		<VStack
			align="start"
			justify="start"
			direction="column"
			gap={50}
			className={s.container}
		>
			<HStack
				gap={12}
				align="center"
				justify="start"
				className={s.headerSection}
			>
				<button 
					onClick={() => router.back()} 
					className={s.backButton}
					aria-label="뒤로 가기"
				>
					<ArrowLeft size={32} className={s.backIcon} />
				</button>
				<img
					src={club.logo}
					alt={club.name}
					width={24}
					height={24}
					className={s.clubLogo}
				/>
				<span className={s.clubName} style={{ color }}>{club.name}</span>
			</HStack>
			<VStack gap={18} fullWidth align="start" justify="start">
				<img src={imageSrc} alt={title} className={s.clubImage} />
				<VStack
					gap={18}
					fullWidth
					align="start"
					justify="start"
					className={s.clubIntroSection}
				>
					<p className={s.clubTitle}>{title}</p>
					<div className={s.divider} />
					<p className={s.clubDescription}>{description}</p>
				</VStack>
			</VStack>
			<div className={s.linkButtons}>
				<Link state="share" link={link.share} />
				<Link state="reels" link={link.reels} />
				<Link state="cardnews" link={link.cardnews} />
			</div>
		</VStack>
	);
}
