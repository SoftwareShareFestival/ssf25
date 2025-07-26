import {
	Hero,
	Schedule,
	ShowReel,
	WithClub,
	ClubList,
	LastYearPhoto,
} from '@/components/home';
import { BenefitSection, Introduce } from '@/components/home/section';
import FAQSection from '@/components/home/section/faq/FAQSection';
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
				<WithClub items={carouselItems} speed={0.5} />
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
