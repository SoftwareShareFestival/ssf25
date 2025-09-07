export const leftTime = () => {
    const targetDate = new Date('2025-09-07T23:59:59+09:00');
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();
    
    if (diff <= 0) {
        return '00:00:00';
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    const format = (num: number) => num.toString().padStart(2, '0');
    
    if (days > 0) {
        return `${days}일 ${format(hours)}:${format(minutes)}:${format(seconds)}`;
    } else {
        return `${format(hours)}:${format(minutes)}:${format(seconds)}`;
    }
}