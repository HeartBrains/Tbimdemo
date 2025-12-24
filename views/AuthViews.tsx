
import React, { useState } from 'react';
import { ViewState } from '../types';

interface AuthProps {
  setView: (view: ViewState) => void;
}

// ----------------------------------------------------------------------
// Login View
// ----------------------------------------------------------------------
export const Login: React.FC<AuthProps> = ({ setView }) => {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setView(ViewState.DASHBOARD);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
        <div className="text-center">
          <div className="mx-auto h-20 w-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-4xl text-blue-600">lock_person</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">เข้าสู่ระบบ TBIM</h2>
          <p className="mt-3 text-sm text-slate-500">Member Access & Management Portal</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-1 ml-1">Email or Member ID</label>
              <input id="user-id" name="id" type="text" required className="appearance-none rounded-xl relative block w-full px-4 py-3 border border-slate-200 placeholder-slate-400 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-slate-50 transition-all" placeholder="example@mail.com" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-1 ml-1">Password</label>
              <input id="password" name="password" type="password" required className="appearance-none rounded-xl relative block w-full px-4 py-3 border border-slate-200 placeholder-slate-400 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-slate-50 transition-all" placeholder="••••••••" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-600">จดจำฉัน</label>
            </div>
            <div className="text-sm">
              <button type="button" onClick={() => setView(ViewState.RESET_PASSWORD)} className="font-semibold text-blue-600 hover:text-blue-700">ลืมรหัสผ่าน?</button>
            </div>
          </div>

          <div>
            <button type="submit" className="w-full flex justify-center py-4 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-lg active:scale-[0.98]">
              เข้าสู่ระบบ
            </button>
          </div>
          
          <div className="text-center pt-4 border-t border-slate-50">
             <p className="text-sm text-slate-500">ยังไม่เป็นสมาชิก? <button type="button" onClick={() => setView(ViewState.LANDING)} className="font-bold text-blue-600 hover:underline ml-1">สมัครสมาชิกใหม่</button></p>
          </div>
        </form>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// Account Retrieval (Forgot Password) View
// ----------------------------------------------------------------------
export const ResetPassword: React.FC<AuthProps> = ({ setView }) => {
  const [method, setMethod] = useState<'data' | 'security' | null>(null);

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">การกู้คืนบัญชี</h2>
          <p className="mt-2 text-sm text-slate-500">Account Recovery Options</p>
        </div>

        {!method ? (
          <div className="space-y-4 pt-4">
            <button onClick={() => setMethod('data')} className="group w-full p-5 border-2 rounded-2xl hover:border-blue-500 hover:bg-blue-50 border-slate-100 text-left transition-all">
               <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-blue-600">contact_page</span>
                  <div>
                    <div className="font-bold text-slate-900">กู้คืนด้วยข้อมูลส่วนตัว</div>
                    <div className="text-xs text-slate-500">กรอก ชื่อ-สกุล และเลขบัตรประชาชน</div>
                  </div>
               </div>
            </button>
            <button onClick={() => setMethod('security')} className="group w-full p-5 border-2 rounded-2xl hover:border-blue-500 hover:bg-blue-50 border-slate-100 text-left transition-all">
               <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-blue-600">verified_user</span>
                  <div>
                    <div className="font-bold text-slate-900">กู้คืนด้วยคำถามความปลอดภัย</div>
                    <div className="text-xs text-slate-500">ตอบคำถามที่คุณเคยตั้งไว้ตอนสมัคร</div>
                  </div>
               </div>
            </button>
            <button onClick={() => setView(ViewState.LOGIN)} className="w-full text-center text-sm font-medium text-slate-500 hover:text-slate-900 pt-4">ย้อนกลับ</button>
          </div>
        ) : method === 'data' ? (
          <form className="space-y-4 pt-4 animate-fade-in">
            <input type="text" placeholder="ชื่อ-นามสกุล" className="w-full p-4 border border-slate-200 rounded-xl bg-slate-50 outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="text" placeholder="เลขบัตรประชาชน" className="w-full p-4 border border-slate-200 rounded-xl bg-slate-50 outline-none focus:ring-2 focus:ring-blue-500" />
            <div className="pt-4 flex gap-3">
               <button type="button" onClick={() => setMethod(null)} className="flex-1 py-3 border border-slate-200 text-slate-600 rounded-xl font-bold">กลับ</button>
               <button type="submit" className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700">ยืนยันข้อมูล</button>
            </div>
          </form>
        ) : (
          <form className="space-y-4 pt-4 animate-fade-in">
            <label className="text-sm font-medium text-slate-600 ml-1">คำถามที่คุณเคยเลือกไว้:</label>
            <div className="p-4 bg-slate-50 rounded-xl text-slate-800 font-bold border border-slate-100 mb-2">จังหวัดที่เกิด?</div>
            <input type="text" placeholder="พิมพ์คำตอบที่นี่" className="w-full p-4 border border-slate-200 rounded-xl bg-white outline-none focus:ring-2 focus:ring-blue-500 shadow-sm" />
            <div className="pt-4 flex gap-3">
               <button type="button" onClick={() => setMethod(null)} className="flex-1 py-3 border border-slate-200 text-slate-600 rounded-xl font-bold">กลับ</button>
               <button type="submit" className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700">ยืนยันคำตอบ</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// Success View
// ----------------------------------------------------------------------
export const Success: React.FC<AuthProps> = ({ setView }) => {
  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-xl w-full bg-white p-12 rounded-3xl shadow-2xl text-center border border-slate-100 relative overflow-hidden">
        {/* Confetti-like decoration */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600"></div>
        
        <div className="mx-auto flex items-center justify-center h-28 w-28 rounded-full bg-green-50 mb-8 animate-bounce">
          <span className="material-symbols-outlined text-6xl text-green-500">verified</span>
        </div>
        
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">ลงทะเบียนสำเร็จ!</h2>
        <p className="text-slate-600 mb-10 text-lg">ขอบคุณสำหรับการเข้าร่วมเป็นส่วนหนึ่งของ TBIM</p>
        
        <div className="bg-slate-50 rounded-2xl p-8 mb-10 border border-slate-100 text-left">
          <div className="flex items-start gap-4">
             <span className="material-symbols-outlined text-blue-600 mt-1">mail_outline</span>
             <div>
               <p className="font-bold text-slate-800 mb-1">ขั้นตอนต่อไป:</p>
               <p className="text-slate-600 text-sm leading-relaxed">
                 ระบบได้ส่งอีเมลยืนยันไปยังกล่องจดหมายของคุณแล้ว กรุณากดปุ่ม <strong>"ยืนยันตัวตน"</strong> ในอีเมลก่อนเริ่มใช้งานครั้งแรก
               </p>
               <p className="text-xs text-slate-400 mt-4 italic font-medium">* การลงทะเบียนนี้เป็นเพียงการจำลองเพื่อการนำเสนอ</p>
             </div>
          </div>
        </div>
        
        <button 
          onClick={() => setView(ViewState.LOGIN)} 
          className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg text-lg flex items-center justify-center gap-2"
        >
          ไปยังหน้าเข้าสู่ระบบ
          <span className="material-symbols-outlined">login</span>
        </button>
      </div>
    </div>
  );
};
