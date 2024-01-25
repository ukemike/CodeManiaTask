import moment from "moment";

export const formatDate = (initialDate: any): any => {
  const formatted = moment(initialDate).format("dddd, Do MMMM YYYY");
  return formatted;
};

export const formatTime = (initialDate: string): string => {
  const formatted = moment(initialDate).format("h:mm a");
  return formatted;
};

export const formatDays = (initialDate: string): string => {
  const formatted = moment(initialDate).fromNow();
  return formatted;
};

export const shortenText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substr(0, maxLength) + "...";
};

export const formatDate2 = (initialDate: string): string => {
  const formatted = moment(initialDate).format("DD MMM YYYY");
  return formatted;
};