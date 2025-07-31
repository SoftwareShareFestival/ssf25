'use client';

import { useState } from 'react';
import { HStack, Title, VStack } from '@/components/ui';
import { ChevronDown, ChevronUp, PhoneCall } from 'lucide-react';
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
		answer:
			'참가 신청은 9월 1일부터 9월 7일까지 본 홈페이지에서 하실 수 있습니다.',
	},
	{
		id: 2,
		category: '캠프',
		question: '중복 지원이 가능한가요?',
		answer:
			'중복 신청은 불가능하며, 1지망부터 3지망까지 모두 서로 다른 캠프를 선택하셔야 합니다.',
	},
	{
		id: 3,
		category: '캠프',
		question: '선정 기준이 어떻게 되나요?',
		answer:
			'전국 중학교 3학년 학생을 우선으로, 그다음 용산구청 관내 중학교 재학생, 이후에는 선착순으로 선정됩니다.',
	},
	{
		id: 4,
		category: '캠프',
		question: '참가 신청이 제대로 되었는지 궁금해요!',
		answer: '신청이 완료되면 등록하신 이메일로 확인 메일이 발송됩니다.',
	},
	{
		id: 5,
		category: '캠프',
		question: '참가 신청 선정 결과는 어떻게 확인하나요?',
		answer: '선정 결과는 9월 9일 본교 홈페이지와 개인 메시지를 통해 안내드립니다.',
	},
	{
		id: 6,
		category: '기타',
		question: '캠프 날 점심이 제공되나요?',
		answer: '캠프는 오후 1시부터 진행되므로 점심은 제공되지 않습니다.',
	},
	{
		id: 7,
		category: '기타',
		question: '다른 궁금한 점은 어떻게 질문하나요?',
		answer: 'SSF 인스타그램(@sunrin_ssf) DM 또는 오른쪽 연락처로 문의 부탁드립니다.',
	},
];

export default function FAQ() {
	const [openItems, setOpenItems] = useState<number[]>([]);

	const toggleItem = (id: number) => {
		setOpenItems((prev) =>
			prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
		);
	};

	return (
		<section className={s.container}>
			<VStack gap={36} fullWidth>
				<Title
					title="자주 묻는 질문"
					description="학생들이 자주 묻는 질문들을 모아봤어요"
					align="start"
				/>

				<VStack gap={16} className={s.faqList}>
					{faqData.map((item) => (
						<div
							key={item.id}
							className={cn(s.faqItem, {
								[s.active]: openItems.includes(item.id),
							})}
						>
							<button
								className={s.questionButton}
								onClick={() => toggleItem(item.id)}
							>
								<div className={s.questionContent}>
									<span
										className={cn(s.category, {
											[s.etc]: item.category === '기타',
										})}
									>
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
			<VStack className={s.callContainer} gap={30}>
				<VStack gap={16} align="start">
					<span className={s.callTitle}>참가 신청 문의</span>
					<HStack gap={10} align="center">
						<PhoneCall className={s.icon} size={18} />
						<span className={s.phone}>02-717-4616 (홍보부)</span>
					</HStack>
				</VStack>
				<VStack gap={12} align="start">
					<span className={s.callTitle}>체험 내용 문의</span>
					<HStack gap={10} align="start">
						<PhoneCall className={s.icon} size={18} />
						<VStack gap={8}>
							<span className={s.phone}>02-713-6216 (정보보호과)</span>
							<span className={s.phone}>02-713-6219 (소프트웨어과)</span>
						</VStack>
					</HStack>
				</VStack>
			</VStack>
		</section>
	);
}
