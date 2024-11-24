// src/components/NewsDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './NewsDetail.css'; 
// Import images
import img1 from '../images/1-.jpg'; 
import img2 from '../images/2-.jpg'; 
import img3 from '../images/3-.jpg'; 
import img4 from '../images/4-.png';


const newsArticles = [
  {
    id: 1,
    title: 'TP.HCM tri ân người hiến máu nhiều lần có hoàn cảnh khó khăn',
    date: '2024-09-01',
    content: `Theo Ban chỉ đạo vận động hiến máu tình nguyện TP.HCM, giai đoạn trước năm 1994, nguồn máu cho điều trị người bệnh chủ yếu từ người cho máu lấy tiền, người bán máu, người nhà cho máu.

              Cả nước tiếp nhận được trên 100.000 đơn vị máu thì trên 90% lượng máu tiếp nhận từ người cho máu lấy tiền (số liệu năm 1993). Tại TP.HCM thời điểm này, gần 100% người hiến máu chuyên nghiệp (người bán máu).

              Năm 1999, tỷ lệ người hiến máu tình nguyện mới chỉ đạt 21%; đến năm 2010, tỷ lệ hiến máu tình nguyện tăng trên 90%. Và từ năm 2014 đến nay, gần 100% người hiến máu tình nguyện, đã đáp ứng được nhu cầu điều trị cho người bệnh tại các cơ sở y tế trên địa bàn Thành phố, hỗ trợ cho các tỉnh miền Tây Nam Bộ.

              “Mỗi giọt máu cho đi, là một cuộc đời ở lại”, hiến máu cứu người là một nghĩa cử cao đẹp, đã cứu giúp những bệnh nhân đang trong cơn nguy kịch, đặc biệt khi người hiến máu có hoàn cảnh kinh tế thiếu thốn, khó khăn vẫn sẵn sàng hiến tặng…

              Hành động ấy chính là giá trị tốt đẹp của cuộc sống, không lời nào có thể diễn tả hết nét đẹp cao quý ấy trong hoạt động hiến máu tình nguyện tại TP.HCM những năm qua.

              Nhằm tri ân đến những người hiến máu tình nguyện có hoàn cảnh khó khăn, trong sáng nay, Ban chỉ đạo vận động hiến máu tình nguyện đã tổ chức trao quà đến 195 người (gồm 1 triệu đồng tiền mặt và quà tặng).`,
    img: img1, // Đường dẫn đến hình ảnh
  },
  {
    id: 2,
    title: 'Tiêu đề bài viết 2',
    date: '2024-09-15',
    content: 'Nội dung chi tiết bài viết 2. Đây là một ví dụ khác về nội dung bài viết tin tức.',
    img: img2,
  },
  {
    id: 3,
    title: 'Tiêu đề bài viết 3',
    date: '2024-09-20',
    content: 'Nội dung chi tiết bài viết 3. Đây là một ví dụ bổ sung về nội dung bài viết tin tức.',
    img: img3,
  },
  {
    id: 4,
    title: 'Tiêu đề bài viết 4',
    date: '2024-09-25',
    content: 'Nội dung chi tiết bài viết 4. Đây là một ví dụ thêm về nội dung bài viết tin tức.',
    img: img4,
  },
  // Thêm nhiều bài viết khác nếu cần
];

const NewsDetail = () => {
  const { id } = useParams();
  const article = newsArticles.find(article => article.id === parseInt(id));

  if (!article) {
    return <h2>Bài viết không tồn tại.</h2>;
  }

  return (
    <div className="news-detail">
      <h1>{article.title}</h1>
      <p className="news-date">{article.date}</p>
      {article.img && <img src={article.img} alt={article.title} className="news-image" />} {/* Hiển thị hình ảnh nếu có */}
      <p>{article.content}</p>
    </div>
  );
};

export default NewsDetail;
