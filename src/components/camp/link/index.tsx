import { HStack } from '@/components/ui';
import s from './style.module.scss';
import { ArrowUpLeft, Share, Share2 } from 'lucide-react';

interface LinkProps {
	state: 'share' | 'reels' | 'cardnews';
	link: string;
}

export default function Link(props: LinkProps) {
	const { state, link } = props;

	const handleClick = () => {
		if (link) {
			window.open(link, '_blank', 'noopener,noreferrer');
		}
	};

	if (state === 'share') {
		return (
			<div onClick={handleClick} style={{ cursor: 'pointer' }}>
				<HStack
					align="center"
					justify="center"
					gap={10}
					className={s.primaryContainer}
				>
					<Share2 size={30} color="#FFF0E4" className={s.primaryIcon} />
					<span className={s.primaryText}>캠프 공유하기</span>
				</HStack>
			</div>
		);
	} else if (state === 'reels') {
		return (
			<div onClick={handleClick} style={{ cursor: 'pointer' }}>
				<HStack
					align="center"
					justify="center"
					gap={10}
					className={s.secondaryContainer}
				>
					<ArrowUpLeft size={30} color="#FE5521" className={s.secondaryIcon} />
					<span className={s.secondaryText}>캠프 릴스</span>
				</HStack>
			</div>
		);
	} else if (state === 'cardnews') {
		return (
			<div onClick={handleClick} style={{ cursor: 'pointer' }}>
				<HStack
					align="center"
					justify="center"
					gap={10}
					className={s.secondaryContainer}
				>
					<ArrowUpLeft size={30} color="#FE5521" className={s.secondaryIcon} />
					<span className={s.secondaryText}>캠프 카드뉴스</span>
				</HStack>
			</div>
		);
	}
}
