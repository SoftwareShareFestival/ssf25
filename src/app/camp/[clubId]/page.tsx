import { campDataByClub, campData } from '@/data/camp-data';
import CampClient from './client';

export default async function CampPage({
	params,
}: {
	params: Promise<{ clubId: string }>;
}) {
	const { clubId } = await params;
	const clubName = decodeURIComponent(clubId);
	const info = campDataByClub[clubName];

	return <CampClient clubInfo={info} allClubList={campData} />;
}

export async function generateStaticParams() {
	return Object.keys(campDataByClub).map((clubId) => ({
		clubId: encodeURIComponent(clubId),
	}));
}
