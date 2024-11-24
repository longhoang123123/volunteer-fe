// src/components/News.js
import React from 'react';
import { Link } from 'react-router-dom';
import './News.css';
import ScrollToTopButton from '../components/ScrollToTopButton';

// Import images
import img1 from '../images/0.jpg';
import img3 from '../images/OIP.jpg';

const newsArticles = [
  {
    id: 1,
    title: 'TP.HCM tri ân người hiến máu nhiều lần có hoàn cảnh khó khăn',
    date: '2024-09-01',
    content: 'Theo Ban chỉ đạo vận động hiến máu tình nguyện TP.HCM, giai đoạn trước năm 1994, nguồn máu cho điều trị người bệnh chủ yếu từ người cho máu lấy tiền, người bán máu, người nhà cho máu. Nội dung bài viết 1. Đây là một ví dụ về nội dung bài viết tin tức.',
    img: img1, 
  },
  {
    id: 2,
    title: 'Tiêu đề bài viết 2',
    date: '2024-09-15',
    content: 'Nội dung bài viết 2. Đây là một ví dụ khác về nội dung bài viết tin tức.',
    img: img1, 
  },
  {
    id: 3,
    title: 'Tiêu đề bài viết 3',
    date: '2024-09-20',
    content: 'Nội dung bài viết 3. Đây là một ví dụ bổ sung về nội dung bài viết tin tức.',
    img: img3, 
  },
  {
    id: 4,
    title: 'Tiêu đề bài viết 4',
    date: '2024-09-25',
    content: 'Nội dung bài viết 4. Đây là một ví dụ thêm về nội dung bài viết tin tức.',
    img: img1, 
  },
  // Thêm nhiều bài viết khác nếu cần
];

const News = () => {
  return (
    
    <div className="news-container">
     
        <ScrollToTopButton />
      <h1>Tin Tức</h1>
      <div className="news-grid">
        {newsArticles.map((article) => (
          <article key={article.id} className="news-article">
            <Link to={`/news/${article.id}`} className="news-link">
              {article.img && (
                <img
                  src={article.img}
                  alt={article.title}
                  className="news-image"
                />
              )}
              <h2 className="news-title">{article.title}</h2>
            </Link>
            <p className="news-date">{article.date}</p>
            <p className="news-content">
              {article.content.length > 100 ? `${article.content.substring(0, 100)}...` : article.content}
              <Link to={`/news/${article.id}`} className="read-more"> Đọc thêm</Link>
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default News;
