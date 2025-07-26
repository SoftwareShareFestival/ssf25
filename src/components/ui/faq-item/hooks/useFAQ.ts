'use client'

import { useState } from 'react';

export const useFAQ = () => {
	const [openItems, setOpenItems] = useState<number[]>([]);

	const toggleItem = (id: number) => {
		setOpenItems((prev) =>
			prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
		);
	};

	const isOpen = (id: number) => openItems.includes(id);

	return {
		openItems,
		toggleItem,
		isOpen,
	};
};
