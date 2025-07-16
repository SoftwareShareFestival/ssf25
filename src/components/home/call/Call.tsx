'use client';

import { VStack } from '@/components/ui';
import s from './style.module.scss';
import { HStack } from '@/components/ui/hstack';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneCall } from 'lucide-react';

export default function Schedule() {
	return (
		<section className={s.container}>
			<HStack gap={62}>
				<VStack gap={12}>
					<span className={s.title}>참가 신청 문의</span>
					<HStack gap={8}>
						<PhoneCall className={s.icon} size={20} />
						<span className={s.phone}>02-717-4616 (선린인고 홍보부)</span>
					</HStack>
				</VStack>
				<VStack gap={12}>
					<span className={s.title}>체험 내용 문의</span>
					<HStack gap={8}>
						<PhoneCall className={s.icon} size={20} />
						<span className={s.phone}>070-4459-9047 (소프트웨어과)</span>
					</HStack>
				</VStack>
			</HStack>
		</section>
	);
}
