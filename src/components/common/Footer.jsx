import React from 'react';
import { Sprout, Mail, Phone, MapPin, Github, Linkedin, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 transition-colors duration-300">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <Sprout className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-extrabold text-white">Krishi Sanyog</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              AI-driven precision agriculture ecosystem enabling Indian farmers with localized soil diagnostics, intelligent fertilizer calculation, crop suitability modeling, and government financial scheme integration.
            </p>
            
            {/* Active Working Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-all shadow-md group"
                title="GitHub Repository"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-all shadow-md group"
                title="LinkedIn Network"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-extrabold text-xs mb-4 tracking-widest uppercase">Platform</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/farmer" className="hover:text-emerald-400 transition-colors">Farmer Dashboard</Link></li>
              <li><Link to="/farmer/advisor" className="hover:text-emerald-400 transition-colors">AI Soil Advisor</Link></li>
              <li><Link to="/farmer/schemes" className="hover:text-emerald-400 transition-colors">Government Schemes</Link></li>
              <li><Link to="/farmer/notices" className="hover:text-emerald-400 transition-colors">Mandi & Weather Notices</Link></li>
              <li><Link to="/admin" className="hover:text-emerald-400 transition-colors">Admin Analytics Console</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-extrabold text-xs mb-4 tracking-widest uppercase">Govt Initiatives</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="https://soilhealth.dac.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Soil Health Card Scheme</a></li>
              <li><a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">PM Kisan Samman Nidhi</a></li>
              <li><a href="https://pmfby.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">PM Fasal Bima Yojana</a></li>
              <li><a href="https://mausam.imd.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">ICAR Weather Advisories</a></li>
              <li><a href="https://www.enam.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">National Agri Market (eNAM)</a></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-white font-extrabold text-xs mb-4 tracking-widest uppercase">Contact Support</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>1800-180-1551 (Toll Free)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>support@krishisanyog.gov.in</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Ministry of Agriculture & Farmers Welfare, Krishi Bhawan, New Delhi</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>© 2026 Krishi Sanyog Platform. ISO 27001 Certified & Govt Data Compliant.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-200 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-200 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-200 transition-colors">Security Audit</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
