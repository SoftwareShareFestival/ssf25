interface CampInfo {
    title: string;
    description: string;
    imageSrc: string;
    link : {
        share: string;
        reels: string;
        cardnews: string;
    }, 
    club:{
        name: string;
        tags : string[];
        description: string;
        logo: string;
        link:{
            website: string;
            instagram: string;
        }
    }
}

export const campData : CampInfo[] = [
    {
        title : "Chrome 해킹해서 친구 검색기록 홈쳐보기",
        description : "We Hack the Universe, 해킹을 통해 세상의 경계를 넓히는 Layer7입니다. 25년의 역사를 가지고 웹 해킹·리버스 엔지니어링·시스템 해킹 등 폭넓은 보안 분야를 탐구해 왔습니다. 동아리에서 활동하며 역량을 키운 우리는 그 실력을 바탕으로 DEFCON과 CODEGATE CTF 같은 세계적 대회에서 수상했으며, CODEGATE 국제 해킹 컨퍼런스 무대에서 자체 연구 프로젝트를 발표하는 등 우수한 성과를 거두고 있습니다. ",
        imageSrc : "/camp/layer7.png",
        link : {
            share : "https://www.youtube.com/",
            reels : "https://www.instagram.com/",
            cardnews: "https://www.youtube.com/"
        },
        club: {
            name: "Layer7",
            tags: ["해킹", "보안", "CTF"],
            description: "We Hack the Universe, 해킹을 통해 세상의 경계를 넓히는 Layer7입니다. 25년의 역사를 가지고 웹 해킹·리버스 엔지니어링·시스템 해킹 등 폭넓은 보안 분야를 탐구해 왔습니다.",
            logo: "/club/layer7.png",
            link: {
                website: "https://layer7.kr/",
                instagram: "https://www.instagram.com/layer7_official/"
            }
        }
    },
    {
        title: "IoT 정찰병 : 움직이는 CCTV RC카",
        description: "IRIS와 함께하는 IoT 정찰병 프로젝트. RC카에 카메라를 장착해 원격으로 조종할 수 있는 CCTV를 만들어봅시다. 하드웨어 제어부터 영상 스트리밍까지 체계적으로 배울 수 있습니다.",
        imageSrc: "/camp/iris.png",
        link: {
            share: "https://www.youtube.com/",
            reels: "https://www.instagram.com/",
            cardnews: "https://www.youtube.com/"
        },
        club: {
            name: "IRIS",
            tags: ["IoT", "하드웨어", "임베디드"],
            description: "정보보호 동아리 IRIS입니다. 보안 분야의 다양한 기술을 연구하고 있습니다.",
            logo: "/club/iris.png",
            link: {
                website: "#",
                instagram: "https://www.instagram.com/"
            }
        }
    },
    {
        title: "JS로 감옥 탈출 게임 만들래 말래? 재밌어 보이긴 해 ~",
        description: "TeamLog와 함께하는 자바스크립트 게임 개발 워크샵. HTML5 Canvas를 활용해 브라우저에서 동작하는 감옥 탈출 게임을 만들어봅시다. 게임 기획부터 개발, 테스트까지 전 과정을 경험해보세요.",
        imageSrc: "/camp/teamlog.png",
        link: {
            share: "https://www.youtube.com/",
            reels: "https://www.instagram.com/",
            cardnews: "https://www.youtube.com/"
        },
        club: {
            name: "TeamLog",
            tags: ["게임개발", "JavaScript", "HTML5"],
            description: "게임 개발 동아리 TeamLog입니다. 다양한 게임을 개발하며 프로그래밍 실력을 키우고 있습니다.",
            logo: "/club/teamlog.png",
            link: {
                website: "#",
                instagram: "https://www.instagram.com/"
            }
        }
    },
    {
        title: "클리어 못하면 퇴장불가 : 무한의 계단 게임 만들기",
        description: "Unifox와 함께하는 게임 개발 캠프. 유니티 엔진을 활용해 무한의 계단 게임을 제작해봅시다. C# 프로그래밍 기초부터 게임 물리, UI/UX 디자인까지 게임 개발의 전반적인 과정을 경험할 수 있습니다.",
        imageSrc: "/camp/unifox.png",
        link: {
            share: "https://www.youtube.com/",
            reels: "https://www.instagram.com/",
            cardnews: "https://www.youtube.com/"
        },
        club: {
            name: "Unifox",
            tags: ["유니티", "게임개발", "C#"],
            description: "게임 개발 동아리 Unifox입니다. 유니티 엔진을 활용한 다양한 게임을 개발하고 있습니다.",
            logo: "/club/unifox.png",
            link: {
                website: "#",
                instagram: "https://www.instagram.com/"
            }
        }
    },
    {
        title: "나만의 싸이월드 만들기",
        description: "AnA와 함께하는 웹 개발 캠프. React를 활용해 나만의 미니 싸이월드를 만들어봅시다. 프론트엔드 개발의 기초부터 SNS 기능 구현까지 웹 개발의 핵심 기술을 배울 수 있습니다.",
        imageSrc: "/camp/ana.png",
        link: {
            share: "https://www.youtube.com/",
            reels: "https://www.instagram.com/",
            cardnews: "https://www.youtube.com/"
        },
        club: {
            name: "AnA",
            tags: ["웹개발", "React", "프론트엔드"],
            description: "웹 개발 동아리 AnA입니다. 최신 웹 기술을 연구하고 프로젝트를 진행하고 있습니다.",
            logo: "/club/ana.png",
            link: {
                website: "#",
                instagram: "https://www.instagram.com/"
            }
        }
    },
    {
        title: "Unity로 만드는 교내전투 로그라이크 게임",
        description: "C,real과 함께하는 게임 개발 워크샵. 로그라이크 장르의 교내 배경 게임을 유니티로 제작해봅시다. 랜덤 생성 던전, 아이템 시스템, 전투 시스템 등 게임 개발의 핵심 요소들을 배울 수 있습니다.",
        imageSrc: "/camp/creal.png",
        link: {
            share: "https://www.youtube.com/",
            reels: "https://www.instagram.com/",
            cardnews: "https://www.youtube.com/"
        },
        club: {
            name: "C,real",
            tags: ["유니티", "게임개발", "C#"],
            description: "게임 개발 동아리 C,real입니다. 창의적인 게임을 기획하고 개발하는 동아리입니다.",
            logo: "/club/creal.png",
            link: {
                website: "#",
                instagram: "https://www.instagram.com/"
            }
        }
    },
    {
        title: "웹으로 만드는 나만의 수박게임",
        description: "TAPIE와 함께하는 웹 게임 개발 워크샵. JavaScript와 HTML5 Canvas를 활용해 클래식한 수박게임을 웹에서 구현해봅시다. 게임 로직 구현부터 그래픽 요소 제작까지, 웹 게임 개발의 모든 것을 경험할 수 있습니다.",
        imageSrc: "/camp/tapie.png",
        link: {
            share: "https://www.youtube.com/",
            reels: "https://www.instagram.com/",
            cardnews: "https://www.youtube.com/"
        },
        club: {
            name: "TAPIE",
            tags: ["웹게임", "JavaScript", "HTML5"],
            description: "웹 게임 개발 동아리 TAPIE입니다. 재미있는 웹 기반 게임들을 개발하고 있습니다.",
            logo: "/club/tapie.png",
            link: {
                website: "#",
                instagram: "https://www.instagram.com/"
            }
        }
    },
    {
        title: "내 기분에 따라 플레이리스트를 추천해주는 AI 만들기",
        description: "PARA와 함께하는 AI 음악 추천 시스템 개발 프로젝트. 머신러닝을 활용해 사용자의 기분을 분석하고 맞춤형 플레이리스트를 추천하는 시스템을 만들어봅시다. 데이터 수집부터 모델 학습, 웹 서비스 연동까지 AI 서비스 개발의 전 과정을 경험할 수 있습니다.",
        imageSrc: "/camp/para.png",
        link: {
            share: "https://www.youtube.com/",
            reels: "https://www.instagram.com/",
            cardnews: "https://www.youtube.com/"
        },
        club: {
            name: "PARA",
            tags: ["AI", "머신러닝", "음악추천"],
            description: "AI 연구 동아리 PARA입니다. 인공지능과 데이터 과학을 연구하고 프로젝트를 진행하고 있습니다.",
            logo: "/club/para.png",
            link: {
                website: "#",
                instagram: "https://www.instagram.com/"
            }
        }
    }
]