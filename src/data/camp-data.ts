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
        color: string;
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
        description: "브라우저를 직접 해킹하고, 해커의 입장에서 사용자의 정보가 어떻게 탈취되는지 체험해보세요. 공격자의 시선을 통해 보안을 이해하고, 실생활에서 나를 지킬 수 있는 방법까지 함께 배워봅니다.",
        imageSrc: "/camp/layer7.png",
        link: {
            share: "https://www.youtube.com/",
            reels: "https://www.instagram.com/",
            cardnews: "https://www.youtube.com/"
        },
        club: {
            color: "#000",
            name: "Layer7",
            tags: ["해킹", "Chrome", "피싱", "윤리"],
            description: "We Hack the Universe, 해킹을 통해 세상의 경계를 넓히는 Layer7입니다. 25년의 역사를 가지고 웹 해킹·리버스 엔지니어링·시스템 해킹 등 폭넓은 보안 분야를 탐구해 왔습니다. 동아리에서 활동하며 역량을 키운 우리는 그 실력을 바탕으로 DEFCON과 CODEGATE CTF 같은 세계적 대회에서 수상했으며, CODEGATE 국제 해킹 컨퍼런스 무대에서 자체 연구 프로젝트를 발표하는 등 우수한 성과를 거두고 있습니다.",
            logo: "/club/layer7.png",
            link: {
                website: "https://layer7.kr/",
                instagram: "https://instagram.com/sunrin_layer7"
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
            color: "#000",
            name: "IRIS",
            tags: ["Rc카", "사물인터넷", "리눅스", "라즈베리파이"],
            description: "IRIS는 선린인터넷고등학교 정보보호과의 전공 동아리로, IoT와 인공지능에 관심 있는 학생들이 모여 활동하고 있습니다. 저희는 C언어와 파이썬을 기반으로 프로그래밍을 배우며, 라즈베리파이와 아두이노를 활용해 IoT의 기본 원리와 인공지능의 핵심 개념을 익히고 있습니다",
            logo: "/club/iris.png",
            link: {
                website: "https://sunrin-iris.kr/",
                instagram: "https://www.instagram.com/sunrin_iris/"
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
            color: "#000",
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
            color: "#000",
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
            color: "#000",
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
            color: "#000",
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
            color: "#000",
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
            color: "#000",
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
