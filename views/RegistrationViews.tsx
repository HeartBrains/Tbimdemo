import React, { useState } from 'react';
import { ViewState } from '../types';

interface RegProps {
  setView: (view: ViewState) => void;
  onSuccess: (data: any) => void;
}

// ----------------------------------------------------------------------
// Local (Thai) Registration
// ----------------------------------------------------------------------
export const RegisterLocal: React.FC<RegProps> = ({ setView, onSuccess }) => {
  const [status, setStatus] = useState<'studying' | 'graduated'>('studying');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess({ type: 'Local', status });
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <button onClick={() => setView(ViewState.LANDING)} className="mb-6 flex items-center text-slate-500 hover:text-slate-800 transition-colors">
        <span className="material-symbols-outlined mr-1 text-lg">arrow_back</span> ย้อนกลับ
      </button>
      
      <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden">
        <div className="bg-indigo-600 px-8 py-6">
          <h2 className="text-2xl font-bold text-white">สมัครสมาชิกบุคคลทั่วไป</h2>
          <p className="text-indigo-100">ขั้นตอนที่ 1 จาก 2: ข้อมูลส่วนตัว</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Status Selection */}
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <label className="block text-sm font-medium text-slate-700 mb-3">สถานะการศึกษา</label>
            <div className="flex space-x-6">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input 
                  type="radio" 
                  name="status" 
                  className="w-5 h-5 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  checked={status === 'studying'}
                  onChange={() => setStatus('studying')}
                />
                <span className="text-slate-900 font-medium">กำลังศึกษา</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input 
                  type="radio" 
                  name="status" 
                  className="w-5 h-5 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  checked={status === 'graduated'}
                  onChange={() => setStatus('graduated')}
                />
                <span className="text-slate-900 font-medium">จบการศึกษาแล้ว</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">ชื่อ-นามสกุล (ภาษาไทย)</label>
              <input type="text" required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            
            <div className="sm:col-span-2">
               <label className="block text-sm font-medium text-slate-700">เลขประจำตัวประชาชน</label>
               <input type="text" placeholder="1-xxxx-xxxxx-xx-x" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>

            {status === 'studying' ? (
              <>
                <div className="sm:col-span-2">
                   <h3 className="text-lg font-medium text-slate-900 border-b pb-2 mb-4 mt-2">ข้อมูลการศึกษา</h3>
                </div>
                <div className="sm:col-span-2">
                   <label className="block text-sm font-medium text-slate-700">มหาวิทยาลัย / สถาบันการศึกษา</label>
                   <input type="text" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                   <label className="block text-sm font-medium text-slate-700">รหัสนักศึกษา</label>
                   <input type="text" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                   <label className="block text-sm font-medium text-slate-700">ปีที่คาดว่าจะจบการศึกษา</label>
                   <input type="date" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
              </>
            ) : (
              <>
                <div className="sm:col-span-2">
                   <h3 className="text-lg font-medium text-slate-900 border-b pb-2 mb-4 mt-2">ข้อมูลอาชีพ</h3>
                </div>
                <div className="sm:col-span-2">
                   <label className="block text-sm font-medium text-slate-700">สถานที่ทำงานปัจจุบัน</label>
                   <input type="text" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                   <label className="block text-sm font-medium text-slate-700">ตำแหน่งงาน</label>
                   <input type="text" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                   <label className="block text-sm font-medium text-slate-700">ประสบการณ์ทำงาน (ปี)</label>
                   <input type="number" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
              </>
            )}
            
            <div className="sm:col-span-2 pt-4">
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                ยืนยันการลงทะเบียน
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// Foreign Registration
// ----------------------------------------------------------------------
export const RegisterForeign: React.FC<RegProps> = ({ setView, onSuccess }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess({ type: 'Foreign' });
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <button onClick={() => setView(ViewState.LANDING)} className="mb-6 flex items-center text-slate-500 hover:text-slate-800 transition-colors">
        <span className="material-symbols-outlined mr-1 text-lg">arrow_back</span> Back to Selection
      </button>
      
      <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden">
        <div className="bg-teal-600 px-8 py-6">
          <h2 className="text-2xl font-bold text-white">Foreigner Registration</h2>
          <p className="text-teal-100">International Member Application</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-slate-700">First Name</label>
              <input type="text" required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Last Name</label>
              <input type="text" required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" />
            </div>
            
            <div className="sm:col-span-2">
               <label className="block text-sm font-medium text-slate-700">Passport Number</label>
               <input type="text" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" />
            </div>

            <div className="sm:col-span-2">
               <label className="block text-sm font-medium text-slate-700">Nationality</label>
               <select className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500">
                  <option>Select Country</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Japan</option>
                  <option>Singapore</option>
                  <option>Other</option>
               </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Passport / Visa Upload</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <span className="material-symbols-outlined text-gray-400 text-4xl">cloud_upload</span>
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-teal-600 hover:text-teal-500 focus-within:outline-none">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
                </div>
              </div>
            </div>
            
            <div className="sm:col-span-2 pt-4">
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                Submit Application
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// Corporate Registration
// ----------------------------------------------------------------------
export const RegisterCorporate: React.FC<RegProps> = ({ setView, onSuccess }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess({ type: 'Corporate' });
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <button onClick={() => setView(ViewState.LANDING)} className="mb-6 flex items-center text-slate-500 hover:text-slate-800 transition-colors">
        <span className="material-symbols-outlined mr-1 text-lg">arrow_back</span> ย้อนกลับ
      </button>
      
      <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden">
        <div className="bg-blue-600 px-8 py-6">
          <h2 className="text-2xl font-bold text-white">สมัครสมาชิกนิติบุคคล</h2>
          <p className="text-blue-100">แบบฟอร์มสำหรับนิติบุคคล</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">ชื่อบริษัท (ภาษาไทย/อังกฤษ)</label>
              <input type="text" required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            
            <div className="sm:col-span-2">
               <label className="block text-sm font-medium text-slate-700">เลขประจำตัวผู้เสียภาษี</label>
               <input type="text" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <div className="sm:col-span-2">
               <label className="block text-sm font-medium text-slate-700">ที่อยู่สำนักงานใหญ่</label>
               <textarea rows={3} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <div className="sm:col-span-2">
               <h3 className="text-lg font-medium text-slate-900 border-b pb-2 mb-4 mt-2">ผู้มีอำนาจลงนาม / ผู้ติดต่อ</h3>
            </div>
            
             <div>
              <label className="block text-sm font-medium text-slate-700">ชื่อ-นามสกุล</label>
              <input type="text" required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
             <div>
              <label className="block text-sm font-medium text-slate-700">ตำแหน่ง</label>
              <input type="text" required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            
            <div className="sm:col-span-2 pt-4">
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                ลงทะเบียนบริษัท
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};