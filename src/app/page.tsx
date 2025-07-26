import {
	BenefitSection,
	ClubListSection,
	FAQSection,
	HeroSection,
	IntroduceSection,
	LastYearPhotoSection,
	ScheduleSection,
	ShowReelSection,
	WithClubSection,
} from '@/components/home/section';
import { Footer, Header, Spacer } from '@/components/ui';
import s from '@/styles/app/page.module.scss';

export default function Home() {
	return (
		<>
			<Header />
			<Spacer height={62} />
			<HeroSection />
			<div className={s.content}>
				<WithClubSection />
				<IntroduceSection />
				<ShowReelSection />
				<LastYearPhotoSection />
				<BenefitSection />
				<ClubListSection />
				<ScheduleSection />
				<FAQSection />
				<Footer />
			</div>
		</>
	);
}
