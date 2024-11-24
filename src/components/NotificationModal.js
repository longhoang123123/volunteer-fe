import React, { useState } from 'react';
import './NotificationModal.css';

const NotificationModal = ({ isOpen, onClose }) => {
  const [selectedFilter, setSelectedFilter] = useState('all'); // Theo dõi bộ lọc đang hoạt động
  const [notifications, setNotifications] = useState([
    { id: 1, title: "THÔNG BÁO", date: "27/08/2024", time: "2 tháng trước", type: "general", read: false },
    { id: 2, title: "KHẢO SÁT HÀI LÒNG NGƯỜI HIẾN MÁU/ TIỂU CẦU", date: "26/08/2024", time: "2 tháng trước", type: "survey", read: false },
    { id: 3, title: "THÔNG BÁO LỊCH LÀM VIỆC DỊP LỄ QUỐC KHÁNH (1/9 & 2/9)", date: "16/08/2024", time: "3 tháng trước", type: "event", read: false },
    // Thêm thông báo khác nếu cần...
  ]);

  // Hàm xử lý thay đổi bộ lọc
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  // Lọc thông báo dựa trên bộ lọc đang chọn
  const filteredNotifications = notifications.filter(notification => 
    selectedFilter === 'all' || 
    (selectedFilter === 'unread' && !notification.read) || 
    notification.type === selectedFilter
  );

  // Hàm đánh dấu tất cả thông báo là đã đọc
  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  // Hàm thay đổi trạng thái đọc/chưa đọc cho một thông báo
  const toggleReadStatus = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: !notification.read } : notification
    ));
  };

  return (
    isOpen && (
      <div className="notification-modal-overlay">
        <div className="notification-modal">
          <div className="modal-header">
            <h2>Thông báo</h2>
          </div>

          {/* Các nút lọc */}
          <div className="notification-filters">
            <button
              onClick={() => handleFilterChange('all')}
              className={selectedFilter === 'all' ? 'active' : ''}
            >
              Tất cả
            </button>
            <button
              onClick={() => handleFilterChange('unread')}
              className={selectedFilter === 'unread' ? 'active' : ''}
            >
              Chưa đọc
            </button>
            <button
              onClick={() => handleFilterChange('reminder')}
              className={selectedFilter === 'reminder' ? 'active' : ''}
            >
              Nhắc nhở
            </button>
            <button
              onClick={() => handleFilterChange('event')}
              className={selectedFilter === 'event' ? 'active' : ''}
            >
              Sự kiện
            </button>
            <button
              onClick={() => handleFilterChange('news')}
              className={selectedFilter === 'news' ? 'active' : ''}
            >
              Tin tức
            </button>
          </div>

          {/* Danh sách thông báo */}
          <div>
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map(notification => (
                <div key={notification.id} className={`notification-item ${notification.read ? 'read' : 'unread'}`}>
                  <div className="notification-title">{notification.title}</div>
                  <div className="notification-date">{notification.date}</div>
                  <div className="notification-time">{notification.time}</div>
                  <div className="notification-actions">
                    {!notification.read && (
                      <button onClick={() => toggleReadStatus(notification.id)}>Đánh dấu đã đọc</button>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p>Không có thông báo nào.</p>
            )}
          </div>

          {/* Nút "Đánh dấu đã đọc tất cả" */}
          <div className="mark-all-read">
            <button onClick={markAllAsRead}>Đánh dấu đã đọc tất cả</button>
            <button onClick={onClose} className="close-button">Đóng</button>
          </div>
        </div>
      </div>
    )
  );
};

export default NotificationModal;
