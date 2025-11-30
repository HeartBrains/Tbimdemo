
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
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<'studying' | 'graduated'>('graduated');

  // Generate Thai years for the dropdown (Current year + 1 down to 30 years back)
  const currentThaiYear = new Date().getFullYear() + 543;
  const years = Array.from({ length: 30 }, (_, i) => currentThaiYear + 1 - i);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess({ type: 'Local', status });
  };

  const Stepper = () => (
    <div className="max-w-4xl mx-auto mb-8">
      <div className="flex items-center justify-center w-full">
        {/* Step 1 */}
        <div className={`relative flex-1 flex items-center justify-center py-2 px-1 text-sm font-medium clip-step ${step >= 1 ? 'bg-teal-600 text-white' : 'bg-slate-200 text-slate-500'} z-30`}>
          <div className="flex items-center gap-2">
            {step > 1 ? (
              <span className="material-symbols-outlined text-lg">check_circle</span>
            ) : (
              <span className="material-symbols-outlined text-lg">circle</span>
            )}
            <span className="hidden sm:inline">ขั้นตอนที่ 1: ข้อมูลส่วนตัว</span>
          </div>
        </div>
        
        {/* Step 2 */}
        <div className={`relative flex-1 flex items-center justify-center py-2 px-1 text-sm font-medium clip-step -ml-4 pl-6 ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500'} z-20`}>
           <div className="flex items-center gap-2">
             <span className="material-symbols-outlined text-lg">{step === 2 ? 'radio_button_checked' : 'circle'}</span>
             <span className="hidden sm:inline">ขั้นตอนที่ 2: ข้อมูลการศึกษาและอาชีพ</span>
           </div>
        </div>

        {/* Step 3 */}
        <div className={`relative flex-1 flex items-center justify-center py-2 px-1 text-sm font-medium clip-step -ml-4 pl-6 ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-white border border-slate-200 text-slate-400'} z-10`}>
           <span className="hidden sm:inline">ขั้นตอนที่ 3: ยืนยัน</span>
        </div>
      </div>
      <style>{`
        .clip-step {
          clip-path: polygon(0% 0%, calc(100% - 15px) 0%, 100% 50%, calc(100% - 15px) 100%, 0% 100%);
        }
        .clip-step:first-child {
          clip-path: polygon(0% 0%, calc(100% - 15px) 0%, 100% 50%, calc(100% - 15px) 100%, 0% 100%, 0% 50%);
          border-top-left-radius: 0.5rem;
          border-bottom-left-radius: 0.5rem;
        }
        .clip-step:last-child {
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 15px 50%);
          border-top-right-radius: 0.5rem;
          border-bottom-right-radius: 0.5rem;
        }
      `}</style>
    </div>
  );

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-12">
      <div className="bg-teal-600 h-2 w-full fixed top-0 left-0 z-50 hidden"></div>
      
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Stepper */}
        <Stepper />

        {/* Header Section */}
        <div className="text-center mb-8">
           <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">สมัครสมาชิกบุคคลทั่วไป –</h1>
           <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
             {step === 1 ? 'ข้อมูลส่วนตัว' : 'ข้อมูลการศึกษาและอาชีพ'}
           </h2>
        </div>
        
        <div className="bg-white p-8 sm:p-10 rounded-xl shadow-lg border border-slate-200">
          
          {/* STEP 1: Personal Information */}
          {step === 1 && (
            <form onSubmit={handleNext} className="space-y-8">
              <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">ชื่อ-นามสกุล <span className="text-red-500">*</span></label>
                  <input type="text" required className="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2.5 border bg-slate-50" placeholder="" />
                </div>

                <div className="sm:col-span-2">
                   <label className="block text-sm font-medium text-slate-700 mb-1">วันเดือนปีเกิด <span className="text-red-500">*</span></label>
                   <div className="relative">
                     <input type="date" placeholder="วันเดือนปีเกิด" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2.5 border bg-slate-50" />
                   </div>
                </div>
                
                <div className="sm:col-span-2">
                   <label className="block text-sm font-medium text-slate-700 mb-1">เบอร์โทรศัพท์ <span className="text-red-500">*</span></label>
                   <input type="tel" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2.5 border bg-slate-50" />
                </div>

                <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">เพศ <span className="text-red-500">*</span></label>
                   <div className="flex space-x-6 mt-2">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="gender" className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" defaultChecked />
                        <span className="text-slate-900 text-sm">ชาย</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="gender" className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                        <span className="text-slate-900 text-sm">หญิง</span>
                      </label>
                   </div>
                </div>
                
                <div className="sm:col-span-2">
                   <label className="block text-sm font-medium text-slate-700 mb-1">เลขบัตรประชาชน <span className="text-red-500">*</span></label>
                   <input type="text" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2.5 border bg-slate-50" />
                </div>

                <div className="sm:col-span-2">
                   <label className="block text-sm font-medium text-slate-700 mb-1">สัญชาติ <span className="text-red-500">*</span></label>
                   <select className="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2.5 border bg-slate-50">
                     <option>ไทย</option>
                     <option>อื่นๆ</option>
                   </select>
                </div>

                <div className="sm:col-span-2">
                   <label className="block text-sm font-medium text-slate-700 mb-1">ที่อยู่ติดต่อ <span className="text-red-500">*</span></label>
                   <textarea rows={3} className="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2.5 border bg-slate-50"></textarea>
                </div>
              </div>
                
              <div className="flex justify-end space-x-4 pt-6">
                 <button type="button" onClick={() => setView(ViewState.LANDING)} className="px-6 py-2.5 border border-slate-300 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50">
                   ยกเลิก
                 </button>
                 <button type="submit" className="px-6 py-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                   ถัดไป
                 </button>
              </div>
            </form>
          )}

          {/* STEP 2: Education & Career */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Status Selector */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">จบการศึกษาตามเกณฑ์แล้วหรือไม่?</label>
                <div className="flex items-center space-x-6">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="status" 
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      checked={status === 'graduated'}
                      onChange={() => setStatus('graduated')}
                    />
                    <span className="text-slate-900 text-sm">จบการศึกษาแล้ว</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="status" 
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      checked={status === 'studying'}
                      onChange={() => setStatus('studying')}
                    />
                    <span className="text-slate-900 text-sm">ยังไม่จบการศึกษา</span>
                  </label>
                </div>
              </div>

              <hr className="border-slate-200" />

              {/* Education Information */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-6">ข้อมูลการศึกษา</h3>
                <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">วุฒิการศึกษา</label>
                    <select className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 border bg-slate-50">
                      <option>ปริญญาตรี</option>
                      <option>ปริญญาโท</option>
                      <option>ปริญญาเอก</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">สาขา</label>
                    <input type="text" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 border bg-slate-50" defaultValue="วิศวกรรมโยธา" />
                  </div>
                  
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">สถานบันการศึกษา</label>
                    <input type="text" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 border bg-slate-50" defaultValue="มหาวิทยาลัยเทคโนโลยีสุรนารี" />
                  </div>

                  {status === 'graduated' ? (
                     <div className="grid grid-cols-2 gap-4 sm:col-span-2">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">ปีที่เข้าศึกษา</label>
                          <select className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 border bg-slate-50">
                            {years.map(year => (
                              <option key={year} value={year}>{year}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">ปีที่จบการศึกษา</label>
                          <select className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 border bg-slate-50">
                             {years.map(year => (
                              <option key={year} value={year}>{year}</option>
                            ))}
                          </select>
                        </div>
                     </div>
                  ) : (
                     <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-slate-700 mb-1">ปีที่เข้าศึกษา</label>
                        <select className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 border bg-slate-50">
                          {years.map(year => (
                            <option key={year} value={year}>{year}</option>
                          ))}
                        </select>
                     </div>
                  )}

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">อัปโหลดเอกสารรับรองการศึกษา</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md bg-slate-50">
                      <div className="space-y-1 text-center">
                        <span className="material-symbols-outlined text-gray-400 text-4xl">upload_file</span>
                        <div className="flex text-sm text-gray-600 justify-center">
                          <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                            <span>อัปโหลดเอกสาร/ไฟล์</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                          </label>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Work Information */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-6">ข้อมูลการทำงาน</h3>
                <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">สถานที่ทำงาน</label>
                    <input type="text" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 border bg-slate-50" defaultValue="บริษัท บีไอเอ็ม คอนซัลติ้ง จำกัด" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">ลักษณะงาน</label>
                    <input type="text" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 border bg-slate-50" defaultValue="วิศวกรโครงสร้าง" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">ที่อยู่ที่ทำงาน</label>
                    <textarea rows={3} className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 border bg-slate-50" defaultValue="123 อาคารบีไอเอ็ม ชั้น 5 ถนนสาทร แขวงสีลม เขตบางรัก กรุงเทพฯ 10500"></textarea>
                  </div>
                </div>
              </div>

              {/* Account Information (New) */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-6">ข้อมูลบัญชีผู้ใช้</h3>
                <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">ชื่อผู้ใช้</label>
                    <input type="text" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 border bg-slate-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">รหัสผ่าน</label>
                    <input type="password" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 border bg-slate-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">ยืนยันรหัสผ่าน</label>
                    <input type="password" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 border bg-slate-50" />
                  </div>
                </div>
              </div>
                
              <div className="flex justify-end space-x-4 pt-6">
                 <button type="button" onClick={() => { setStep(1); window.scrollTo(0, 0); }} className="px-6 py-2.5 border border-slate-300 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50">
                   ย้อนกลับ
                 </button>
                 <button type="submit" className="px-6 py-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                   ถัดไป
                 </button>
              </div>
            </form>
          )}
        </div>
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
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
       {/* Header Section */}
       <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-3">Foreigner Member Registration</h1>
          <p className="text-slate-600">Step 2 of 3: Personal Information</p>
       </div>

       {/* Progress Bar */}
       <div className="w-full bg-slate-200 rounded-full h-2 mb-10">
          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '66.66%' }}></div>
       </div>

       <div className="bg-white p-8 sm:p-10 rounded-lg shadow-lg border border-slate-200">
          <form onSubmit={handleSubmit}>
             <div className="space-y-8">
                {/* Personal Details */}
                <div>
                   <h2 className="text-xl font-bold text-slate-900 mb-6">Personal Details</h2>
                   <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                         <label className="block text-sm font-medium text-slate-700 mb-1">Full Name (as in passport)</label>
                         <input type="text" placeholder="Full Name" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 border" />
                      </div>
                      {/* Date of Birth */}
                      <div>
                         <label className="block text-sm font-medium text-slate-700 mb-1">Date of Birth</label>
                         <div className="relative">
                            <input type="date" placeholder="mm/dd/yyyy" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 border" />
                         </div>
                      </div>
                      {/* Gender */}
                      <div>
                         <label className="block text-sm font-medium text-slate-700 mb-1">Gender</label>
                         <select className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 border">
                            <option>Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                         </select>
                      </div>
                      {/* Passport ID */}
                      <div>
                         <label className="block text-sm font-medium text-slate-700 mb-1">Passport ID</label>
                         <input type="text" placeholder="e.g. A12345678" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 border" />
                      </div>
                      {/* Nationality */}
                      <div>
                         <label className="block text-sm font-medium text-slate-700 mb-1">Nationality</label>
                         <select className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 border">
                            <option>Select Nationality</option>
                            <option>American</option>
                            <option>British</option>
                            <option>Canadian</option>
                            <option>Australian</option>
                            <option>German</option>
                            <option>French</option>
                            <option>Japanese</option>
                            <option>Singaporean</option>
                         </select>
                      </div>
                      {/* Email */}
                      <div className="sm:col-span-2">
                         <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                         <input type="email" placeholder="you@example.com" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 border" />
                      </div>
                      {/* Phone */}
                      <div className="sm:col-span-2">
                         <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                         <div className="flex">
                            <select className="rounded-l-md border-r-0 border-slate-300 bg-slate-50 text-slate-500 sm:text-sm p-2.5 border focus:ring-blue-500 focus:border-blue-500">
                               <option>+1</option>
                               <option>+44</option>
                               <option>+66</option>
                               <option>+61</option>
                               <option>+81</option>
                            </select>
                            <input type="tel" placeholder="(555) 123-4567" className="block w-full rounded-r-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 border" />
                         </div>
                      </div>
                   </div>
                </div>

                {/* Contact Address */}
                <div>
                   <h2 className="text-xl font-bold text-slate-900 mb-6">Contact Address</h2>
                   <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                         <label className="block text-sm font-medium text-slate-700 mb-1">Street Address</label>
                         <textarea rows={3} placeholder="123 Main Street" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 border"></textarea>
                      </div>
                      <div>
                         <label className="block text-sm font-medium text-slate-700 mb-1">City</label>
                         <input type="text" placeholder="City" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 border" />
                      </div>
                      <div>
                         <label className="block text-sm font-medium text-slate-700 mb-1">State / Province</label>
                         <input type="text" placeholder="State / Province" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 border" />
                      </div>
                      <div>
                         <label className="block text-sm font-medium text-slate-700 mb-1">Postal Code</label>
                         <input type="text" placeholder="Postal Code" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 border" />
                      </div>
                      <div>
                         <label className="block text-sm font-medium text-slate-700 mb-1">Country</label>
                         <select className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 border">
                            <option>Select Country</option>
                            <option>United States</option>
                            <option>Thailand</option>
                            <option>United Kingdom</option>
                            <option>Australia</option>
                            <option>Germany</option>
                            <option>France</option>
                         </select>
                      </div>
                   </div>
                </div>

                {/* Employment Info */}
                <div>
                   <h2 className="text-xl font-bold text-slate-900 mb-6">Employment Information</h2>
                   <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                         <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                         <input type="text" placeholder="Company Name" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 border" />
                      </div>
                      <div className="sm:col-span-2">
                         <label className="block text-sm font-medium text-slate-700 mb-1">Job Title</label>
                         <input type="text" placeholder="e.g. Software Engineer" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 border" />
                      </div>
                      <div className="sm:col-span-2">
                         <label className="block text-sm font-medium text-slate-700 mb-1">Company Address</label>
                         <textarea rows={3} placeholder="Company's Full Address" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 border"></textarea>
                      </div>
                   </div>
                </div>

                {/* Account Info */}
                <div>
                   <h2 className="text-xl font-bold text-slate-900 mb-6">Account Information</h2>
                   <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                         <label className="block text-sm font-medium text-slate-700 mb-1">Username</label>
                         <input type="text" placeholder="Username" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 border" />
                      </div>
                      <div>
                         <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                         <input type="password" placeholder="Password" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 border" />
                      </div>
                      <div>
                         <label className="block text-sm font-medium text-slate-700 mb-1">Confirm Password</label>
                         <input type="password" placeholder="Confirm Password" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 border" />
                      </div>
                   </div>
                </div>

                {/* Checkboxes */}
                <div className="space-y-4">
                   <div className="flex items-start">
                      <div className="flex h-5 items-center">
                         <input id="terms" type="checkbox" className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                      </div>
                      <div className="ml-3 text-sm">
                         <label htmlFor="terms" className="text-slate-600">I agree to the <a href="#" className="font-medium text-blue-600 hover:underline">Terms of Service</a></label>
                      </div>
                   </div>
                   <div className="flex items-start">
                      <div className="flex h-5 items-center">
                         <input id="newsletter" type="checkbox" className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                      </div>
                      <div className="ml-3 text-sm">
                         <label htmlFor="newsletter" className="text-slate-600">Subscribe to newsletter</label>
                      </div>
                   </div>
                </div>
             </div>

             {/* Footer Buttons */}
             <div className="mt-10 pt-8 border-t border-slate-200 flex justify-between items-center">
                <button type="button" onClick={() => setView(ViewState.LANDING)} className="px-6 py-2.5 rounded-md text-sm font-semibold bg-slate-200 text-slate-900 hover:bg-slate-300">
                   Back
                </button>
                <button type="submit" className="px-6 py-2.5 rounded-md text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700">
                   Submit Application
                </button>
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
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
       {/* Header Section */}
       <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">ลงทะเบียนสมาชิกนิติบุคคล</h1>
          <p className="text-slate-600">กรุณากรอกข้อมูลด้านล่างให้ครบถ้วนเพื่อสมัครสมาชิก</p>
       </div>

       <div className="bg-white p-8 sm:p-10 rounded-lg shadow-lg border border-slate-200">
          <form onSubmit={handleSubmit}>
             <div className="space-y-10">
                
                {/* Corporate Information Section */}
                <div>
                   <h2 className="text-xl font-bold text-slate-900 mb-6 border-b pb-4">ข้อมูลนิติบุคคล</h2>
                   <div className="grid grid-cols-1 gap-y-6">
                      <div>
                         <label className="block text-sm font-medium text-slate-700 mb-1">เลขทะเบียนนิติบุคคล</label>
                         <input type="text" placeholder="เช่น 0123456789123" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 sm:text-sm p-2.5 border" />
                      </div>
                      
                      <div>
                         <label className="block text-sm font-medium text-slate-700 mb-1">ชื่อบริษัท</label>
                         <input type="text" placeholder="เช่น บริษัท ตัวอย่าง จำกัด" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 sm:text-sm p-2.5 border" />
                      </div>

                      <div>
                         <label className="block text-sm font-medium text-slate-700 mb-1">ที่อยู่ติดต่อ</label>
                         <textarea rows={4} placeholder="ระบุที่อยู่ติดต่อ" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 sm:text-sm p-2.5 border"></textarea>
                      </div>
                   </div>
                </div>

                {/* Contact Person Section */}
                <div>
                   <h2 className="text-xl font-bold text-slate-900 mb-6 border-b pb-4">ข้อมูลส่วนตัวผู้ติดต่อ</h2>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
                      <div>
                         <label className="block text-sm font-medium text-slate-700 mb-1">ชื่อ-สกุล</label>
                         <input type="text" placeholder="ชื่อ-สกุลของผู้ติดต่อ" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 sm:text-sm p-2.5 border" />
                      </div>
                      
                      <div>
                         <label className="block text-sm font-medium text-slate-700 mb-1">เบอร์โทรศัพท์</label>
                         <input type="tel" placeholder="เบอร์โทรศัพท์ที่ติดต่อได้" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 sm:text-sm p-2.5 border" />
                      </div>

                      <div className="sm:col-span-2">
                         <label className="block text-sm font-medium text-slate-700 mb-1">อีเมล</label>
                         <input type="email" placeholder="อีเมลสำหรับติดต่อ" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 sm:text-sm p-2.5 border" />
                      </div>
                   </div>
                </div>

                {/* Account Information (New) */}
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-6 border-b pb-4">ข้อมูลบัญชีผู้ใช้</h2>
                  <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 mb-1">ชื่อผู้ใช้</label>
                      <input type="text" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 sm:text-sm p-2.5 border" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">รหัสผ่าน</label>
                      <input type="password" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 sm:text-sm p-2.5 border" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">ยืนยันรหัสผ่าน</label>
                      <input type="password" className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 sm:text-sm p-2.5 border" />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                   <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                     ลงทะเบียน
                   </button>
                </div>
             </div>
             
             {/* Login Link */}
             <div className="mt-6 text-center">
                <p className="text-sm text-slate-500">
                  มีบัญชีผู้ใช้อยู่แล้ว? <button type="button" onClick={() => setView(ViewState.LOGIN)} className="font-medium text-blue-600 hover:text-blue-500">เข้าสู่ระบบ</button>
                </p>
             </div>
          </form>
       </div>
    </div>
  );
};
