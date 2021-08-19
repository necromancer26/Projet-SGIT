import React from "react";
import ContactForm from "../../Components/ContactForm/ContactForm";
import SimpleMap from "../../Components/Maps/GoogleMaps";
import ContactInfo from "../../Components/ContactInfo/ContactInfo";
import "./Contact.css";

export default function Contact() {
  return (
    <div>
      <div
        className="page-top">
        <h1>
          Contact | SGIT Solution de Gestion Intégrée de Tunisie{" "}
        </h1>
      </div>
      <div>
        <SimpleMap zoom={18} lat={36.850251} lng={10.157386} />
      </div>

      <div className="card-container-contact">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}
