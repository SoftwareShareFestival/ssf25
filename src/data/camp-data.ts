export interface CampInfo {
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
        slug: string; // URL-safe한 식별자 추가
        tags: string[];
        description: string;
        logo: string;
        link: {
            website: string;
            instagram: string;
        };
        catchphrase: string;
    };
}

export const campData: CampInfo[] = [
    {
        title: "Chrome 해킹해서 친구 검색기록 홈쳐보기",
        description: "브라우저를 직접 해킹하고, 해커의 입장에서 사용자의 정보가 어떻게 탈취되는지 체험해보세요. 공격자의 시선을 통해 보안을 이해하고, 실생활에서 나를 지킬 수 있는 방법까지 함께 배워봅니다.",
        imageSrc: "/camp/layer7.png",
        link: {
            share: "https://www.youtube.com/",
            reels: "https://www.instagram.com/sunrin_layer7",
            cardnews: "https://www.instagram.com/sunrin_layer7"
        },
        club: {
            color: "#000",
            name: "Layer7",
            slug: "layer7",
            tags: ["해킹", "Chrome", "피싱", "윤리"],
            description: "We Hack the Universe, 해킹을 통해 세상의 경계를 넓히는 Layer7입니다. 25년의 역사를 가지고 웹 해킹·리버스 엔지니어링·시스템 해킹 등 폭넓은 보안 분야를 탐구해 왔습니다. 동아리에서 활동하며 역량을 키운 우리는 그 실력을 바탕으로 DEFCON과 CODEGATE CTF 같은 세계적 대회에서 수상했으며, CODEGATE 국제 해킹 컨퍼런스 무대에서 자체 연구 프로젝트를 발표하는 등 우수한 성과를 거두고 있습니다.",
            logo: "/club/layer7.png",
            link: {
                website: "https://layer7.kr/",
                instagram: "https://instagram.com/sunrin_layer7"
            },
            catchphrase: '해킹 동아리'
        }
    },
    {
        title: "IoT 정찰병 : 움직이는 CCTV RC카",
        description: "라즈베리파이로 직접 CCTV RC카를 만들고, IoT 기술이 어떻게 작동하는지 체험해보세요. 센서와 카메라, 네트워크를 활용해 세상을 관찰하는 방법을 배우고, 실생활에 적용할 수 있는 IoT 기초를 쉽고 재미있게 익힙니다.",
        imageSrc: "/camp/iris.png",
        link: {
            share: "https://www.youtube.com/",
            reels: "https://www.instagram.com/",
            cardnews: "https://www.youtube.com/"
        },
        club: {
            color: "#5B80D7",
            name: "IRIS",
            slug: "iris",
            tags: ["Rc카", "사물인터넷", "리눅스", "라즈베리파이"],
            description: "IRIS는 선린인터넷고등학교 정보보호과의 전공 동아리로, IoT와 인공지능에 관심 있는 학생들이 모여 활동하고 있습니다. 저희는 C언어와 파이썬을 기반으로 프로그래밍을 배우며, 라즈베리파이와 아두이노를 활용해 IoT의 기본 원리와 인공지능의 핵심 개념을 익히고 있습니다",
            logo: "/club/iris.png",
            link: {
                website: "https://sunrin-iris.kr/",
                instagram: "https://www.instagram.com/sunrin_iris/"
            },
            catchphrase: '인공지능/IoT 동아리'
        }
    },
    {
        title: "JS로 감옥 탈출 게임 만들래 말래? 재밌어 보이긴 해 ~",
        description: "HTML, CSS, JavaScript를 사용하여 프론트엔드 상에서 작동하는 학교탈출 게임을 만들어 보고 직접 플레이 해보며 웹 개발을 경험해 볼 수 있습니다. 이를 통해, 웹 구조와 동작 원리에 대해서 배울 수 있습니다.",
        imageSrc: "/camp/teamlog.png",
        link: {
            share: "https://www.youtube.com/",
            reels: "https://www.instagram.com/",
            cardnews: "https://www.youtube.com/"
        },
        club: {
            color: "#EA3E45",
            name: "TeamLog",
            slug: "teamlog",
            tags: ["웹개발", "JavaScript", "감옥탈출"],
            description: "TeamLog는 서버 프로그래밍, 네트워크, 웹 개발에 관심 있는 학생들이 모여 함께 동아리 활동을 하며, 2013년 창설 이후 교내외 다양한 활동과 우수한 수상 실적을 이어오고 있으며, 웹 개발과 서버 구축 수업을 통해 프레임워크 기반 사이트 개발과 서버 운영 역량을 기르고, 웹·네트워크 보안을 융합한 정보보안 프로젝트도 수행하고 있습니다.",
            logo: "/club/teamlog.png",
            link: {
                website: "https://teamlog.kr/",
                instagram: "https://www.instagram.com/sunrin_teamlog"
            },
            catchphrase: '서버프로그래밍 동아리'
        }
    },
    {
        title: "클리어 못하면 퇴장불가 : 무한의 계단 게임 만들기",
        description: "Python으로 만드는 무한의 계단 게임! 본 캠프에선 꾸준히 사랑받는 언어인 Python과 게임 개발 라이브러리인 Pygame을 통해 무한의 계단을 직접 구현하는 활동을 합니다! 평소에 게임 개발에 관심이 있으셨던 분들이나, 게임을 좋아하시는 분들이 신청하시면 좋은 기회가 될 것 같습니다. 언젠가 한번 쯤은 들어봤던 무한의 계단 게임, 이번 기회에 한번 직접 구현해보는거 어떠신가요?",
        imageSrc: "/camp/unifox.png",
        link: {
            share: "https://www.youtube.com/",
            reels: "https://www.instagram.com/",
            cardnews: "https://www.youtube.com/"
        },
        club: {
            color: "#FF6D03",
            name: "Unifox",
            slug: "unifox",
            tags: ["게임", "무한의계단", "Python"],
            description: "Unifox는 선린인터넷고등학교 정보보호과 전공동아리로서 설립되어 개발과 보안 프로그래밍 분야에서 활동하고 있습니다. 보안 프로그래밍의 기본이 되는 알고리즘과 웹, 그리고 해킹을 공부하여 보안에 최적화된 개발을 할 수 있도록 돕습니다. 풍부한 경험을 쌓는 다양한 대회와 컨퍼런스 참여, 각자의 분야에서 깊은 탐구, 지식의 깊이를 더해주는 논문 작성 등 우리는 꿈과 미래에 대한 확신으로 가득 찬 친구들이 모여 함께 만들어 갑니다.",
            logo: "/club/unifox.png",
            link: {
                website: "https://unifox.kr/",
                instagram: "https://www.instagram.com/sunrin_unifox"
            },
            catchphrase: '프로그래밍 동아리'
        }
    },
    {
        title: "나만의 싸이월드 만들기",
        description: "2000년대 인터넷 문화를 주도했던 싸이월드, 그런 싸이월드를 직접 만들어보는건 어떨까요? 이번 캠프에서 싸이월드의 서버를 만들어보고, 싸이월드는 어떤식으로 이루어졌을지 고민해봐요.",
        imageSrc: "/camp/ana.png",
        link: {
            share: "https://www.youtube.com/",
            reels: "https://www.instagram.com/",
            cardnews: "https://www.youtube.com/"
        },
        club: {
            color: "#334882",
            name: "AnA",
            slug: "ana",
            tags: ["백엔드", "서버", "싸이월드", "데이터베이스"],
            description: "AnA는 2011년부터 활동한 선린인터넷고등학교 소프트웨어과 서버 개발 동아리입니다. AnA는 눈에 보이지 않는 곳에서 세상을 움직이는 기술을 개발하여, 세상을 연결하고 밝게 만들어 나가고 있습니다. AnA는 서버 구축, 백엔드 개발, 네트워킹, CI/CD 등 주로 서버에 관해 공부하며, 추가로 알고리즘, 자료 구조, 인공지능 등에 대해서도 공부하고 있습니다. 부원의 처음 실력과 관계없이 모든 부원이 최고의 실력을 갖출 수 있도록 기초반과 심화반을 운영하고 있습니다.",
            logo: "/club/ana.png",
            link: {
                website: "#",
                instagram: "https://www.instagram.com/sunrin_ana"
            },
            catchphrase: '서버 개발 동아리'
        }
    },
    {
        title: "Unity로 만드는 교내전투 로그라이크 게임",
        description: "저희 교내 전투 로그라이크 게임은 말 그대로 선린인터넷고등학교 내부를 배경으로 한 로그라이크 전투 게임입니다. 학교에서 다른 동아리들과 싸워 학교의 최강이 되는 게임을 유니티라는 도구를 이용해 여러분의 손으로 직접 제작해 볼수 있습니다.",
        imageSrc: "/camp/creal.png",
        link: {
            share: "https://www.youtube.com/",
            reels: "https://www.instagram.com/",
            cardnews: "https://www.youtube.com/"
        },
        club: {
            color: "#1DD8D6",
            name: "C,real",
            slug: "creal", // 쉼표 제거된 slug
            tags: ["학교", "게임개발", "로그라이크"],
            description: "Creating game, Reality of imagination. C,real은 2024년 RG(Repulic of Game)와 Zer0pen이라는 게임 동아리가 합쳐진 선린인터넷고등학교 유일 게임 개발 전공 동아리 입니다. C,real은 게임 개발에서 가장 많이 활용되는 유니티 엔진과 유니티 엔진에서 사용하는 C#언어, 그리고 게임 디자인과 기획까지  배울수 있습니다.",
            logo: "/club/creal.png",
            link: {
                website: "https://sunrint-creal.com",
                instagram: "https://www.instagram.com/c.real._"
            },
            catchphrase: '게임 개발 동아리'
        }
    },
    {
        title: "웹으로 만드는 나만의 수박게임",
        description: "모두가 익숙하게 알고 즐길 수 있는 '수박 게임'을, 기성 에셋이나 외부 리소스를 활용하지 않고 오로지 자체 제작한 그래픽과 에셋, 웹 개발자 지망생이라면 알고 있어야 할 기초인 HTML, CSS, JS(JavaScript)를 이용하여 제작합니다.",
        imageSrc: "/camp/tapie.png",
        link: {
            share: "https://www.youtube.com/",
            reels: "https://www.instagram.com/",
            cardnews: "https://www.youtube.com/"
        },
        club: {
            color: "#000",
            name: "TAPIE",
            slug: "tapie",
            tags: ["웹_게임 #JS_프로그래밍", "HTML5", "CSS"],
            description: "TAPIE는 App\:ple Pi, EDCAN, IWOP가 합쳐져 새롭게 만들어진 선린인터넷고 소프트웨어과 전공 동아리로, 세상에 존재하는 다양한 간극을 소프트웨어로 이어붙이자는 신념 아래 전공 역량을 바탕으로 끊임없이 노력하고 있으며, 이번 테이피 소프트웨어 나눔 축제에 신청해주셔서 진심으로 감사드리며 좋은 추억과 경험이 될 수 있도록 최선을 다하겠습니다.",
            logo: "/club/tapie.png",
            link: {
                website: "https://tapie.kr/",
                instagram: "https://www.instagram.com/sunrin_tapie"
            },
            catchphrase: '웹/앱 개발 동아리'
        }
    },
    {
        title: "내 기분에 따라 플레이리스트를 추천해주는 AI 만들기",
        description: "ChatGPT를 활용하여 나와 친구처럼 대화하고, 내 기분에 따라 플레이리스트를 추천해주는 AI를 만들어볼 수 있습니다.",
        imageSrc: "/camp/para.png",
        link: {
            share: "https://www.youtube.com/",
            reels: "https://www.instagram.com/",
            cardnews: "https://www.youtube.com/"
        },
        club: {
            color: "#9966FF",
            name: "PARA",
            slug: "para",
            tags: ["AI", "인공지능", "LLM","PARA"],
            description: "Para는 Project Achievement Research AI 라는 뜻을 가진 동아리로 인공지능에 대해 연구하고 활용하여 개발하는 인공지능 서비스 개발 전공 동아리입니다.",
            logo: "/club/para.png",
            link: {
                website: "https://sunrin-para.dev",
                instagram: "https://www.instagram.com/sunrin_para"
            },
            catchphrase: '인공지능 동아리'
        }
    }
];

export const campDataBySlug: { [slug: string]: CampInfo } = Object.fromEntries(
    campData.map(camp => [camp.club.slug, camp])
);

export const campDataByClub: { [clubName: string]: CampInfo } = Object.fromEntries(
    campData.map(camp => [camp.club.name, camp])
);