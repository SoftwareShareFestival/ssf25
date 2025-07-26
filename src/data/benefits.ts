export interface InformationCardsData {
	title: string;
	description: string;
	imageSrc: string;
}

export const benefitData: InformationCardsData[] = [
	{
		title: '각 동아리에서 준비한 체계적인 커리큘럼을 경험해보세요!',
		description:
			'체계화된 캠프별 커리큘럼을 통해 중학생들도 쉽게 소프트웨어 관련 경험을 깊이 있게 쌓아갈 수 있습니다.',
		imageSrc: '/notobook.svg',
	},
	{
		title: '각 동아리에서 준비한 굿즈도 있어요',
		description:
			'SSF에서만 받을 수 있는 특별한 동아리 굿즈로 소중한 추억을 만들어보세요.',
		imageSrc: '/goods.png',
	},
	{
		title: '여러분을 위한 간식도 준비되어 있어요',
		description:
			'행사 중간, 준비된 간식으로 에너지를 채우고 더욱 즐겁게 참여하세요!',
		imageSrc: '/food.png',
	},
];
