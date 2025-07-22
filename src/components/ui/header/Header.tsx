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
				<button className={s.submitButton}>
					<Link href="https://lu.ma/92qeg481" style={paperlogy.style} target='_blank'>
						지원하기
					</Link>
				</button>
			</header>
		</Flex>
	);
}
