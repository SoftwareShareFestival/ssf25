import type { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/next"

import '@/styles/global.scss';
import { paperlogy } from '@/utils/font';

export const metadata: Metadata = {
	title: '2025 소프트웨어나눔축제',
	description: '선린인터넷고등학교 소프트웨어 나눔 축제 SSF는 2018년부터 이어져온 대표 행사로, 선배들이 소프트웨어 경험을 미래 세대와 나누고, 직접 만들고 체험할 수 있는 기회를 제공하는 축제입니다.',
	icons: {
		icon: '/favicon.ico',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta property="og:title" content="2025 소프트웨어나눔축제" />
				<meta property="og:description" content="선린인터넷고등학교 소프트웨어 나눔 축제 SSF는 2018년부터 이어져온 대표 행사로, 선배들이 소프트웨어 경험을 미래 세대와 나누고, 직접 만들고 체험할 수 있는 기회를 제공하는 축제입니다." />
				<meta property="og:image" content="/ssf2025.png" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://ssf25.vercel.app" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="2025 소프트웨어나눔축제" />
				<meta name="twitter:description" content="선린인터넷고등학교 소프트웨어 나눔 축제 SSF는 2018년부터 이어져온 대표 행사로, 선배들이 소프트웨어 경험을 미래 세대와 나누고, 직접 만들고 체험할 수 있는 기회를 제공하는 축제입니다." />
				<meta name="twitter:image" content="/ssf2025.png" />
			</head>
			<body className={`${paperlogy.className}`}>{children}</body>
			<Analytics />
		</html>
	);
}
