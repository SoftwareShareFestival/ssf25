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