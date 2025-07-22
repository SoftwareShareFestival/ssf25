interface CampInfo {
    title: string;
    description: string;
    imageSrc: string;
    link: {
        share: string;
        reels: string;
        cardnews: string;
    };
    club: {
        name: string;
        tags: string[];
        description: string;
        logo: string;
        link: {
            website: string;
            instagram: string;
        };
    };
}

export const campData: CampInfo[] = [
    {
        title: "Chrome 해킹해서 친구 검색기록 홈쳐보기",
        description: "We Hack the Universe, 해킹을 통해 세상의 경계를 넓히는 Layer7입니다. 25년의 역사를 가지고 웹 해킹·리버스 엔지니어링·시스템 해킹 등 폭넓은 보안 분야를 탐구해 왔습니다...",
        imageSrc: "/camp/layer7.png",
        link: {
            share: "https://www.youtube.com/",
            reels: "https://www.instagram.com/",
            cardnews: "https://www.youtube.com/"
        },
        club: {
            name: "Layer7",
            tags: ["해킹", "보안", "CTF"],
            description: "We Hack the Universe, 해킹을 통해 세상의 경계를 넓히는 Layer7입니다...",
            logo: "/club/layer7.png",
            link: {
                website: "https://layer7.kr/",
                instagram: "https://www.instagram.com/layer7_official/"
            }
        }
    },
    {
        title: "IoT 정찰병 : 움직이는 CCTV RC카",
        description: "IRIS와 함께하는 IoT 정찰병 프로젝트...",
        imageSrc: "/camp/iris.png",
        link: {
            share: "https://www.youtube.com/",
            reels: "https://www.instagram.com/",
            cardnews: "https://www.youtube.com/"
        },
        club: {
            name: "IRIS",
            tags: ["IoT", "하드웨어", "임베디드"],
            description: "정보보호 동아리 IRIS입니다...",
            logo: "/club/iris.png",
            link: {
                website: "#",
                instagram: "https://www.instagram.com/"
            }
        }
    },
    {
        title: "JS로 감옥 탈출 게임 만들래 말래? 재밌어 보이긴 해 ~",
        description: "TeamLog와 함께하는 자바스크립트 게임 개발 워크샵...",
        imageSrc: "/camp/teamlog.png",
        link: {
            share: "https://www.youtube.com/",
            reels: "https://www.instagram.com/",
            cardnews: "https://www.youtube.com/"
        },
        club: {
            name: "TeamLog",
            tags: ["게임개발", "JavaScript", "HTML5"],
            description: "게임 개발 동아리 TeamLog입니다...",
            logo: "/club/teamlog.png",
            link: {
                website: "#",
                instagram: "https://www.instagram.com/"
            }
        }
    },
    {
        title: "클리어 못하면 퇴장불가 : 무한의 계단 게임 만들기",
        description: "Unifox와 함께하는 게임 개발 캠프...",
        imageSrc: "/camp/unifox.png",
        link: {
            share: "https://www.youtube.com/",
            reels: "https://www.instagram.com/",
            cardnews: "https://www.youtube.com/"
        },
        club: {
            name: "Unifox",
            tags: ["유니티", "게임개발", "C#"],
            description: "게임 개발 동아리 Unifox입니다...",
            logo: "/club/unifox.png",
            link: {
                website: "#",
                instagram: "https://www.instagram.com/"
            }
        }
    },
    {
        title: "나만의 싸이월드 만들기",
        description: "AnA와 함께하는 웹 개발 캠프...",
        imageSrc: "/camp/ana.png",
        link: {
            share: "https://www.youtube.com/",
            reels: "https://www.instagram.com/",
            cardnews: "https://www.youtube.com/"
        },
        club: {
            name: "AnA",
            tags: ["웹개발", "React", "프론트엔드"],
            description: "웹 개발 동아리 AnA입니다...",
            logo: "/club/ana.png",
            link: {
                website: "#",
                instagram: "https://www.instagram.com/"
            }
        }
    },
    {
        title: "Unity로 만드는 교내전투 로그라이크 게임",
        description: "C,real과 함께하는 게임 개발 워크샵...",
        imageSrc: "/camp/creal.png",
        link: {
            share: "https://www.youtube.com/",
            reels: "https://www.instagram.com/",
            cardnews: "https://www.youtube.com/"
        },
        club: {
            name: "C,real",
            tags: ["유니티", "게임개발", "C#"],
            description: "게임 개발 동아리 C,real입니다...",
            logo: "/club/creal.png",
            link: {
                website: "#",
                instagram: "https://www.instagram.com/"
            }
        }
    },
    {
        title: "웹으로 만드는 나만의 수박게임",
        description: "TAPIE와 함께하는 웹 게임 개발 워크샵...",
        imageSrc: "/camp/tapie.png",
        link: {
            share: "https://www.youtube.com/",
            reels: "https://www.instagram.com/",
            cardnews: "https://www.youtube.com/"
        },
        club: {
            name: "TAPIE",
            tags: ["웹게임", "JavaScript", "HTML5"],
            description: "웹 게임 개발 동아리 TAPIE입니다...",
            logo: "/club/tapie.png",
            link: {
                website: "#",
                instagram: "https://www.instagram.com/"
            }
        }
    },
    {
        title: "내 기분에 따라 플레이리스트를 추천해주는 AI 만들기",
        description: "PARA와 함께하는 AI 음악 추천 시스템 개발 프로젝트...",
        imageSrc: "/camp/para.png",
        link: {
            share: "https://www.youtube.com/",
            reels: "https://www.instagram.com/",
            cardnews: "https://www.youtube.com/"
        },
        club: {
            name: "PARA",
            tags: ["AI", "머신러닝", "음악추천"],
            description: "AI 연구 동아리 PARA입니다...",
            logo: "/club/para.png",
            link: {
                website: "#",
                instagram: "https://www.instagram.com/"
            }
        }
    }
];

// 🔁 club.name 기준으로 접근 가능한 객체
export const campDataByClub: { [clubName: string]: CampInfo } = Object.fromEntries(
    campData.map(camp => [camp.club.name, camp])
);
