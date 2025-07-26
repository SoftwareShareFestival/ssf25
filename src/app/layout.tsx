import type { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

import '@/styles/global.scss';
import { paperlogy } from '@/utils/font';

const website = {
	title: '2025 소프트웨어나눔축제',
	description: '선린인터넷고등학교 소프트웨어 나눔 축제 SSF는 2018년부터 이어져온 대표 행사로, 선배들이 소프트웨어 경험을 미래 세대와 나누고, 직접 만들고 체험할 수 있는 기회를 제공하는 축제입니다.',
}

export const metadata: Metadata = {
	title: website.title,
	description: website.description,
	icons: {
		icon: '/favicon.ico',
	},
	openGraph: {
		title: website.title,
		description: website.description,
		images: ['/ssf2025.png'],
		type: 'website',
		url: 'https://ssf.sunrin.io',
	},
	twitter: {
		card: 'summary_large_image',
		title: website.title,
		description: website.description,
		images: ['/ssf2025.png'],
	},
};


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${paperlogy.className}`}>{children}</body>
			<Analytics mode="production" />
			<SpeedInsights />
		</html>
	);
}
