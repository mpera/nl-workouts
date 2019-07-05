import moment from 'moment';

const timeGreeting = () => {
    const hour = moment().hour();
    if (hour < 12) {
        return "Good morning";
    }
    if (hour >= 12 && hour < 17) {
        return "Good afternoon";
    }
    return "Good evening";
}

export default timeGreeting;
