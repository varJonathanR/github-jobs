export function timeAgo(dateString) {
    const currentDate = new Date();
    const date = new Date(dateString);
    const timeDifference = currentDate - date;
    const secondsInMillisecond = 1000;
    const minutesInMillisecond = secondsInMillisecond * 60;
    const hoursInMillisecond = minutesInMillisecond * 60;
    const daysInMillisecond = hoursInMillisecond * 24;
    const monthsInMillisecond = daysInMillisecond * 30;

    if (timeDifference < minutesInMillisecond) {
        const seconds = Math.floor(timeDifference / secondsInMillisecond);
        return `${seconds} second${seconds === 1 ? '' : 's'} ago`;
    } else if (timeDifference < hoursInMillisecond) {
        const minutes = Math.floor(timeDifference / minutesInMillisecond);
        return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
    } else if (timeDifference < daysInMillisecond) {
        const hours = Math.floor(timeDifference / hoursInMillisecond);
        return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    } else if (timeDifference < monthsInMillisecond) {
        const days = Math.floor(timeDifference / daysInMillisecond);
        return `${days} day${days === 1 ? '' : 's'} ago`;
    } else {
        const months = Math.floor(timeDifference / monthsInMillisecond);
        return `${months} month${months === 1 ? '' : 's'} ago`;
    }
}