import Image from 'next/image';
import s from './style.module.scss';
import { Flex } from '@/components/ui';
import HeaderNav from './nav';
import { paperlogy } from '@/utils/font';

export default function Header() {
	return (
		<Flex fullWidth className={s.full} justify="center">
			<header className={s.header}>
				<Image
					src={'/ssf_white.svg'}
					height={22}
					width={55}
					alt="SSF25 하얀색 로고"
				/>
				<button className={s.submitButton}>
					<a href="a" style={paperlogy.style}>
						지원하기
					</a>
				</button>
			</header>
		</Flex>
	);
}
