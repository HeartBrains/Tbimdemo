import React from 'react';
import { ViewState } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentView, setView }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center cursor-pointer" onClick={() => setView(ViewState.LANDING)}>
              <div className="flex-shrink-0 flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  T
                </div>
                <span className="font-display font-bold text-xl text-slate-800 tracking-tight">TBIM</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {currentView !== ViewState.LOGIN && currentView !== ViewState.DASHBOARD && (
                <button 
                  onClick={() => setView(ViewState.LOGIN)}
                  className="text-slate-600 hover:text-primary-600 font-medium text-sm transition-colors"
                >
                  เข้าสู่ระบบ
                </button>
              )}
              {currentView === ViewState.DASHBOARD && (
                <div className="flex items-center gap-3">
                  <div className="hidden md:block text-right">
                    <div className="text-sm font-medium text-slate-900">John Doe</div>
                    <div className="text-xs text-slate-500">สมาชิก</div>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden">
                    <span className="material-symbols-outlined text-slate-400">person</span>
                  </div>
                  <button 
                    onClick={() => setView(ViewState.LANDING)}
                    className="ml-2 text-sm text-red-600 hover:text-red-700 font-medium"
                  >
                    ออกจากระบบ
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm">
              &copy; {new Date().getFullYear()} TBIM Member Portal. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">นโยบายความเป็นส่วนตัว</a>
              <a href="#" className="hover:text-white transition-colors">เงื่อนไขการให้บริการ</a>
              <a href="#" className="hover:text-white transition-colors">ติดต่อฝ่ายบริการลูกค้า</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};