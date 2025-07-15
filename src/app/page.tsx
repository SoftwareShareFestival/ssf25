import { Hero, WithClub } from '@/components/home';
import { Header } from '@/components/ui';

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
	];
	return (
		<>
			<Header />
			<Hero />
			<div style={{ paddingBlock: 70 }}>
				<WithClub items={carouselItems} speed={0.5} />
			</div>
		</>
	);
}
