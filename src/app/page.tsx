import { Hero, Schedule, ShowReel, WithClub } from '@/components/home';
import { FAQ, Footer, Header, InformationCard } from '@/components/ui';

export default function Home() {
	const carouselItems = [
		{ id: 1, src: '/club/tapie.png' },
		{ id: 2, src: '/club/ana.png' },
		{ id: 3, src: '/club/creal_black.png' },
		{ id: 4, src: '/club/para.png' },
		{ id: 5, src: '/club/layer7.png' },
		{ id: 6, src: '/club/teamlog.png' },
		{ id: 7, src: '/club/unifox.png' },
		{ id: 8, src: '/club/iris.png' },
		{ id: 9, src: '/club/layer7.png' },
	];
	return (
		<>
			<Header />
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
				<ShowReel />
				<InformationCard
					title="각 동아리에서 준비한 체계적인 커리큘럼을 경험해보세요!"
					description="체계화된 캠프별 커리큘럼을 통해 소프트웨어 관련 경험을 깊이 있게 쌓아갈 수 있습니다."
					imageSrc="/food.png"
				/>
				<InformationCard
					title="각 동아리에서 준비한 굿즈도 있어요"
					description="쉬는 시간엔 재학생에게서 소프트웨어와 학교 생활에 대한 경험을 들을 수 있습니다."
					imageSrc="/food.png"
				/>
				<InformationCard
					title="각 동아리에서 준비한 굿즈도 있어요"
					description="쉬는 시간엔 재학생에게서 소프트웨어와 학교 생활에 대한 경험을 들을 수 있습니다."
					imageSrc="/food.png"
				/>
				<Schedule />
				<FAQ />
				<Footer />
			</div>
		</>
	);
}
