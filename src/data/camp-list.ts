export interface Camp {
	thumbnail: string;
	name: string;

	club: {
		imageSrc: string;
		name: string;
		color: string;
		description: string;
	}

	department: 'software' | 'security'
}

export const SSFCampList: Camp[] = [
	{
		thumbnail: '/camp/layer7.png',
		name: 'Chrome 해킹해서 친구 검색기록 홈쳐보기',
		club: { imageSrc: '/club/layer7.png', color: '#000000', name: 'Layer7', description: '해킹 동아리' },
		department: 'security'
	},
        {
		thumbnail: '/camp/iris.png',
		name: 'IoT 정찰병 : 움직이는 CCTV RC카',
		club: { imageSrc: '/club/iris.png', color: '#5B80D7', name: 'IRIS', description: '인공지능/IoT 동아리' },
		department: 'security'
	},
    {
		thumbnail: '/camp/teamlog.png',
		name: 'JS로 감옥 탈출 게임 만들래 말래? 재밌어 보이긴 해 ~',
		club: { imageSrc: '/club/teamlog.png', color: '#EA3E45', name: 'TeamLog', description: '서버프로그래밍 동아리' },
		department: 'security'
	},
    {
		thumbnail: '/camp/unifox.png',
		name: '클리어 못하면 퇴장불가 : 무한의 계단 게임 만들기',
		club: { imageSrc: '/club/unifox.png', color: '#FF6D03', name: 'Unifox', description: '프로그래밍 동아리' },
		department: 'security'
	},
    {
		thumbnail: '/camp/ana.png',
		name: '나만의 싸이월드 만들기',
		club: { imageSrc: '/club/ana.png', color: '#334882', name: 'AnA', description: '서버 개발 동아리' },
		department: 'software'
	},
        {
		thumbnail: '/camp/creal.png',
		name: 'Unity로 만드는 교내전투 로그라이크 게임',
		club: { imageSrc: '/club/creal.png', color: '#1DD8D6', name: 'C,real', description: '게임 개발 동아리' },
		department: 'software'
	},
    {
		thumbnail: '/camp/tapie.png',
		name: '웹으로 만드는 나만의 수박게임',
		club: { imageSrc: '/club/tapie.png', color: '#000000', name: 'TAPIE', description: '웹/앱 개발 동아리' },
		department: 'software'
	},
    {
		thumbnail: '/camp/para.png',
		name: '내 기분에 따라 플레이리스트를 추천해주는 AI 만들기',
		club: { imageSrc: '/club/para.png', color: '#9966FF', name: 'PARA', description: '인공지능 동아리' },
		department: 'software'
	},
];
