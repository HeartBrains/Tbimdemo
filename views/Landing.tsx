
import React from 'react';
import { ViewState } from '../types';

interface LandingProps {
  setView: (view: ViewState) => void;
}

export const Landing: React.FC<LandingProps> = ({ setView }) => {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
              ยกระดับวิชาชีพด้วยเครือข่าย <span className="text-primary-600">TBIM</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
              แพลตฟอร์มศูนย์กลางสำหรับผู้ประกอบวิชาชีพและองค์กรด้าน BIM ในประเทศไทย 
              เชื่อมต่อ แบ่งปัน และเติบโตไปพร้อมกับเรา
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setView(ViewState.LOGIN)}
                className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg"
              >
                เข้าสู่ระบบสมาชิก
              </button>
              <a href="#register-section" className="px-8 py-3 bg-white text-slate-700 font-bold rounded-xl border-2 border-slate-200 hover:border-primary-500 hover:text-primary-600 transition-all">
                ดูประเภทการสมัคร
              </a>
            </div>
          </div>
        </div>
        
        {/* Background Decorations */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 pointer-events-none opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Registration Selection */}
      <div id="register-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">เลือกประเภทสมาชิกที่เหมาะกับคุณ</h2>
          <div className="h-1.5 w-20 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1: Local (Thai) */}
          <div className="group relative bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 p-8 flex flex-col">
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-3xl">person</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">บุคคลทั่วไป (ไทย)</h3>
            <ul className="space-y-3 mb-8 text-slate-500 flex-grow text-sm">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                <span>สำหรับบุคคลสัญชาติไทย</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                <span>เลือกได้ทั้งแบบมืออาชีพหรือนักศึกษา</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                <span>รับสิทธิประโยชน์การฝึกอบรมและคะแนน CPD</span>
              </li>
            </ul>
            <button 
              onClick={() => setView(ViewState.REGISTER_LOCAL)}
              className="w-full py-4 bg-indigo-50 text-indigo-700 font-bold rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm"
            >
              สมัครสมาชิกรายบุคคล
            </button>
          </div>

          {/* Card 2: Foreigner */}
          <div className="group relative bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 p-8 flex flex-col">
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-3xl">public</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Foreign Member</h3>
            <ul className="space-y-3 mb-8 text-slate-500 flex-grow text-sm">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                <span>For non-Thai citizens/expats</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                <span>Passport & Work Permit support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                <span>Access to international BIM resources</span>
              </li>
            </ul>
            <button 
              onClick={() => setView(ViewState.REGISTER_FOREIGN)}
              className="w-full py-4 bg-emerald-50 text-emerald-700 font-bold rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm"
            >
              Register as Foreigner
            </button>
          </div>

          {/* Card 3: Corporate */}
          <div className="group relative bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 p-8 flex flex-col">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-3xl">corporate_fare</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">สมาชิกนิติบุคคล</h3>
            <ul className="space-y-3 mb-8 text-slate-500 flex-grow text-sm">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                <span>สำหรับบริษัทและหน่วยงานรัฐ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                <span>รองรับการลงทะเบียนสมาชิกแบบกลุ่ม</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                <span>สิทธิพิเศษในการลงนามความร่วมมือ (MOU)</span>
              </li>
            </ul>
            <button 
              onClick={() => setView(ViewState.REGISTER_CORPORATE)}
              className="w-full py-4 bg-blue-50 text-blue-700 font-bold rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm"
            >
              สมัครสมาชิกนิติบุคคล
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
