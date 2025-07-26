import {
	Hero,
	Schedule,
	ShowReel,
	WithClub,
	Introduce,
	ClubList,
	LastYearPhoto,
} from '@/components/home';
import { BenefitSection } from '@/components/home/section';
import {
	FAQ,
	Footer,
	Header,
	Spacer,
} from '@/components/ui';
import { carouselItems } from '@/data/carousel';
import s from '@/styles/app/page.module.scss';

export default function Home() {
	return (
		<>
			<Header />
			<Spacer height={62} />
			<Hero />
			<div className={s.content}>
				<WithClub items={carouselItems} speed={0.5} />
				<Introduce />
				<ShowReel />
				<LastYearPhoto />
				<BenefitSection />
				<ClubList />
				<Schedule />
				<FAQ />
				<Footer />
			</div>
		</>
	);
}
