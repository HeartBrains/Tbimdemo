
import React, { useState } from 'react';
import { ViewState } from '../types';

interface ProfileProps {
  setView: (view: ViewState) => void;
}

export const EditProfile: React.FC<ProfileProps> = ({ setView }) => {
  // Simulated initial data
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    phone: '081-234-5678',
    email: 'john.doe@example.com',
    address: '123 ถนนสุขุมวิท แขวงคลองตัน เขตคลองเตย กรุงเทพฯ 10110',
    company: 'TBIM Tech Co., Ltd.',
    position: 'Senior Engineer',
  });

  const [notification, setNotification] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API save
    setNotification('บันทึกข้อมูลเรียบร้อยแล้ว');
    setTimeout(() => {
      setNotification(null);
      setView(ViewState.DASHBOARD);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="flex items-center justify-between mb-8">
        <button 
          onClick={() => setView(ViewState.DASHBOARD)} 
          className="flex items-center text-slate-500 hover:text-slate-800 transition-colors"
        >
          <span className="material-symbols-outlined mr-1 text-lg">arrow_back</span> กลับสู่แดชบอร์ด
        </button>
        <h1 className="text-2xl font-bold text-slate-900">แก้ไขข้อมูลส่วนตัว</h1>
      </div>

      {notification && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg flex items-center animate-pulse">
          <span className="material-symbols-outlined mr-2">check_circle</span>
          {notification}
        </div>
      )}

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Profile Header / Cover */}
        <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600 relative">
          <div className="absolute -bottom-12 left-8">
            <div className="relative">
              <div className="h-24 w-24 rounded-full border-4 border-white bg-white overflow-hidden shadow-md">
                <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-slate-400">person</span>
                </div>
              </div>
              <button className="absolute bottom-0 right-0 p-1.5 bg-slate-800 text-white rounded-full hover:bg-slate-700 border-2 border-white shadow-sm" title="เปลี่ยนรูปโปรไฟล์">
                <span className="material-symbols-outlined text-sm">photo_camera</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-16 pb-8 px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section 1: Basic Info */}
            <div className="border-b border-slate-100 pb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">ข้อมูลพื้นฐาน</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">ชื่อจริง</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">นามสกุล</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">เลขบัตรประชาชน (แก้ไขไม่ได้)</label>
                  <input
                    type="text"
                    value="1-1234-56789-01-2"
                    disabled
                    className="w-full px-3 py-2 border border-slate-200 bg-slate-50 text-slate-500 rounded-lg cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">วันเกิด (แก้ไขไม่ได้)</label>
                  <input
                    type="text"
                    value="15 มกราคม 2533"
                    disabled
                    className="w-full px-3 py-2 border border-slate-200 bg-slate-50 text-slate-500 rounded-lg cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Contact Info */}
            <div className="border-b border-slate-100 pb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">ข้อมูลการติดต่อ</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">เบอร์โทรศัพท์</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">อีเมล</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">ที่อยู่ปัจจุบัน</label>
                  <textarea
                    name="address"
                    rows={3}
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Work Info */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">ข้อมูลการทำงาน</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">สถานที่ทำงาน</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">ตำแหน่ง</label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-4 pt-4">
              <button
                type="button"
                onClick={() => setView(ViewState.DASHBOARD)}
                className="px-6 py-2.5 border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors"
              >
                ยกเลิก
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow-md hover:shadow-lg transition-all"
              >
                บันทึกการเปลี่ยนแปลง
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};