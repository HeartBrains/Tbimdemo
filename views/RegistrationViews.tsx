
import React, { useState } from 'react';
import { ViewState } from '../types';

interface RegProps {
  setView: (view: ViewState) => void;
  onSuccess: (data: any) => void;
}

const PDPASection = () => (
  <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
    <div className="flex items-start gap-3">
      <div className="flex items-center h-5 mt-1">
        <input
          id="pdpa"
          name="pdpa"
          type="checkbox"
          required
          className="h-5 w-5 text-primary-600 border-slate-300 rounded focus:ring-primary-500 cursor-pointer"
        />
      </div>
      <div className="text-sm">
        <label htmlFor="pdpa" className="font-bold text-slate-800 cursor-pointer">
          ความยินยอมให้ใช้ข้อมูลตาม PDPA (PDPA Consent) <span className="text-red-500">*</span>
        </label>
        <p className="text-slate-500 leading-relaxed mt-1">
          ข้าพเจ้ายินยอมให้สมาคมฯ เก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคลที่ระบุไว้ในแบบฟอร์มนี้ เพื่อวัตถุประสงค์ในการบริหารจัดการสมาชิก และการแจ้งข่าวสารกิจกรรมของสมาคมฯ
        </p>
      </div>
    </div>
  </div>
);

const SecurityQuestionsSection = () => (
  <div className="mt-8 pt-8 border-t border-slate-200">
    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
      <span className="material-symbols-outlined text-blue-600">security</span>
      คำถามความปลอดภัย (Security Questions)
    </h3>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label className="block text-sm font-medium text-slate-700 mb-1">เลือกคำถามความปลอดภัย <span className="text-red-500">*</span></label>
        <select required className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border bg-slate-50 outline-none transition-all">
          <option value="">-- กรุณาเลือก 1 คำถาม --</option>
          <option value="province">จังหวัดที่เกิด (Birth Province)</option>
          <option value="school">โรงเรียนมัธยม (High School Name)</option>
          <option value="mother">ชื่อเล่นของมารดา (Mother's Nickname)</option>
          <option value="pet">ชื่อสัตว์เลี้ยงตัวแรก (First Pet's Name)</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className="block text-sm font-medium text-slate-700 mb-1">คำตอบ <span className="text-red-500">*</span></label>
        <input type="text" required className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border bg-slate-50 outline-none transition-all" placeholder="ระบุคำตอบของคุณ" />
      </div>
    </div>
  </div>
);

// ----------------------------------------------------------------------
// Local (Thai) Registration
// ----------------------------------------------------------------------
export const RegisterLocal: React.FC<RegProps> = ({ setView, onSuccess }) => {
  const [step, setStep] = useState(1);
  const [subType, setSubType] = useState<'professional' | 'student'>('professional');

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess({ type: 'Local', subType });
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-center mb-10">
          <div className="flex items-center w-full max-w-xs">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold transition-all ${step >= 1 ? 'bg-primary-600 text-white shadow-lg' : 'bg-slate-200 text-slate-500'}`}>1</div>
            <div className={`flex-grow h-1 mx-2 rounded transition-all ${step >= 2 ? 'bg-primary-600' : 'bg-slate-200'}`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold transition-all ${step >= 2 ? 'bg-primary-600 text-white shadow-lg' : 'bg-slate-200 text-slate-500'}`}>2</div>
          </div>
        </div>

        <div className="text-center mb-10">
           <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">ลงทะเบียนบุคคลทั่วไป (ไทย)</h1>
           <p className="text-slate-500 font-medium">
             {step === 1 ? 'ส่วนที่ 1: ข้อมูลบุคคล (Personal Info)' : 'ส่วนที่ 2: ข้อมูลการทำงาน/การศึกษา'}
           </p>
        </div>
        
        <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-slate-100 transition-all duration-500">
          {step === 1 && (
            <form onSubmit={handleNext} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">ชื่อ-นามสกุล <span className="text-red-500">*</span></label>
                  <input type="text" required placeholder="เช่น สมชาย รักเรียน" className="block w-full rounded-xl border-slate-200 shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 p-3 border bg-slate-50 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">เลขบัตรประจำตัวประชาชน <span className="text-red-500">*</span></label>
                  <input type="text" required maxLength={13} placeholder="13 หลัก" className="block w-full rounded-xl border-slate-200 shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 p-3 border bg-slate-50 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">สัญชาติ <span className="text-red-500">*</span></label>
                  <input type="text" defaultValue="ไทย" readOnly className="block w-full rounded-xl border-slate-200 shadow-sm p-3 border bg-slate-100 text-slate-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">วันเดือนปีเกิด <span className="text-red-500">*</span></label>
                  <input type="date" required className="block w-full rounded-xl border-slate-200 shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 p-3 border bg-slate-50 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">เพศ <span className="text-red-500">*</span></label>
                  <div className="flex items-center gap-6 mt-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="gender" value="male" className="h-4 w-4 text-primary-600 focus:ring-primary-500" /> <span className="text-slate-700">ชาย</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="gender" value="female" className="h-4 w-4 text-primary-600 focus:ring-primary-500" /> <span className="text-slate-700">หญิง</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="gender" value="other" className="h-4 w-4 text-primary-600 focus:ring-primary-500" /> <span className="text-slate-700">อื่นๆ</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">เบอร์โทรศัพท์ติดต่อ <span className="text-red-500">*</span></label>
                  <input type="tel" required placeholder="08x-xxxxxxx" className="block w-full rounded-xl border-slate-200 shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 p-3 border bg-slate-50 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">อีเมลติดต่อ <span className="text-red-500">*</span></label>
                  <input type="email" required placeholder="example@mail.com" className="block w-full rounded-xl border-slate-200 shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 p-3 border bg-slate-50 outline-none" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">ที่อยู่ติดต่อ (Address) <span className="text-red-500">*</span></label>
                  <textarea rows={3} required placeholder="เลขที่, หมู่, ถนน, ตำบล/แขวง, อำเภอ/เขต, จังหวัด, รหัสไปรษณีย์" className="block w-full rounded-xl border-slate-200 shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 p-3 border bg-slate-50 outline-none"></textarea>
                </div>
              </div>
              <div className="flex justify-between items-center pt-8 border-t border-slate-100">
                 <button type="button" onClick={() => setView(ViewState.LANDING)} className="px-8 py-3 text-slate-500 font-bold hover:text-slate-800 transition-colors">ยกเลิก</button>
                 <button type="submit" className="px-10 py-3 bg-primary-600 text-white font-bold rounded-xl shadow-lg hover:bg-primary-700 transition-all flex items-center gap-2">
                   ขั้นตอนถัดไป
                   <span className="material-symbols-outlined">arrow_forward</span>
                 </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-10 animate-fade-in">
              <div>
                <label className="block text-lg font-bold text-slate-900 mb-4">สถานะการศึกษา</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div 
                    onClick={() => setSubType('professional')}
                    className={`cursor-pointer p-6 rounded-2xl border-2 transition-all flex flex-col items-center text-center gap-2 ${subType === 'professional' ? 'border-primary-600 bg-primary-50 ring-1 ring-primary-600' : 'border-slate-100 hover:border-slate-200'}`}
                  >
                    <span className={`material-symbols-outlined text-4xl ${subType === 'professional' ? 'text-primary-600' : 'text-slate-400'}`}>work</span>
                    <span className="font-bold text-slate-900">จบการศึกษาแล้ว</span>
                    <p className="text-xs text-slate-500">(ข้อมูลการทำงาน)</p>
                  </div>
                  <div 
                    onClick={() => setSubType('student')}
                    className={`cursor-pointer p-6 rounded-2xl border-2 transition-all flex flex-col items-center text-center gap-2 ${subType === 'student' ? 'border-primary-600 bg-primary-50 ring-1 ring-primary-600' : 'border-slate-100 hover:border-slate-200'}`}
                  >
                    <span className={`material-symbols-outlined text-4xl ${subType === 'student' ? 'text-primary-600' : 'text-slate-400'}`}>school</span>
                    <span className="font-bold text-slate-900">กำลังศึกษาอยู่</span>
                    <p className="text-xs text-slate-500">(ข้อมูลการศึกษา)</p>
                  </div>
                </div>
              </div>

              {subType === 'professional' ? (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-600">business</span>
                    ข้อมูลการทำงาน (Work Info)
                  </h3>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 mb-1">ชื่อสถานที่ทำงาน <span className="text-red-500">*</span></label>
                      <input type="text" required className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">ตำแหน่งงาน <span className="text-red-500">*</span></label>
                      <input type="text" required className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">ลักษณะงาน <span className="text-red-500">*</span></label>
                      <select required className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white">
                        <option value="">-- โปรดเลือก --</option>
                        <option>ออกแบบ (Design)</option>
                        <option>ก่อสร้าง (Construction)</option>
                        <option>บริหารโครงการ (PM)</option>
                        <option>บริหารอาคาร (FM)</option>
                        <option>อื่นๆ</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 mb-1">ที่อยู่ติดต่อ (Work Address)</label>
                      <textarea rows={2} className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white"></textarea>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-600">history_edu</span>
                    ข้อมูลการศึกษา (Education Info)
                  </h3>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">วุฒิการศึกษา <span className="text-red-500">*</span></label>
                      <input type="text" required placeholder="ป.ตรี / ป.โท" className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">คณะ <span className="text-red-500">*</span></label>
                      <input type="text" required className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">สาขาวิชา <span className="text-red-500">*</span></label>
                      <input type="text" required className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">ปีที่เข้าศึกษา <span className="text-red-500">*</span></label>
                      <input type="text" required placeholder="เช่น 2567" className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 mb-1">สถาบันการศึกษา <span className="text-red-500">*</span></label>
                      <input type="text" required className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">รหัสนักศึกษา <span className="text-red-500">*</span></label>
                      <input type="text" required className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 mb-1">บัตรนักศึกษา (แนบไฟล์) <span className="text-red-500">*</span></label>
                      <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-200 border-dashed rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer relative">
                        <div className="space-y-1 text-center">
                          <span className="material-symbols-outlined text-slate-400 text-4xl mb-2">badge</span>
                          <div className="flex text-sm text-slate-600">
                            <span className="font-bold text-primary-600">คลิกเพื่ออัปโหลดบัตรนักศึกษา</span>
                          </div>
                        </div>
                        <input type="file" required className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-6 pt-8 border-t border-slate-100">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-600">account_circle</span>
                  ข้อมูลบัญชีผู้ใช้
                </h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">รหัสผ่าน <span className="text-red-500">*</span></label>
                    <input type="password" required className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">ยืนยันรหัสผ่าน <span className="text-red-500">*</span></label>
                    <input type="password" required className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white" />
                  </div>
                </div>
              </div>

              <SecurityQuestionsSection />
              <PDPASection />

              <div className="flex justify-between items-center pt-8 border-t border-slate-100">
                 <button type="button" onClick={() => setStep(1)} className="px-8 py-3 text-slate-500 font-bold hover:text-slate-800 transition-colors">ย้อนกลับ</button>
                 <button type="submit" className="px-10 py-3 bg-primary-600 text-white font-bold rounded-xl shadow-lg hover:bg-primary-700 transition-all">
                   ยืนยันการลงทะเบียน
                 </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

// ... Rest of the file (RegisterForeign, RegisterCorporate) remains the same ...
// ----------------------------------------------------------------------
// Foreign Registration
// ----------------------------------------------------------------------
export const RegisterForeign: React.FC<RegProps> = ({ setView, onSuccess }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess({ type: 'Foreign' });
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">Foreign Member Registration</h1>
          <p className="text-slate-500 font-medium italic">Please provide your personal and professional information</p>
        </div>
        
        <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-10">
             <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600">person</span>
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                   <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 mb-1">Full Name (as in Passport) <span className="text-red-500">*</span></label>
                      <input type="text" required placeholder="Johnathan Doe" className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white" />
                   </div>
                   <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Passport Number / ID <span className="text-red-500">*</span></label>
                      <input type="text" required placeholder="A12345678" className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white" />
                   </div>
                   <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Nationality <span className="text-red-500">*</span></label>
                      <input type="text" required className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white" />
                   </div>
                   <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Date of Birth <span className="text-red-500">*</span></label>
                      <input type="date" required className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white" />
                   </div>
                   <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Gender <span className="text-red-500">*</span></label>
                      <select required className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                   </div>
                   <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
                      <input type="tel" required placeholder="+xxx xxxxxxxx" className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white" />
                   </div>
                   <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                      <input type="email" required placeholder="john@example.com" className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white" />
                   </div>
                   <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 mb-1">Residential Address <span className="text-red-500">*</span></label>
                      <textarea rows={2} required className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white"></textarea>
                   </div>
                </div>
             </div>

             <div className="space-y-6 pt-8 border-t border-slate-100">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600">work</span>
                  Work Information
                </h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                   <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 mb-1">Workplace Name <span className="text-red-500">*</span></label>
                      <input type="text" required className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white" />
                   </div>
                   <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Job Position <span className="text-red-500">*</span></label>
                      <input type="text" required className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white" />
                   </div>
                   <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Nature of Work <span className="text-red-500">*</span></label>
                      <input type="text" required className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white" />
                   </div>
                   <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 mb-1">Work Address</label>
                      <textarea rows={2} className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white"></textarea>
                   </div>
                </div>
             </div>

             <div className="space-y-6 pt-8 border-t border-slate-100">
                <h3 className="text-xl font-bold text-slate-800">Account Credentials</h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                   <div>
                       <label className="block text-sm font-medium text-slate-700 mb-1">Password <span className="text-red-500">*</span></label>
                       <input type="password" required className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white" />
                   </div>
                   <div>
                       <label className="block text-sm font-medium text-slate-700 mb-1">Confirm Password <span className="text-red-500">*</span></label>
                       <input type="password" required className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white" />
                   </div>
                </div>
             </div>

             <SecurityQuestionsSection />
             <PDPASection />

             <div className="flex justify-between items-center pt-8 border-t border-slate-100">
                <button type="button" onClick={() => setView(ViewState.LANDING)} className="px-8 py-3 text-slate-500 font-bold hover:text-slate-800">Cancel</button>
                <button type="submit" className="px-10 py-4 bg-emerald-600 text-white font-bold rounded-xl shadow-lg hover:bg-emerald-700 transition-all">
                  Register Now
                </button>
             </div>
          </form>
        </div>
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
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">ลงทะเบียนสมาชิกนิติบุคคล (Corporate)</h1>
          <p className="text-slate-500 font-medium italic">สำหรับองค์กร บริษัท และหน่วยงานราชการ</p>
        </div>
        
        <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-10">
             {/* Corporate Info (1) */}
             <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-600">corporate_fare</span>
                  ข้อมูลนิติบุคคล (Corporate Info)
                </h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                   <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 mb-1">ชื่อองค์กร / หน่วยงาน <span className="text-red-500">*</span></label>
                      <input type="text" required placeholder="ชื่อบริษัทหรือหน่วยงาน" className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white" />
                   </div>
                   <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">เลขทะเบียนนิติบุคคล <span className="text-red-500">*</span></label>
                      <input type="text" required maxLength={13} placeholder="เลขประจำตัวผู้เสียภาษี 13 หลัก" className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white" />
                   </div>
                   <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">ประเภทธุรกิจ <span className="text-red-500">*</span></label>
                      <select required className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white">
                        <option value="">-- โปรดเลือก --</option>
                        <option>รัฐวิสาหกิจ / ราชการ</option>
                        <option>เอกชน (จำกัด / มหาชน)</option>
                        <option>สถานศึกษา</option>
                      </select>
                   </div>
                   <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 mb-1">ขอบเขตการดำเนินงาน <span className="text-red-500">*</span></label>
                      <input type="text" required placeholder="ก่อสร้าง / บริหารอาคาร / ที่ปรึกษา" className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white" />
                   </div>
                   <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 mb-1">อีเมลนิติบุคคล <span className="text-red-500">*</span></label>
                      <input type="email" required placeholder="corp@company.com" className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white" />
                   </div>
                   <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 mb-1">ที่อยู่ติดต่อของนิติบุคคล <span className="text-red-500">*</span></label>
                      <textarea rows={3} required className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white"></textarea>
                   </div>
                   <div className="sm:col-span-2">
                     <label className="block text-sm font-medium text-slate-700 mb-1 italic">หนังสือรับรองบริษัท (แนบไฟล์ PDF) <span className="text-red-500">*</span></label>
                     <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-200 border-dashed rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer relative">
                        <div className="space-y-1 text-center">
                          <span className="material-symbols-outlined text-slate-400 text-4xl mb-2">upload_file</span>
                          <div className="flex text-sm text-slate-600">
                            <span className="font-bold text-primary-600">คลิกเพื่ออัปโหลดไฟล์</span>
                          </div>
                        </div>
                        <input type="file" required className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                     </div>
                   </div>
                </div>
             </div>

             {/* Personal Info (2,5) */}
             <div className="space-y-6 pt-8 border-t border-slate-100">
               <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                 <span className="material-symbols-outlined text-primary-600">contact_mail</span>
                 ข้อมูลผู้ประสานงานหลัก (Personal Info)
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">ชื่อ-นามสกุล <span className="text-red-500">*</span></label>
                   <input type="text" required placeholder="ชื่อผู้ติดต่อ" className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">เลขบัตรประจำตัวประชาชน <span className="text-red-500">*</span></label>
                   <input type="text" required maxLength={13} placeholder="กรอกเลขบัตร 13 หลัก" className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">เบอร์โทรศัพท์ติดต่อ <span className="text-red-500">*</span></label>
                   <input type="tel" required placeholder="08x-xxxxxxx" className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">อีเมลติดต่อ <span className="text-red-500">*</span></label>
                   <input type="email" required placeholder="contact@company.com" className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white" />
                 </div>
                 <div className="sm:col-span-2">
                   <label className="block text-sm font-medium text-slate-700 mb-1">ที่อยู่ติดต่อ (ส่วนตัว/ที่ทำงาน)</label>
                   <textarea rows={2} className="block w-full rounded-xl border-slate-200 p-3 border outline-none bg-slate-50 focus:bg-white"></textarea>
                 </div>
               </div>
             </div>

             <SecurityQuestionsSection />
             <PDPASection />

             <div className="flex justify-between items-center pt-8 border-t border-slate-100">
                <button type="button" onClick={() => setView(ViewState.LANDING)} className="px-8 py-3 text-slate-500 font-bold hover:text-slate-800">Cancel</button>
                <button type="submit" className="px-10 py-4 bg-primary-600 text-white font-bold rounded-xl shadow-lg hover:bg-primary-700 transition-all">
                  ยืนยันการลงทะเบียนนิติบุคคล
                </button>
             </div>
          </form>
        </div>
      </div>
    </div>
  );
};
