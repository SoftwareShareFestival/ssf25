export const leftTime = () => {
    const targetDate = new Date('2025-09-07T23:59:59');
    const now = new Date();
    const diff = Math.max(0, targetDate.getTime() - now.getTime());
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // Format each unit to be 2 digits with leading zeros
    const format = (num: number) => num.toString().padStart(2, '0');
    
    if (days > 0) {
        return `${days}일 ${format(hours)} : ${format(minutes)} : ${format(seconds)}`;
    } else {
        return `${format(hours)} : ${format(minutes)} : ${format(seconds)}`;
    }
}