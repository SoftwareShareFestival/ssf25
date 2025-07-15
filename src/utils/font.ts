import localFont from 'next/font/local';

export const paperlogy = localFont({
	src: [
		{
			path: '../../public/fonts/Paperlogy-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Paperlogy-Medium.ttf',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Paperlogy-SemiBold.ttf',
			weight: '600',
			style: 'normal',
		},
	],
});
