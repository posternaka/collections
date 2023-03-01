import moment from "moment";

export const formatDate = (date) => {
    return moment.utc(date).local().format('YYYY-MM-DD HH:mm:ss');
}