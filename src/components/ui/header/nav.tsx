'use client';

import { usePathname } from 'next/navigation';
import s from './style.module.scss';
import Link from 'next/link';

export default function HeaderNav() {
	const pathname = usePathname();
	return (
		<nav role="navigation" aria-label="메인 메뉴" className={s.nav}>
			<ul>
				<li>
					<Link href={'/'} data-active={pathname === '/'}>
						소개
					</Link>
				</li>
				<li>
					<Link href={'/program'} data-active={pathname === '/program'}>
						프로그램
					</Link>
				</li>
				<li>
					<Link href={'/club'} data-active={pathname === '/club'}>
						동아리
					</Link>
				</li>
			</ul>
		</nav>
	);
}
