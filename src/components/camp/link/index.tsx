import { HStack } from '@/components/ui';
import s from './style.module.scss';
import { ArrowUpLeft, Share, Share2 } from 'lucide-react';

interface LinkProps {
	state: 'share' | 'reels' | 'cardnews';
	link: string;
	title?: string;
	description?: string;
}

export default function Link(props: LinkProps) {
	const { state, link, title, description } = props;

	const handleClick = () => {
        if (state === 'reels' || state === 'cardnews') {
            alert('각 동아리의 개성 있는 카드뉴스와 릴스는 8월 25일에 공개됩니다!\n자세한 내용은 인스타그램(@sunrin_ssf)에서 확인해 주세요.');
            return;
        }

        if (state === 'share') {
            const shareUrl = window.location.href;
            const shareText = title && description
                ? `2025 소프트웨어 나눔축제\n[${title}]\n${description}`
                : '선린인터넷고등학교 소프트웨어 나눔 축제 SSF는 2018년부터 이어져온 대표 행사로, 선배들이 소프트웨어 경험을 미래 세대와 나누고, 직접 만들고 체험할 수 있는 기회를 제공하는 축제입니다.';
            if (navigator.share) {
                navigator.share({
                    title: title || '2025 소프트웨어 나눔축제',
                    text: shareText,
                    url: shareUrl,
                }).catch(() => {
                });
            } else {
                navigator.clipboard.writeText(shareUrl)
                    .then(() => {
                        alert('해당 캠프 링크가 복사되었습니다.');
                    })
                    .catch(() => {
                        alert('복사에 실패했습니다. 다시 시도해 주세요.');
                    });
            }
            return;
        }

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
