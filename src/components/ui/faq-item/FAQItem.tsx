'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import cn from 'classnames';
import s from './style.module.scss';
import { FAQItemData } from '@/data/faq';

interface FAQItemProps extends FAQItemData {
	isOpen: boolean;
	onToggle: (id: number) => void;
}

export default function FAQItem({
	id,
	category,
	question,
	answer,
	isOpen,
	onToggle,
}: FAQItemProps) {
	return (
		<div
			className={cn(s.faqItem, {
				[s.active]: isOpen,
			})}
		>
			<button className={s.questionButton} onClick={() => onToggle(id)}>
				<div className={s.questionContent}>
					<span
						className={cn(s.category, {
							[s.etc]: category === '기타',
						})}
					>
						{category}
					</span>
					<span className={s.question}>{question}</span>
				</div>
				<div className={s.iconWrapper}>
					{isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
				</div>
			</button>

			{isOpen && (
				<div className={s.answerWrapper}>
					<p className={s.answer}>{answer}</p>
				</div>
			)}
		</div>
	);
}
