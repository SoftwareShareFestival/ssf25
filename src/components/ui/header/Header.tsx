import Image from 'next/image';
import s from './style.module.scss';
import { Flex } from '@/components/ui';
import HeaderNav from './nav';
import { paperlogy } from '@/utils/font';
import Link from 'next/link';

export default function Header() {
	return (
		<Flex fullWidth className={s.full} justify="center">
			<header className={s.header}>
				<Link href="/">
					<Image
						src={'/ssf_white.svg'}
						height={22}
						width={55}
						alt="SSF25 하얀색 로고"
					/>
				</Link>
				<Link
					href="https://sunrint.sen.hs.kr/18605/subMenu.do"
					style={paperlogy.style}
					target="_blank"
				>
					<button className={s.submitButton}>지원하기</button>
				</Link>
			</header>
		</Flex>
	);
}
