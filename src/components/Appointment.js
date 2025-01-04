import React, { useEffect, useState } from "react";
import "./Appointment.css";
import ScrollToTopButton from "../components/ScrollToTopButton";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { convertDateTimeFormat } from "../utils";

const Appointment = () => {
  const [events, setEvents] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const accessToken = localStorage.getItem("access_token");
        const decodedToken = jwtDecode(accessToken);
        const res = await axios.get(
          `http://localhost:8000/api/v1/event_blood/events/`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const newEvents = res.data.filter(
          (eventItem) =>
            eventItem.registrations.findIndex(
              (registrationItem) =>
                registrationItem.user.id === decodedToken.user_id
            ) !== -1
        );
        setUserId(decodedToken.user_id);
        setEvents(newEvents);
      } catch {}
    };

    getEvents();
  }, []);

  const handleCancel = async (eventId) => {
    const confirmCancel = window.confirm(
      "Bạn có chắc muốn hủy đăng ký sự kiện này?"
    );
    if (confirmCancel) {
      try {
        const accessToken = localStorage.getItem("access_token");
        await axios.put(
          `http://localhost:8000/api/v1/registration_blood/api/donor-registrations/${eventId}/cancel/`,
          {},
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        // Cập nhật danh sách sự kiện sau khi hủy
        setEvents((prevEvents) =>
          prevEvents.filter((event) => event.id !== eventId)
        );
        alert("Hủy đăng ký thành công!");
        window.location.reload();
      } catch (error) {
        console.error("Error canceling event:", error);
        alert("Không thể hủy đăng ký, vui lòng thử lại!");
      }
    }
  };

  return (
    <div className="main-container">
      <div className="appointment-container">
        {/* Scroll to top button */}
        <ScrollToTopButton />

        <h1>Danh sách Sự kiện đã đăng ký</h1>
        <table className="event-table">
          <thead>
            <tr>
              <th>Tên sự kiện</th>
              <th>Thời gian</th>
              <th>Địa điểm</th>
              <th>Trạng thái sự kiện</th>
              <th>Số người đăng ký</th>
              <th>Trạng thái đăng ký</th>
              <th>Ngày đăng ký</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>{event.name}</td>
                <td>
                  {event.start_date} / {event.end_date}
                </td>
                <td>{event.location}</td>
                <td
                  style={
                    event.status === "Chuẩn bị diễn ra"
                      ? { color: "blue" }
                      : event.status === "Đang diễn ra"
                      ? { color: "green" }
                      : { color: "red" }
                  }
                >
                  {event.status}
                </td>
                <td>
                  {
                    event.registrations.filter(
                      (registrationItem) =>
                        registrationItem.status === "registered"
                    ).length
                  }
                </td>
                <td>
                  {event.registrations.find(
                    (registrationItem) => registrationItem.user.id === userId
                  )?.status === "registered"
                    ? "Đã đăng ký"
                    : event.registrations.find(
                        (registrationItem) =>
                          registrationItem.user.id === userId
                      )?.status === "cancelled"
                    ? "Đã hủy"
                    : "Đã hoàn thành"}
                </td>
                <td>
                  {convertDateTimeFormat(
                    event.registrations.find(
                      (registrationItem) => registrationItem.user.id === userId
                    )?.registration_date
                  )}
                </td>
                <td>
                  {event.registrations.find(
                    (registrationItem) => registrationItem.user.id === userId
                  )?.status === "registered" && (
                    <button
                      className="cancel-button"
                      onClick={() =>
                        handleCancel(
                          event.registrations.find(
                            (registrationItem) =>
                              registrationItem.user.id === userId
                          )?.id
                        )
                      }
                      style={
                        event.status === "completed" ? { display: "none" } : {}
                      }
                    >
                      Hủy
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointment;
