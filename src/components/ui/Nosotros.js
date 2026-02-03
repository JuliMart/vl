import React from "react";
import { motion } from "framer-motion";
import { FaHistory, FaBullseye, FaEye } from "react-icons/fa";
import { useTranslation, Trans } from "react-i18next";

const Nosotros = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-brand-dark text-brand-text py-20 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t("about.title")}</h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto"></div>
        </div>

        {/* History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-brand-surface p-8 rounded-lg border border-gray-800"
        >
          <h3 className="text-2xl font-bold text-brand-accent mb-4 flex items-center gap-3">
            <FaHistory /> {t("about.story_title")}
          </h3>
          <p className="text-brand-muted leading-relaxed">
            <Trans i18nKey="about.story_desc" components={{ 1: <strong /> }} />
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-brand-surface p-8 rounded-lg border border-gray-800"
        >
          <h3 className="text-2xl font-bold text-brand-accent mb-4 flex items-center gap-3">
            <FaBullseye /> {t("about.mission_title")}
          </h3>
          <p className="text-brand-muted leading-relaxed">
            {t("about.mission_desc")}
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-brand-surface p-8 rounded-lg border border-gray-800"
        >
          <h3 className="text-2xl font-bold text-brand-accent mb-4 flex items-center gap-3">
            <FaEye /> {t("about.vision_title")}
          </h3>
          <p className="text-brand-muted leading-relaxed">
            {t("about.vision_desc")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Nosotros;
