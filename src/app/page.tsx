import {
	Hero,
	Schedule,
	ShowReel,
	WithClub,
	Introduce,
	ClubList,
	LastYearPhoto,
} from '@/components/home';
import {
	FAQ,
	Footer,
	Header,
	InformationCard,
	Spacer,
	VStack,
	Timebar,
} from '@/components/ui';

export default function Home() {
	const carouselItems = [
		{ id: 1, src: '/club/tapie.svg' },
		{ id: 2, src: '/club/ana.svg' },
		{ id: 3, src: '/club/creal_black.png' },
		{ id: 4, src: '/club/para.svg' },
		{ id: 5, src: '/club/layer7.svg' },
		{ id: 6, src: '/club/teamlog.svg' },
		{ id: 7, src: '/club/unifox.png' },
		{ id: 8, src: '/club/iris.svg' },
		{ id: 9, src: '/club/layer7.svg' },
	];
	return (
		<>
			<Header />
			<Timebar />
			<Spacer height={128} />
			<Hero />
			<div
				style={{
					padding: '70px 0 40px 0',
					display: 'flex',
					flexDirection: 'column',
					alignContent: 'center',
					gap: 169,
				}}
			>
				<WithClub items={carouselItems} speed={0.5} />
				<Introduce />
				<ShowReel />
				<LastYearPhoto />
				<VStack gap={64} style={{margin: '0 auto'}}>
					<InformationCard
						title="각 동아리에서 준비한 체계적인 커리큘럼을 경험해보세요!"
						description="체계화된 캠프별 커리큘럼을 통해 중학생들도 쉽게 소프트웨어 관련 경험을 깊이 있게 쌓아갈 수 있습니다."
						imageSrc="/notobook.svg"
					/>
					<InformationCard
						title="각 동아리에서 준비한 굿즈도 있어요"
						description="SSF에서만 받을 수 있는 특별한 동아리 굿즈로 소중한 추억을 만들어보세요."
						imageSrc="/goods.png"
					/>
					<InformationCard
						title="여러분을 위한 간식도 준비되어 있어요"
						description="행사 중간, 준비된 간식으로 에너지를 채우고 더욱 즐겁게 참여하세요!"
						imageSrc="/food.png"
					/>
				</VStack>
				<ClubList />
				<Schedule />
				<FAQ />
				<Footer />
			</div>
		</>
	);
}
