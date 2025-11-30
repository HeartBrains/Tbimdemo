import React from 'react';
import { ViewState } from '../types';

interface LandingProps {
  setView: (view: ViewState) => void;
}

export const Landing: React.FC<LandingProps> = ({ setView }) => {
  return (
    <div className="relative overflow-hidden bg-slate-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            เข้าร่วมเครือข่าย <span className="text-primary-600">TBIM</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            เลือกประเภทสมาชิกของคุณเพื่อเริ่มขั้นตอนการลงทะเบียน เข้าร่วมกับมืออาชีพและองค์กรหลายพันแห่งวันนี้
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Juristic (Thai) */}
          <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            <div className="p-8 flex flex-col h-full items-center text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <span className="material-symbols-outlined text-3xl text-blue-600">domain</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">นิติบุคคล</h3>
              <p className="text-slate-500 mb-8 flex-grow">
                สำหรับบริษัท องค์กร และหน่วยงานที่จดทะเบียนถูกต้องตามกฎหมาย
              </p>
              <button 
                onClick={() => setView(ViewState.REGISTER_CORPORATE)}
                className="w-full py-3 px-4 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-lg group-hover:border-blue-500 group-hover:text-blue-600 transition-all"
              >
                ลงทะเบียนนิติบุคคล
              </button>
            </div>
          </div>

          {/* Card 2: Foreigner (English) */}
          <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-teal-600"></div>
            <div className="p-8 flex flex-col h-full items-center text-center">
              <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors">
                <span className="material-symbols-outlined text-3xl text-teal-600">public</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Foreign Individual</h3>
              <p className="text-slate-500 mb-8 flex-grow">
                For non-Thai citizens. Requires Passport and Visa details.
              </p>
              <button 
                onClick={() => setView(ViewState.REGISTER_FOREIGN)}
                className="w-full py-3 px-4 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-lg group-hover:border-teal-500 group-hover:text-teal-600 transition-all"
              >
                Register as Foreigner
              </button>
            </div>
          </div>

          {/* Card 3: Local (Thai) */}
          <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 to-indigo-600"></div>
            <div className="p-8 flex flex-col h-full items-center text-center">
              <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors">
                <span className="material-symbols-outlined text-3xl text-indigo-600">person</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">บุคคลทั่วไป (ไทย)</h3>
              <p className="text-slate-500 mb-8 flex-grow">
                สำหรับบุคคลสัญชาติไทยที่ถือบัตรประจำตัวประชาชน รวมถึงนักศึกษาและผู้ประกอบวิชาชีพ
              </p>
              <button 
                onClick={() => setView(ViewState.REGISTER_LOCAL)}
                className="w-full py-3 px-4 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-lg group-hover:border-indigo-500 group-hover:text-indigo-600 transition-all"
              >
                ลงทะเบียนบุคคลทั่วไป
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm">
            มีบัญชีผู้ใช้แล้ว? <button onClick={() => setView(ViewState.LOGIN)} className="text-primary-600 font-semibold hover:underline">เข้าสู่ระบบที่นี่</button>
          </p>
        </div>
      </div>
    </div>
  );
};