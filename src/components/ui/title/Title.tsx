import s from './style.module.scss';
import { VStack } from '../vstack';

interface Props {
	title: string;
	description: string;
	layoutAlign?: 'start' | 'end' | 'center' | 'stretch';
	textAlign?: 'start' | 'center' | 'end'
}

export default function Title({ title, description, layoutAlign, textAlign = 'center' }: Props) {
	return (
		<VStack gap={16} align={layoutAlign}>
			<span className={s.title} style={{textAlign: textAlign}}>{title}</span>
			<span className={s.description} style={{textAlign: textAlign}}>{description}</span>
		</VStack>
	);
}
