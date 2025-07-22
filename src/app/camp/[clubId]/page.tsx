import { campDataByClub } from '@/data/camp-data';
import CampClient from './client';

export default async function CampPage({ params }: { params: { clubId: string } }) {
    const clubName = decodeURIComponent(params.clubId);
    const info = campDataByClub[clubName];
    
    return <CampClient clubInfo={info} />;
}

export async function generateStaticParams() {
    return Object.keys(campDataByClub).map(clubId => ({
        clubId: encodeURIComponent(clubId)
    }));
}

export async function generateMetadata({ params }: { params: { clubId: string } }) {
    const clubName = decodeURIComponent(params.clubId);
    const info = campDataByClub[clubName];
    
    return {
        title: info?.title || '캠프 정보',
        description: info?.description || '캠프 상세 정보를 확인해보세요.',
    };
}