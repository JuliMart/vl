import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Contacto = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-brand-dark text-brand-text px-6 py-24 min-h-screen">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white">{t("contact.title")}</h2>
          <p className="text-lg text-brand-muted">
            {t("contact.subtitle")}
          </p>

          <div className="space-y-6 text-brand-muted text-base">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-brand-accent text-xl" />
              <span>{t("contact.email_label")}</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-brand-accent text-xl" />
              <span>+56 930876984</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-brand-accent text-xl" />
              <span>{t("contact.location_label")}</span>
            </div>
            <div className="flex items-center gap-4">
              <FaCalendarAlt className="text-brand-accent text-xl" />
              <button
                className="text-white font-semibold hover:text-brand-accent transition"
              >
                {t("contact.schedule_label")}
              </button>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-brand-surface p-8 rounded-lg shadow-2xl space-y-5 border border-gray-800"
        >
          <input
            type="text"
            name="name"
            placeholder={t("contact.form.name_placeholder")}
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-brand-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-brand-accent transition"
          />
          <input
            type="email"
            name="email"
            placeholder={t("contact.form.email_placeholder")}
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-brand-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-brand-accent transition"
          />
          <input
            type="tel"
            name="phone"
            placeholder={t("contact.form.phone_placeholder")}
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-brand-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-brand-accent transition"
          />
          <textarea
            name="message"
            placeholder={t("contact.form.message_placeholder")}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-brand-dark border border-gray-700 rounded-md h-32 resize-none text-white focus:outline-none focus:border-brand-accent transition"
          />
          <button
            type="submit"
            className="w-full bg-brand-accent hover:bg-blue-600 text-white py-3 rounded-md transition font-semibold"
          >
            {t("contact.form.submit_btn")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;
