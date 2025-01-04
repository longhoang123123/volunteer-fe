import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EventDetailPage.css";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const EventDetailPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getEvent = async () => {
      try {
        setLoading(true);
        const accessToken = localStorage.getItem("access_token");
        const decodedToken = jwtDecode(accessToken);
        const res = await axios.get(
          `http://localhost:8000/api/v1/event_blood/events/${id}/`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setEvent(res.data);
        setUserId(decodedToken.user_id);
      } catch {
      } finally {
        setLoading(false);
      }
    };

    getEvent();
  }, []);

  if (!event) {
    return <div>Sự kiện không tồn tại.</div>;
  }

  const handleRegister = async () => {
    try {
      setLoading(true);
      const accessToken = localStorage.getItem("access_token");
      const decodedToken = jwtDecode(accessToken);
      const res = await axios.post(
        `http://localhost:8000/api/v1/registration_blood/api/donor-registrations/`,
        {
          user_id: decodedToken.user_id,
          event_id: id,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setEvent(res.data);
      alert("Bạn đã đăng ký thành công!");
    } catch {
    } finally {
      setLoading(false);
    }

    navigate("/appointment");
  };

  return (
    <div className="event-detail">
      <h1>{event?.name}</h1>
      <p>
        <strong>Thời gian:</strong> {event?.start_date} / {event?.end_date}
      </p>
      <p>
        <strong>Địa điểm:</strong> {event?.location}
      </p>
      <p>
        <strong>Trạng thái:</strong> {event?.status}
      </p>
      <p>
        <strong>Số người tham gia:</strong>{" "}
        {
          event.registrations.filter(
            (registrationItem) => registrationItem.status === "registered"
          ).length
        }
      </p>
      <p>
        <strong>Mô tả:</strong> {event?.description}
      </p>
      <p>
        <strong>Liên hệ tổ chức:</strong> gmv@intelin.vn
      </p>
      <button
        className={`register-btn ${
          event.registered >= event.needed ? "disabled" : ""
        }`}
        onClick={event.registered >= event.needed ? null : handleRegister}
        style={
          event?.registrations.findIndex(
            (registrationItem) => registrationItem.user.id === userId
          ) !== -1 &&
          event?.registrations.find(
            (registrationItem) => registrationItem.user.id === userId
          )?.status === "registered"
            ? { display: "none" }
            : {}
        }
        disabled={loading}
      >
        {event.registered >= event.needed ? "Hết chỗ" : "Đăng ký ngay"}
      </button>
    </div>
  );
};

export default EventDetailPage;
