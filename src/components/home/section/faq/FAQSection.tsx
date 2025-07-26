'use client';

import { HStack, Title, VStack, FAQItem } from '@/components/ui';
import { PhoneCall } from 'lucide-react';
import { faqData } from '@/data/faq';
import s from './style.module.scss';
import { useFAQ } from '@/components/ui/faq-item';

export default function FAQSection() {
  const { toggleItem, isOpen } = useFAQ();

  return (
    <section className={s.container}>
      <VStack gap={36} fullWidth>
        <Title
          title="자주 묻는 질문"
          description="학생들이 자주 묻는 질문들을 모아봤어요"
          layoutAlign="start"
          textAlign='start'
        />

        <VStack gap={16} className={s.faqList}>
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              {...item}
              isOpen={isOpen(item.id)}
              onToggle={toggleItem}
            />
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