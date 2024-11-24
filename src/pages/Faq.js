// src/Faq.js
import React from 'react';
import Question from '../components/Question';
import ScrollToTopButton from '../components/ScrollToTopButton';

import './Faq.css';

const Faq = () => {
  return (
    <div className="faq-container">
    <div>
    
      <ScrollToTopButton />
      <h1 className="faq-title">Lưu ý quan trọng</h1>
      <Question
        question="1. Ai có thể tham gia hiến máu?"
        answer={
          <ul>
            <li>Tất cả mọi người từ 18 - 60 tuổi, thực sự tình nguyện hiến máu của mình để cứu chữa người bệnh.</li>
            <li>Cân nặng ít nhất là 45kg đối với phụ nữ và nam giới. Lượng máu hiến mỗi lần không quá 9ml/kg cân nặng và không quá 500ml mỗi lần.</li>
            <li>Không bị nhiễm hoặc không có các hành vi lây nhiễm HIV và các bệnh lây nhiễm qua đường truyền máu khác.</li>
            <li>Thời gian giữa 2 lần hiến máu là 12 tuần đối với cả Nam và Nữ.</li>
            <li>Có giấy tờ tùy thân.</li>
          </ul>
        }
      />
      <Question
        question="2. Ai là người không nên hiến máu?"
        answer={
          <ul>
            <li>Người đã nhiễm hoặc đã thực hiện hành vi có nguy cơ nhiễm HIV, viêm gan B, viêm gan C, và các virus lây qua đường truyền máu.</li>
            <li>Người có các bệnh mãn tính: tim mạch, huyết áp, hô hấp, dạ dày.</li>
          </ul>
        }
      />
      <Question
        question="3. Máu của tôi sẽ được làm những xét nghiệm gì?"
        answer={
          <ul>
            <li>Tất cả những đơn vị máu thu được sẽ được kiểm tra nhóm máu (hệ ABO, hệ Rh), HIV, virus viêm gan B, virus viêm gan C, giang mai, sốt rét.</li>
            <li>Bạn sẽ được thông báo kết quả, được giữ kín và được tư vấn (miễn phí) khi phát hiện ra các bệnh nhiễm trùng nói trên.</li>
          </ul>
        }
      />
      <Question
        question="4. Máu gồm những thành phần và chức năng gì?"
        answer={
          <ul>
            <p>Máu là một chất lỏng lưu thông trong các mạch máu của cơ thể, gồm nhiều thành phần, mỗi thành phần làm nhiệm vụ khác nhau:</p>
            <li>Hồng cầu làm nhiệm vụ chính là vận chuyển oxy.</li>
            <li>Bạch cầu làm nhiệm vụ bảo vệ cơ thể.</li>
            <li>Tiểu cầu tham gia vào quá trình đông cầm máu.</li>
            <li>Huyết tương: gồm nhiều thành phần khác nhau: kháng thể, các yếu tố đông máu, các chất dinh dưỡng...</li>
          </ul>
        }
      />
      <Question
        question="5. Tại sao lại có nhiều người cần phải được truyền máu?"
        answer={
          <ul>
            <p>Mỗi giờ có hàng trăm người bệnh cần phải được truyền máu vì:</p>
            <li>Bị mất máu do chấn thương, tai nạn, thảm hoạ, xuất huyết tiêu hoá...</li>
            <li>Do bị các bệnh gây thiếu máu, chảy máu: ung thư máu, suy tuỷ xương, máu khó đông...</li>
            <li>Các phương pháp điều trị hiện đại cần truyền nhiều máu: phẫu thuật tim mạch, ghép tạng...</li>
          </ul>
        }
      />
      <Question
        question="6. Nhu cầu máu điều trị ở nước ta hiện nay?"
        answer={
          <ul>
            <li>Mỗi năm nước ta cần khoảng 1.800.000 đơn vị máu điều trị.</li>
            <li>Máu cần cho điều trị hằng ngày, cho cấp cứu, cho dự phòng các thảm họa, tai nạn cần truyền máu với số lượng lớn.</li>
            <li>Hiện tại chúng ta đã đáp ứng được khoảng 54% nhu cầu máu cho điều trị.</li>
          </ul>
        }
      />
      <Question
        question="7. Tại sao khi tham gia hiến máu lại cần phải có giấy CMND?"
        answer={
          <ul>
            <p>Mỗi đơn vị máu đều phải có hồ sơ, trong đó có các thông tin về người hiến máu. 
            Theo quy định, đây là một thủ tục cần thiết trong quy trình hiến máu để đảm bảo tính xác thực thông tin về người hiến máu.</p>
          </ul>
        }
      />
      <Question
        question="8. Hiến máu nhân đạo có hại đến sức khoẻ không?"
        answer={
          <ul>
            <p>Hiến máu theo hướng dẫn của thầy thuốc không có hại cho sức khỏe. Điều đó đã được chứng minh bằng các cơ sở khoa học và thực tế:</p>
            <li>Máu có nhiều thành phần, mỗi thành phần chỉ có đời sống nhất định và luôn luôn được đổi mới hàng ngày. Ví dụ: Hồng cầu sống được 120 ngày, huyết tương thường xuyên được thay thế và đổi mới. Cơ sở khoa học cho thấy, nếu mỗi lần hiến dưới 1/10 lượng máu trong cơ thể thì không có hại đến sức khỏe.</li>
            <li>Nhiều công trình nghiên cứu đã chứng minh rằng, sau khi hiến máu, các chỉ số máu có thay đổi chút ít nhưng vẫn nằm trong giới hạn sinh lý bình thường không hề gây ảnh hưởng đến các hoạt động thường ngày của cơ thể.</li>
            <li>Thực tế đã có hàng triệu người hiến máu nhiều lần mà sức khỏe vẫn hoàn toàn tốt. Trên thế giới có người hiến máu trên 400 lần. Ở Việt Nam, người hiến máu nhiều lần nhất đã hiến gần 100 lần, sức khỏe hoàn toàn tốt.</li>
            <li>Mỗi người nếu thấy sức khoẻ tốt, không có các bệnh lây nhiễm qua đường truyền máu, đạt tiêu chuẩn hiến máu thì có thể hiến máu từ 3-4 lần trong một năm, vừa không ảnh hưởng xấu đến sức khoẻ của bản thân, vừa đảm bảo máu có chất lượng tốt, an toàn cho người bệnh.</li>
          </ul>
        }
      />
      <Question
        question="9. Khi hiến máu có thể bị nhiễm bệnh không?"
        answer={
          <ul>
            <li>Kim dây lấy máu vô trùng, chỉ sử dụng một lần cho một người, vì vậy không thể lây bệnh cho người hiến máu.</li>
          </ul>
        }
      />
    </div>
    </div>
  );
}

export default Faq;
