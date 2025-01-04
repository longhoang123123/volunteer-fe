export const convertDateFormat = (dateStr) => {
  const [day, month, year] = dateStr.split("-"); // Tách chuỗi thành ngày, tháng, năm
  return `${year}-${month}-${day}`; // Sắp xếp lại theo định dạng yyyy-mm-dd
};

export const convertDateTimeFormat = (originDate) => {
  if (!originDate) return null;
  const date = new Date(originDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
