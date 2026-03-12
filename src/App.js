import React, { useState } from 'react';
import { 
  GitFork, Download, Send, GitPullRequest, Tag, Terminal, 
  Server, Monitor, ArrowRight, CheckCircle2, PlusSquare, 
  Github, Link, Laptop 
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('new'); // 'new' or 'existing'
  const [activeStep, setActiveStep] = useState(0);

  const newProjectSteps = [
    {
      title: "1. Create Local (สร้างโปรเจกต์)ppppp",
      icon: <PlusSquare className="w-8 h-8 text-indigo-500" />,
      description: "เริ่มต้นสร้างโฟลเดอร์งานในเครื่องคอมพิวเตอร์ของคุณเองด้วยคำสั่งสร้างโปรเจกต์อัตโนมัติ",
      command: "npx create-react-app my-app\ncd my-app",
      color: "indigo"
    },
    {
      title: "2. Git Init (ตั้งค่า Git)",
      icon: <Terminal className="w-8 h-8 text-slate-500" />,
      description: "ประกาศให้โฟลเดอร์นี้เป็น Git Repository เพื่อเริ่มติดตามการเปลี่ยนแปลงของโค้ด",
      command: "git init\ngit add .\ngit commit -m 'Initial commit'",
      color: "slate"
    },
    {
      title: "3. Create GitHub Repo (สร้างบ้านบนคลาวด์)",
      icon: <Github className="w-8 h-8 text-black" />,
      description: "ไปที่หน้าเว็บ GitHub แล้วกด 'New Repository' เพื่อสร้างพื้นที่รับโค้ดบนออนไลน์ (ห้ามติ๊กสร้าง README ถ้ามีในเครื่องแล้ว)",
      command: "ไปที่ github.com/new",
      color: "zinc"
    },
    {
      title: "4. Connect Remote (เชื่อมต่อ)",
      icon: <Link className="w-8 h-8 text-blue-500" />,
      description: "เชื่อมโยงโฟลเดอร์ในเครื่อง (Local) เข้ากับที่เก็บข้อมูลบน GitHub (Remote)",
      command: "git remote add origin <url-ที่เพิ่งสร้าง>\ngit branch -M main",
      color: "blue"
    },
    {
      title: "5. First Push (ส่งโค้ดครั้งแรก)",
      icon: <Send className="w-8 h-8 text-green-500" />,
      description: "ผลักโค้ดทั้งหมดจากเครื่องขึ้นไปเก็บไว้บน GitHub อย่างปลอดภัย",
      command: "git push -u origin main",
      color: "green"
    }
  ];

  const existingProjectSteps = [
    {
      title: "1. Fork (สร้างสำเนา)",
      icon: <GitFork className="w-8 h-8 text-orange-500" />,
      description: "คัดลอกโปรเจกต์คนอื่นมาไว้ในบัญชีเรา เพื่อให้เรามีสิทธิ์แก้ไขได้เต็มที่",
      command: "กดปุ่ม 'Fork' บนหน้า GitHub",
      color: "orange"
    },
    {
      title: "2. Clone (ดึงลงเครื่อง)",
      icon: <Download className="w-8 h-8 text-teal-500" />,
      description: "ดาวน์โหลดโค้ดลงเครื่องคอมพิวเตอร์ และเตรียมพร้อมสำหรับการติดตั้ง Dependencies",
      command: "git clone <url-ของคุณ>\ncd <โฟลเดอร์งาน>\nnpm install",
      color: "teal"
    },
    {
      title: "3. Commit & Push",
      icon: <Send className="w-8 h-8 text-purple-500" />,
      description: "บันทึกสิ่งที่แก้ไขและส่งกลับขึ้นไปยัง GitHub ของเราเอง",
      command: "git add .\ngit commit -m 'Update code'\ngit push",
      color: "purple"
    },
    {
      title: "4. Pull Request",
      icon: <GitPullRequest className="w-8 h-8 text-pink-500" />,
      description: "แจ้งเจ้าของโปรเจกต์หลักว่าเราทำเสร็จแล้ว และขอให้นำโค้ดเราไปรวมด้วย",
      command: "กด 'New Pull Request' บน GitHub",
      color: "pink"
    }
  ];

  const currentSteps = activeTab === 'new' ? newProjectSteps : existingProjectSteps;

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-slate-800 mb-4 tracking-tight">Git & GitHub Master Guide</h1>
          <p className="text-slate-600">สรุปขั้นตอนการทำงานครอบคลุมทุกสถานการณ์</p>
        </div>

        {/* Tab Selection */}
        <div className="flex p-1 bg-slate-200 rounded-xl mb-8 max-w-md mx-auto">
          <button 
            onClick={() => { setActiveTab('new'); setActiveStep(0); }}
            className={`flex-1 py-2 px-4 rounded-lg font-bold transition-all ${activeTab === 'new' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500'}`}
          >
            เริ่มโปรเจกต์ใหม่ (Local First)
          </button>
          <button 
            onClick={() => { setActiveTab('existing'); setActiveStep(0); }}
            className={`flex-1 py-2 px-4 rounded-lg font-bold transition-all ${activeTab === 'existing' ? 'bg-white shadow-sm text-orange-600' : 'text-slate-500'}`}
          >
            ทำงานต่อจากเพื่อน (Fork/Clone)
          </button>
        </div>

        {/* Visual Workflow Map */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-10 border border-slate-200 relative overflow-hidden">
          <div className="flex justify-around items-center relative z-10">
            <div className="flex flex-col items-center gap-3">
              <div className={`p-5 rounded-2xl transition-all ${activeTab === 'new' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                <Laptop className="w-10 h-10" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider">Local Machine</span>
            </div>

            <div className="flex-1 px-4">
               <div className="h-0.5 w-full border-t-2 border-dashed border-slate-300 relative">
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold ${activeTab === 'new' ? 'bg-indigo-100 text-indigo-600' : 'bg-orange-100 text-orange-600'}`}>
                    {activeTab === 'new' ? 'PUSH TO REMOTE' : 'PULL TO LOCAL'}
                  </div>
               </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className={`p-5 rounded-2xl transition-all ${activeTab === 'new' ? 'bg-slate-800 text-white' : 'bg-orange-500 text-white'}`}>
                <Github className="w-10 h-10" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider">GitHub Cloud</span>
            </div>
          </div>
        </div>

        {/* Steps List */}
        <div className="grid gap-4">
          {currentSteps.map((step, index) => (
            <div 
              key={index}
              onClick={() => setActiveStep(index)}
              className={`group relative overflow-hidden flex flex-col md:flex-row gap-6 p-6 rounded-2xl transition-all cursor-pointer border-2 ${
                activeStep === index 
                ? `bg-white border-${step.color}-500 shadow-xl scale-[1.01]` 
                : 'bg-white/50 border-transparent hover:border-slate-300'
              }`}
            >
              <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${activeStep === index ? `bg-${step.color}-100` : 'bg-slate-100'}`}>
                {step.icon}
              </div>
              
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className={`text-xl font-black ${activeStep === index ? 'text-slate-900' : 'text-slate-500'}`}>
                    {step.title}
                  </h3>
                  {activeStep === index && <CheckCircle2 className={`w-5 h-5 text-${step.color}-500`} />}
                </div>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {step.description}
                </p>
                
                {activeStep === index && (
                  <div className="bg-slate-900 text-slate-300 p-4 rounded-xl font-mono text-sm border-l-4 border-indigo-400">
                    <div className="flex items-center gap-2 mb-2 opacity-50 border-b border-slate-700 pb-1">
                      <Terminal className="w-3 h-3" />
                      <span className="text-[10px] uppercase">Command Line</span>
                    </div>
                    <pre className="whitespace-pre-wrap leading-relaxed">{step.command}</pre>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Quick Tips */}
        <div className="mt-12 grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
             <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
               <CheckCircle2 className="w-5 h-5 text-green-500" /> Do's
             </h4>
             <ul className="text-xs text-slate-500 space-y-2">
               <li>• ตรวจสอบชื่อไฟล์สะกดให้ถูกก่อน `git add`</li>
               <li>• เขียน Commit Message ให้สื่อความหมาย</li>
               <li>• รันโค้ดเช็คความเรียบร้อยก่อน `git push`</li>
             </ul>
          </div>
          <div className="p-5 bg-indigo-900 text-white rounded-2xl shadow-lg">
             <h4 className="font-bold mb-3 flex items-center gap-2">
               <Tag className="w-5 h-5" /> Pro Tip
             </h4>
             <p className="text-xs text-indigo-100 leading-relaxed">
               หากคุณ Clone โปรเจกต์ที่มีหลายโฟลเดอร์ (เช่น Client/Server) คุณต้องรัน <code className="bg-indigo-800 px-1">npm install</code> ใน "ทุกโฟลเดอร์" ก่อนเริ่มงานเสมอ!
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;