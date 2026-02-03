// Services.js
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("services.custom_dev.title"),
      description: t("services.custom_dev.desc"),
      route: "/contacto",
    },
    {
      title: t("services.mobile_dev.title"),
      description: t("services.mobile_dev.desc"),
      route: "/contacto",
    },
    {
      title: t("services.cloud_dev.title"),
      description: t("services.cloud_dev.desc"),
      route: "/contacto",
    },
    {
      title: t("services.consulting.title"),
      description: t("services.consulting.desc"),
      route: "/contacto",
    },
    {
      title: t("services.ux_ui.title"),
      description: t("services.ux_ui.desc"),
      route: "/contacto",
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-brand-dark py-28 px-6 md:px-20"
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-bold text-center text-white mb-4"
      >
        {t("services.title")}
      </motion.h1>
      <p className="text-brand-muted text-center max-w-2xl mx-auto mb-16">
        {t("services.subtitle")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((svc, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-brand-surface border border-gray-800 p-8 rounded-lg hover:border-brand-accent transition duration-300"
          >
            <h2 className="text-2xl font-bold mb-4 text-white">{svc.title}</h2>
            <p className="text-brand-muted mb-6 leading-relaxed">{svc.description}</p>
            <Link
              to={svc.route}
              className="text-brand-accent font-medium hover:text-white transition"
            >
              {t("services.learn_more")}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
