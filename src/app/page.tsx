import {
	Hero,
	Schedule,
	ShowReel,
	ClubList,
	LastYearPhoto,
} from '@/components/home';
import { BenefitSection, Introduce } from '@/components/home/section';
import FAQSection from '@/components/home/section/faq/FAQSection';
import WithClubSection from '@/components/home/section/with-club/WithClubSection';
import {
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
				<WithClubSection items={carouselItems} speed={0.5} />
				<Introduce />
				<ShowReel />
				<LastYearPhoto />
				<BenefitSection />
				<ClubList />
				<Schedule />
				<FAQSection />
				<Footer />
			</div>
		</>
	);
}
