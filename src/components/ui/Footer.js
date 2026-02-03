import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-brand-muted px-10 py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Logo + Info */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="text-2xl font-bold tracking-tighter text-white">
            da<span className="text-brand-accent">Code</span>
          </Link>
          <div className="text-sm leading-relaxed max-w-xs">
            <p>
              {t("footer.tagline")}
            </p>
          </div>
        </div>


        {/* Middle Sections */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm">
          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-4">{t("footer.col_services")}</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-brand-accent transition">{t("footer.link_dev")}</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition">{t("footer.link_cloud")}</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition">{t("footer.link_consulting")}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-white mb-4">{t("footer.col_company")}</h3>
            <ul className="space-y-2">
              <li><Link to="/nosotros" className="hover:text-brand-accent transition">{t("footer.link_about")}</Link></li>
              <li><Link to="/contacto" className="hover:text-brand-accent transition">{t("footer.link_contact")}</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold text-white mb-4">{t("footer.col_connect")}</h3>
            <div className="flex gap-4">
              <Link to="/" className="hover:text-brand-accent transition"><FaLinkedin size={20} /></Link>
              <Link to="/" className="hover:text-brand-accent transition"><FaGithub size={20} /></Link>
              <Link to="/" className="hover:text-brand-accent transition"><FaTwitter size={20} /></Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 pt-8 border-t border-gray-900 text-center text-sm text-gray-600">
        {t("footer.copyright", { year: new Date().getFullYear() })}
      </div>
    </footer>
  );
};

export default Footer;
