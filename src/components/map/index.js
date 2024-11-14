import React, { useState } from "react";
import Draggable from "react-draggable";
import s from "./style.module.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
const Map = () => {
  const initialWorkspaces = [
    { id: 1, position: [51.505, -0.09], status: "available" },
    { id: 2, position: [51.515, -0.1], status: "available" },
    // Добавьте больше рабочих мест
  ];
  const [workspaces] = useState(initialWorkspaces);
  const [selectedWorkspace, setSelectedWorkspace] = useState(null);

  const handleBooking = (workspace) => {
    // Логика бронирования
    console.log(`Бронирование рабочего места ${workspace.id}`);
    // Здесь можно обновить статус рабочего места и сохранить его на сервере
    setSelectedWorkspace(null);
  };

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {workspaces.map((workspace) => (
        <Marker key={workspace.id} position={workspace.position}>
          <Popup>
            <div>
              <h3>Рабочее место {workspace.id}</h3>
              <button onClick={() => setSelectedWorkspace(workspace)}>
                Забронировать
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
      {selectedWorkspace && (
        <div className="booking-form">
          <h2>Бронирование рабочего места {selectedWorkspace.id}</h2>
          {/* Здесь можно добавить форму для ввода информации */}
          <button onClick={() => handleBooking(selectedWorkspace)}>
            Подтвердить бронирование
          </button>
        </div>
      )}
    </MapContainer>
  );
};
export default Map;
