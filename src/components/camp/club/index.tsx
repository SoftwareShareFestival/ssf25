import { HStack, VStack } from '@/components/ui';
import s from './style.module.scss';
import Tag from '../tag';
import ClubLink from '../clubLink';
interface ClubProps {
	name: string;
	description: string;
	logo: string;
	tags: string[];
	color: string;
	link: {
		website: string;
		instagram: string;
	};
}

export default function Club(props: ClubProps) {
	const { name, description, logo, tags, color, link } = props;
	return (
		<div className={s.container}>
			<img src={logo} alt={name} className={s.clubLogo} />
			<div className={s.clubContentWrapper}>
				<p className={s.clubName}>
					{name}
					<span className={s.clubWhat}>는 무슨 동아리인가요?</span>
				</p>
				<div className={s.tagContainer}>
					{tags.map((tag) => (
						<Tag key={tag} name={tag} color={color} />
					))}
				</div>
				<p className={s.clubDescription}>{description}</p>
				<div className={s.linkContainer}>
					<ClubLink
						key="website"
						state="website"
						link={link.website}
						color={color}
					/>
					<ClubLink
						key="instagram"
						state="instagram"
						link={link.instagram}
						color={color}
					/>
				</div>
			</div>
		</div>
	);
}
