'use client';

import { useState } from 'react';
import { VStack } from '@/components/ui';
import { ChevronDown, ChevronUp } from 'lucide-react';
import s from './style.module.scss';
import cn from 'classnames';

interface FAQItem {
	id: number;
	category: '캠프' | '기타';
	question: string;
	answer: string;
}

const faqData: FAQItem[] = [
	{
		id: 1,
		category: '캠프',
		question: '참가 신청은 어떻게 하나요?',
		answer: '참가 신청은 9월 7일까지 웹사이트에서 할 수 있습니다.',
	},
	{
		id: 2,
		category: '캠프',
		question: '중복 지원이 가능한가요?',
		answer: '중복 지원은 불가능하며, 한 개의 동아리만 선택하여 지원해주세요.',
	},
	{
		id: 3,
		category: '캠프',
		question: '참가 신청이 제대로 되었는지 궁금해요!',
		answer: '참가 신청 완료 후 등록하신 이메일로 확인 메일이 발송됩니다.',
	},
	{
		id: 4,
		category: '캠프',
		question: '참가 신청 선정 결과는 어떻게 확인하나요?',
		answer: '선정 결과는 9월 10일 개별 연락을 통해 안내드릴 예정입니다.',
	},
	{
		id: 5,
		category: '기타',
		question: '캠프 날 점심이 제공되나요?',
		answer: '점심은 제공되지 않으며, 개별적으로 준비해주시기 바랍니다.',
	},
	{
		id: 6,
		category: '기타',
		question: '다른 궁금한 점은 어떻게 질문하나요?',
		answer: 'SSF 인스타그램 DM 또는 공식 이메일로 문의해주시면 답변드리겠습니다.',
	},
];

export default function FAQ() {
	const [openItems, setOpenItems] = useState<number[]>([]);

	const toggleItem = (id: number) => {
		setOpenItems(prev =>
			prev.includes(id)
				? prev.filter(item => item !== id)
				: [...prev, id]
		);
	};

	return (
		<section className={s.container}>
			<VStack gap={50} align="center" fullWidth>
				<h3 className={s.title}>자주 묻는 질문</h3>
				
				<VStack gap={16} className={s.faqList}>
					{faqData.map((item) => (
						<div
							key={item.id}
							className={cn(s.faqItem, {
								[s.active]: openItems.includes(item.id)
							})}
						>
							<button
								className={s.questionButton}
								onClick={() => toggleItem(item.id)}
							>
								<div className={s.questionContent}>
									<span className={s.category}>
										{item.category}
									</span>
									<span className={s.question}>{item.question}</span>
								</div>
								<div className={s.iconWrapper}>
									{openItems.includes(item.id) ? (
										<ChevronUp size={20} />
									) : (
										<ChevronDown size={20} />
									)}
								</div>
							</button>
							
							{openItems.includes(item.id) && (
								<div className={s.answerWrapper}>
									<p className={s.answer}>{item.answer}</p>
								</div>
							)}
						</div>
					))}
				</VStack>
			</VStack>
		</section>
	);
}