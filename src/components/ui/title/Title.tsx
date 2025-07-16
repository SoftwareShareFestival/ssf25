import s from './style.module.scss';
import { VStack } from '../vstack';

interface Props {
	title: string;
	description: string;
	align?: 'start' | 'end' | 'center' | 'stretch';
}

export default function Title({ title, description, align }: Props) {
	return (
		<VStack gap={16} align={align}>
			<span className={s.title}>{title}</span>
			<span className={s.description}>{description}</span>
		</VStack>
	);
}
