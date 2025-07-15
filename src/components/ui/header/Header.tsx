import Image from 'next/image';
import s from './style.module.scss';
import { Flex } from '@/components/ui';
import { paperlogy } from '@/app/layout';
import HeaderNav from './nav';

export default function Header() {
	return (
		<Flex fullWidth className={s.full} justify="center">
			<header className={s.header}>
				<Image
					src={'/ssf_white.svg'}
					height={22}
					width={55}
					alt="SSF25 white logo"
				/>
				<HeaderNav />
				<button className={s.submitButton}>
					<a href="a" style={paperlogy.style}>
						지원하기
					</a>
				</button>
			</header>
		</Flex>
	);
}
