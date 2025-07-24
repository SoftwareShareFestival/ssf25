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
		<VStack gap={65} align="start" justify="start" className={s.container}>
			<img src={logo} alt={name} className={s.clubLogo} />
			<div className={s.clubContentWrapper}>
				<p className={s.clubName}>
					{name}
					<span className={s.clubWhat}>는 무슨 동아리인가요?</span>
				</p>
				<HStack
					align="center"
					justify="start"
					gap={22}
					className={s.tagContainer}
				>
					{tags.map((tag) => (
						<Tag key={tag} name={tag} color={color} />
					))}
				</HStack>
				<p className={s.clubDescription}>{description}</p>
				<div className={s.linkContainer}>
					<HStack align="center" justify="end" gap={22} fullWidth>
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
					</HStack>
				</div>
			</div>
		</VStack>
	);
}
