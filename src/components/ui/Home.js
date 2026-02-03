// Home.js
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaCloud } from "react-icons/fa";
import { useTranslation, Trans } from "react-i18next";



const Home = () => {
  const { t } = useTranslation();

  const ServicesPreview = [
    {
      icon: <FaCode size={40} />,
      title: t("home.service_custom.title"),
      desc: t("home.service_custom.desc"),
    },
    {
      icon: <FaMobileAlt size={40} />,
      title: t("home.service_mobile.title"),
      desc: t("home.service_mobile.desc"),
    },
    {
      icon: <FaCloud size={40} />,
      title: t("home.service_cloud.title"),
      desc: t("home.service_cloud.desc"),
    },
  ];

  return (
    <main className="bg-brand-dark text-brand-text font-sans">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-brand-dark">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-surface to-brand-dark opacity-50"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            {/* Interpolation handled by i18next but we need to pass components if we used <Trans> or just dangerouslySetInnerHTML if we trusted it, 
                 but simple t() returns string. For rich text we use Trans. 
                 Let's stick to simple t() for now or use Trans for the <span className="text-brand-accent"> part. 
                 Actually, my translation.json has <1>Future</1>. I need Trans component.
             */}
            <Trans i18nKey="home.hero_title" components={{ 1: <span className="text-brand-accent" /> }} />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-brand-muted mb-10 font-light"
          >
            {t("home.hero_subtitle")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link
              to="/contacto"
              className="inline-block border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white px-8 py-3 rounded-full font-medium transition duration-300"
            >
              {t("home.start_project")}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 px-6 bg-brand-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t("home.services_title")}</h2>
            <div className="w-20 h-1 bg-brand-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {ServicesPreview.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-brand-dark p-8 rounded-lg border border-gray-800 hover:border-brand-accent transition duration-300"
              >
                <div className="text-brand-accent mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-brand-muted leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="text-brand-accent hover:text-white font-medium transition border-b border-brand-accent pb-1">{t("home.view_all_services")}</Link>
          </div>
        </div>
      </section>

      {/* TRUST / STATS */}
      <section className="py-20 px-6 border-t border-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-12 tracking-wide text-brand-muted">{t("home.trusted_by")}</h2>
          <div className="flex flex-wrap justify-center gap-16 transition duration-500">
            {/* ViewLed Logo */}
            <a
              href="https://viewled.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition duration-300"
            >
              <img
                src="/assets/viewled-logo-v2.png"
                alt="ViewLed"
                className="h-16 w-auto object-contain transition duration-300 brightness-200 invert"
              />
            </a>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">{t("home.ready_to_scale")}</h2>
        <p className="text-brand-muted mb-8 max-w-2xl mx-auto">
          {t("home.ready_desc")}
        </p>
        <Link
          to="/contacto"
          className="bg-brand-text text-brand-dark px-8 py-3 rounded-md font-bold hover:bg-gray-200 transition"
        >
          {t("home.get_in_touch")}
        </Link>
      </section>
    </main>
  );
};

export default Home;
