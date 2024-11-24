import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EventsPage.css";
import axios from "axios";

const EventsPage = () => {
  const [filters, setFilters] = useState({
    location: "",
    date: "",
    status: "",
  });

  const [events, setEvents] = useState([]);

  const navigate = useNavigate();

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const filteredEvents = events.filter((event) => {
    const matchLocation =
      filters.location === "" || event.location.includes(filters.location);
    const matchDate =
      filters.date === "" || event.start_date.startsWith(filters.date);
    const matchStatus =
      filters.status === "" || event.status === filters.status;
    return matchLocation && matchDate && matchStatus;
  });

  useEffect(() => {
    const getEvents = async () => {
      try {
        const accessToken = localStorage.getItem("access_token");
        const res = await axios.get(
          `http://localhost:8000/api/v1/event_blood/events/`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setEvents(res.data);
      } catch {}
    };

    getEvents();
  }, []);

  return (
    <div className="events-page">
      <h1>Sự Kiện Hiến Máu</h1>
      <div className="filters">
        <input
          type="text"
          name="location"
          placeholder="Địa điểm"
          value={filters.location}
          onChange={handleFilterChange}
        />
        <input
          type="date"
          name="date"
          value={filters.date}
          onChange={handleFilterChange}
        />
        <select
          name="status"
          value={filters.status}
          onChange={handleFilterChange}
        >
          <option value="">Tất cả trạng thái</option>
          <option value="Sắp diễn ra">Sắp diễn ra</option>
          <option value="Đang diễn ra">Đang diễn ra</option>
          <option value="Đã kết thúc">Đã kết thúc</option>
        </select>
      </div>
      <div className="event-list">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="event-card"
            onClick={() => navigate(`/events/${event.id}`)}
          >
            <div className="event-info">
              <h2>{event.name}</h2>
              <p>
                Thời gian: {event.start_date} / {event.end_date}
              </p>
              <p>Địa điểm: {event.location}</p>
              <p
                style={
                  event.status === "upcoming"
                    ? { color: "blue" }
                    : event.status === "ongoing"
                    ? { color: "green" }
                    : { color: "red" }
                }
              >
                Trạng thái:{" "}
                {event.status === "upcoming"
                  ? "Chuẩn bị diễn ra"
                  : event.status === "ongoing"
                  ? "Đang diễn ra"
                  : "Đã kết thúc"}
              </p>
              <p>
                Số người đăng ký:{" "}
                {
                  event.registrations.filter(
                    (registrationItem) =>
                      registrationItem.status === "registered"
                  ).length
                }
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
