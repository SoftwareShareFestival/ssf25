import { campDataBySlug, campData } from '@/data/camp-data';
import CampClient from './client';

export default async function CampPage({
	params,
}: {
	params: Promise<{ clubId: string }>;
}) {
	const { clubId } = await params;
	// slug로 조회
	const info = campDataBySlug[clubId];

	return <CampClient clubInfo={info} allClubList={campData} />;
}

export async function generateStaticParams() {
	return Object.keys(campDataBySlug).map((clubSlug) => ({
		clubId: clubSlug,
	}));
}