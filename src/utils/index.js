export const convertDateFormat = (dateStr) => {
  const [day, month, year] = dateStr.split("-"); // Tách chuỗi thành ngày, tháng, năm
  return `${year}-${month}-${day}`; // Sắp xếp lại theo định dạng yyyy-mm-dd
};
