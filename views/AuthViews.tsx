import React from 'react';
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
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-4xl text-blue-600">lock</span>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-slate-900">เข้าสู่ระบบ TBIM</h2>
          <p className="mt-2 text-sm text-slate-600">
            หรือ <button onClick={() => setView(ViewState.LANDING)} className="font-medium text-blue-600 hover:text-blue-500">สมัครสมาชิกใหม่</button>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email-address" className="sr-only">อีเมล</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="อีเมล" />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">รหัสผ่าน</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="รหัสผ่าน" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-900">จดจำฉัน</label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">ลืมรหัสผ่าน?</a>
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-colors">
              เข้าสู่ระบบ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// Success View
// ----------------------------------------------------------------------
export const Success: React.FC<AuthProps> = ({ setView }) => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full bg-white p-10 rounded-2xl shadow-xl text-center">
        <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100 mb-8 animate-bounce">
          <span className="material-symbols-outlined text-5xl text-green-600">check_circle</span>
        </div>
        
        <h2 className="text-3xl font-extrabold text-slate-900 mb-4">ลงทะเบียนสำเร็จ!</h2>
        
        <div className="bg-slate-50 rounded-lg p-6 mb-8 border border-slate-100">
          <p className="text-slate-600 mb-2">
            เราได้รับใบสมัครของคุณแล้ว อีเมลยืนยันได้ถูกส่งไปที่:
          </p>
          <p className="font-bold text-slate-900 text-lg">user@example.com</p>
          <p className="text-xs text-slate-400 mt-4">
            (จำลอง: ระบบได้ทำการส่งอีเมลแจ้งเตือนแล้ว)
          </p>
        </div>

        <p className="text-slate-500 mb-8">
          คุณสามารถเข้าสู่ระบบเพื่อใช้งานแดชบอร์ดได้แล้ว โดย Member ID จะถูกสร้างขึ้นในไม่ช้า
        </p>

        <button 
          onClick={() => setView(ViewState.LOGIN)}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          ไปที่หน้าเข้าสู่ระบบ
        </button>
      </div>
    </div>
  );
};