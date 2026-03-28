import React, { useState, useRef } from 'react';
import {
  Upload,
  ShieldCheck,
  AlertTriangle,
  FileVideo,
  Cpu,
  Fingerprint,
  Activity,
  CheckCircle2,
  ChevronRight,
  RefreshCcw,
  Zap,
  BarChart3,
  Lock,
  Eye,
  Crosshair,
  Mail,
  Key,
  ArrowRight,
  Globe,
  Github,
  Info,
  Loader2
} from 'lucide-react';

const AuthPage = ({ onBack, initialMode = 'signin' }) => {
  const [mode, setMode] = useState(initialMode);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleAuth = (e) => {
    e.preventDefault();
    setIsAuthenticating(true);
    setTimeout(() => {
      setIsAuthenticating(false);
      onBack();
    }, 1500);
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-6 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[480px] animate-in fade-in zoom-in duration-500">
        <div className="bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] p-10 shadow-2xl backdrop-blur-3xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />

          <div className="text-center mb-10">
            <div className="inline-flex p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 mb-6">
              <Lock className="text-indigo-400" size={28} />
            </div>
            <h2 className="text-3xl font-black tracking-tighter text-white uppercase">
              {mode === 'signin' ? 'Secure Terminal Access' : 'Create Forensic Identity'}
            </h2>
            <p className="text-neutral-500 text-sm mt-2 font-medium">
              {mode === 'signin' ? 'Authorization required for neural analysis' : 'Join the global network of media verification'}
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleAuth}>
            {mode === 'signup' && (
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-500 group-focus-within:text-indigo-400 transition-colors">
                  <Fingerprint size={18} />
                </div>
                <input
                  type="text"
                  required
                  placeholder="FULL OPERATOR NAME"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-xs font-bold tracking-widest uppercase focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.08] transition-all placeholder:text-neutral-700 text-white"
                />
              </div>
            )}

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-500 group-focus-within:text-indigo-400 transition-colors">
                <Mail size={18} />
              </div>
              <input
                type="email"
                required
                placeholder="OPERATOR EMAIL"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-xs font-bold tracking-widest uppercase focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.08] transition-all placeholder:text-neutral-700 text-white"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-500 group-focus-within:text-indigo-400 transition-colors">
                <Key size={18} />
              </div>
              <input
                type="password"
                required
                placeholder="PASSWORD"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-xs font-bold tracking-widest uppercase focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.08] transition-all placeholder:text-neutral-700 text-white"
              />
            </div>

            <button
              type="submit"
              disabled={isAuthenticating}
              className="w-full py-4 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all hover:bg-indigo-50 active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100 shadow-xl shadow-white/5 mt-4"
            >
              {isAuthenticating ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <>
                  {mode === 'signin' ? 'Verify Identity' : 'Establish Protocol'}
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/5 space-y-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
              <div className="relative flex justify-center text-[10px] font-black uppercase tracking-[0.2em] text-neutral-600">
                <span className="bg-[#0A0A0A] px-4">Third-party Auth</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button type="button" className="flex items-center justify-center gap-3 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all">
                <Github size={18} />
                <span className="text-[10px] font-black uppercase tracking-widest">Github</span>
              </button>
              <button type="button" className="flex items-center justify-center gap-3 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all">
                <Globe size={18} />
                <span className="text-[10px] font-black uppercase tracking-widest">Google</span>
              </button>
            </div>

            <p className="text-center text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
              {mode === 'signin' ? "Don't have Account?" : "Already established?"} {' '}
              <button
                type="button"
                onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
                className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4"
              >
                {mode === 'signin' ? 'Request Access' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>

        <button
          onClick={onBack}
          className="w-full mt-8 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-600 hover:text-neutral-400 transition-colors flex items-center justify-center gap-2"
        >
          Return to public terminal
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [page, setPage] = useState('home');
  const [file, setFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [result, setResult] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [analysisLogs, setAnalysisLogs] = useState([]);
  const videoRef = useRef(null);

  const steps = [
    "Neural Metadata Extraction",
    "Bio-Signal Synchronization",
    "Spatial Coherence Mapping",
    "Spectral Noise Profiling",
    "AI-Adversarial Verification"
  ];

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile.type.startsWith('video/')) {
        handleFile(droppedFile);
      }
    }
  };

  const handleFile = (selectedFile) => {
    setFile(selectedFile);
    setResult(null);
    setAnalysisLogs([]);
  };

  const startAnalysis = async () => {
    setIsAnalyzing(true);
    setAnalysisProgress(0);
    setAnalysisLogs(["[SYSTEM] Initializing kernel v8.4.2..."]);

    for (let i = 0; i < steps.length; i++) {
      setActiveStep(i);
      setAnalysisLogs(prev => [...prev, `[PROC] ${steps[i]} in progress...`]);

      const segmentDuration = 100 / steps.length;
      for (let p = 0; p <= segmentDuration; p += 4) {
        setAnalysisProgress((i * segmentDuration) + p);
        await new Promise(r => setTimeout(r, 150));
      }

      setAnalysisLogs(prev => [...prev, `[OK] ${steps[i]} validation complete.`]);
    }

    const isAI = Math.random() > 0.5;
    const confidence = (Math.random() * (99.9 - 92.5) + 92.5).toFixed(2);

    setResult({
      isAI,
      confidence,
      modelUsed: "Hyper-Vision Transformer Gen-5",
      anomalies: isAI ? [
        "Inconsistent subsurface scattering on facial mesh",
        "Discontinuous eye-movement vectors (Frame 88)",
        "Synthetic artifacts in frequency domain (HF sector)"
      ] : [
        "Natural biometric signals verified",
        "Consistent environmental lighting physics",
        "Standard sensor noise profile matched"
      ]
    });
    setIsAnalyzing(false);
  };

  const reset = () => {
    setFile(null);
    setResult(null);
    setAnalysisProgress(0);
    setAnalysisLogs([]);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-100 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.05),transparent)] pointer-events-none" />
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23ffffff' fill-opacity='1'/%3E%3C/svg%3E")` }} />

      <nav className="border-b border-white/5 bg-black/40 backdrop-blur-2xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button onClick={() => setPage('home')} className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500 blur-md opacity-0 group-hover:opacity-40 transition-opacity animate-pulse" />
              <div className="relative bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-xl shadow-xl transition-transform group-hover:scale-110">
                <ShieldCheck size={26} className="text-white" />
              </div>
            </div>
            <div className="text-left">
              <span className="font-black text-2xl tracking-tighter bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                DEEPSCAN.AI
              </span>
              <div className="flex items-center gap-1.5 leading-none">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold text-neutral-500 tracking-widest uppercase">Nodes Online</span>
              </div>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-10">
            {['Intelligence', 'Protocols', 'Enterprise', 'API'].map((item) => (
              <a key={item} href="#" className="text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-indigo-400 transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setPage('signin')}
              className="hidden sm:block text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-white mr-4 transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => setPage('signup')}
              className="bg-white text-black px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-indigo-50 transition-all shadow-lg shadow-white/5 active:scale-95"
            >
              Secure Access
            </button>
          </div>
        </div>
      </nav>

      {page === 'home' ? (
        <main className="max-w-7xl mx-auto px-6 py-16 relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  <Lock size={12} className="text-indigo-400" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">Military-Grade Detection Engine</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-white">
                  ELIMINATE <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">SYNTHETIC</span> DECEPTION.
                </h1>
                <p className="text-xl text-neutral-400 max-w-xl leading-relaxed font-medium">
                  Unmask AI-generated media with sub-pixel forensic analysis and biological verification protocols.
                </p>
              </div>

              {!file ? (
                <div
                  className={`relative group border-[1px] rounded-[2rem] p-16 transition-all duration-500 cursor-pointer overflow-hidden
                    ${dragActive ? 'border-indigo-500 bg-indigo-500/5 shadow-[0_0_50px_rgba(99,102,241,0.1)]' : 'border-white/10 bg-neutral-900/40 hover:bg-neutral-900/60 hover:border-white/20'}`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    className="absolute inset-0 opacity-0 cursor-pointer z-20"
                    accept="video/*"
                    onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
                  />
                  <div className="flex flex-col items-center gap-8 relative z-10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-indigo-500/20 blur-2xl group-hover:scale-150 transition-transform duration-700" />
                      <div className="w-24 h-24 bg-neutral-950 border border-white/10 rounded-3xl flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-500 shadow-2xl relative">
                        <Upload className="text-indigo-400" size={36} />
                      </div>
                    </div>
                    <div className="text-center space-y-3">
                      <p className="text-2xl font-bold tracking-tight">Drop video for verification</p>
                      <p className="text-sm text-neutral-500 font-medium">MP4, MOV, WebM • Up to 1GB per session</p>
                    </div>
                    <div className="flex gap-2">
                      {[Eye, Fingerprint, Activity].map((Icon, idx) => (
                        <div key={idx} className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-neutral-600">
                          <Icon size={16} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="group relative bg-neutral-900/80 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl backdrop-blur-xl transition-all duration-700">
                  <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                        <FileVideo size={20} className="text-indigo-400" />
                      </div>
                      <div>
                        <span className="block text-sm font-black truncate max-w-[200px] text-white uppercase tracking-wider">{file.name}</span>
                        <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Video Stream 01</span>
                      </div>
                    </div>
                    <button onClick={reset} className="p-2 hover:bg-white/5 rounded-full transition-colors text-neutral-400">
                      <RefreshCcw size={18} />
                    </button>
                  </div>

                  <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
                    <video ref={videoRef} src={URL.createObjectURL(file)} className="max-h-full" controls />

                    {isAnalyzing && (
                      <div className="absolute inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-12">
                        <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500/50 animate-scan" />
                        <div className="w-full max-w-sm space-y-8 relative">
                          <div className="flex justify-between items-end">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <Crosshair size={14} className="text-indigo-400 animate-spin-slow" />
                                <p className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]">Live Analysis</p>
                              </div>
                              <p className="text-lg font-bold text-white uppercase tracking-tight">{steps[activeStep]}</p>
                            </div>
                            <p className="text-4xl font-black font-mono tracking-tighter text-indigo-500">{Math.round(analysisProgress)}%</p>
                          </div>
                          <div className="relative h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                            <div
                              className="h-full bg-gradient-to-r from-indigo-600 via-indigo-400 to-indigo-600 transition-all duration-500 ease-out shadow-[0_0_20px_rgba(99,102,241,0.8)]"
                              style={{ width: `${analysisProgress}%` }}
                            />
                          </div>
                          <div className="flex justify-center">
                            <div className="w-32 h-32 rounded-full border border-indigo-500/20 flex items-center justify-center relative">
                              <div className="absolute inset-0 border-t-2 border-indigo-500 rounded-full animate-spin" />
                              <div className="absolute inset-4 border border-indigo-500/10 rounded-full animate-ping" />
                              <Fingerprint size={32} className="text-indigo-500/50" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {!isAnalyzing && !result && (
                    <div className="p-10 flex flex-col items-center border-t border-white/5 bg-gradient-to-b from-transparent to-black/40">
                      <button
                        onClick={startAnalysis}
                        className="group relative px-12 py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
                      >
                        <Zap size={18} className="fill-current" />
                        Initiate Forensic Sequence
                      </button>
                      <p className="mt-6 text-[10px] font-bold text-neutral-600 uppercase tracking-widest flex items-center gap-2">
                        <Info size={12} /> Encrypted verification • No data stored
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Activity size={80} />
                </div>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-neutral-500 mb-8 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-500" /> System Diagnostics
                </h3>

                <div className="space-y-4 max-h-[280px] overflow-y-auto pr-4 custom-scrollbar font-mono text-xs">
                  {analysisLogs.length === 0 ? (
                    <div className="text-neutral-700 py-10 text-center border border-dashed border-white/5 rounded-2xl">
                      [WAIT] Awaiting packet ingress...
                    </div>
                  ) : (
                    analysisLogs.map((log, i) => (
                      <div key={i} className="flex gap-4 p-3 rounded-xl bg-white/5 border border-white/5 animate-in fade-in slide-in-from-left-4 duration-500">
                        <span className="text-neutral-600 font-bold opacity-50">{i.toString().padStart(2, '0')}</span>
                        <span className={log.startsWith('[OK]') ? 'text-emerald-400 font-bold' : 'text-neutral-400'}>{log}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {result && (
                <div className={`rounded-[2rem] p-10 border-2 animate-in zoom-in slide-in-from-bottom-8 duration-700 shadow-3xl relative overflow-hidden ${result.isAI ? 'bg-rose-500/5 border-rose-500/20' : 'bg-emerald-500/5 border-emerald-500/20'}`}>
                  <div className={`absolute -top-12 -right-12 w-48 h-48 rounded-full blur-[80px] opacity-20 ${result.isAI ? 'bg-rose-500' : 'bg-emerald-500'}`} />

                  <div className="flex justify-between items-start mb-10 relative z-10">
                    <div>
                      <h2 className={`text-3xl font-black tracking-tighter uppercase ${result.isAI ? 'text-rose-400' : 'text-emerald-400'}`}>
                        {result.isAI ? 'Synthetic Media Detected' : 'Authenticity Verified'}
                      </h2>
                      <p className="text-[10px] font-black text-neutral-500 tracking-[0.2em] mt-2 flex items-center gap-2 uppercase">
                        <Cpu size={12} /> Engine: {result.modelUsed}
                      </p>
                    </div>
                    <div className={`px-5 py-3 rounded-2xl text-2xl font-black font-mono shadow-xl ${result.isAI ? 'bg-rose-500 text-white' : 'bg-emerald-500 text-white'}`}>
                      {result.confidence}%
                    </div>
                  </div>

                  <div className="space-y-4 mb-10 relative z-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">Forensic Discrepancies</p>
                    <ul className="space-y-4">
                      {result.anomalies.map((item, i) => (
                        <li key={i} className="flex items-start gap-4 text-sm text-neutral-300 font-medium bg-black/40 p-4 rounded-2xl border border-white/5 backdrop-blur-sm">
                          {result.isAI ? (
                            <AlertTriangle size={18} className="text-rose-500 shrink-0 mt-0.5" />
                          ) : (
                            <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                          )}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={reset}
                    className="w-full relative z-10 py-5 bg-white/5 hover:bg-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all border border-white/10 active:scale-[0.98]"
                  >
                    Initiate New Scan
                  </button>
                </div>
              )}

              {!result && !isAnalyzing && (
                <div className="bg-indigo-600/5 border border-indigo-500/10 rounded-[2rem] p-10 relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-500">
                  <div className="relative z-10 space-y-6">
                    <div className="w-14 h-14 bg-indigo-500 rounded-[1.25rem] flex items-center justify-center shadow-lg shadow-indigo-500/20">
                      <BarChart3 size={28} className="text-white" />
                    </div>
                    <h4 className="font-black text-2xl tracking-tight">Forensic Intelligence</h4>
                    <p className="text-sm text-neutral-500 leading-relaxed font-medium">
                      Our platform integrates pixel-level frequency analysis with biological signal detection to ensure 99.9% verification accuracy.
                    </p>
                    <button className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-indigo-400 group-hover:gap-4 transition-all uppercase">
                      View Methodology Docs <ChevronRight size={14} />
                    </button>
                  </div>
                  <div className="absolute -bottom-10 -right-10 text-indigo-500/10 group-hover:rotate-12 transition-transform duration-700">
                    <Fingerprint size={180} />
                  </div>
                </div>
              )}
            </div>
          </div>

          <footer className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5 mt-20">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
              <div className="flex flex-col items-center lg:items-start gap-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={24} className="text-neutral-600" />
                  <span className="text-lg font-black text-neutral-600 tracking-tighter uppercase">DEEPSCAN.AI</span>
                </div>
                <p className="text-xs text-neutral-600 font-bold uppercase tracking-[0.2em]">© 2024 DEEP FORENSICS CORE LABS</p>
              </div>

              <div className="flex flex-wrap justify-center gap-12 grayscale opacity-30 hover:opacity-100 transition-opacity">
                {['INTERPOL', 'EUROPOL', 'CYBERPOL', 'IEEE'].map(brand => (
                  <span key={brand} className="text-xl font-black italic tracking-tighter cursor-default select-none">{brand}</span>
                ))}
              </div>

              <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">
                <a href="#" className="hover:text-indigo-400 transition-colors">Safety Protocols</a>
                <a href="#" className="hover:text-indigo-400 transition-colors">Privacy</a>
                <a href="#" className="hover:text-indigo-400 transition-colors">Audit</a>
              </div>
            </div>
          </footer>
        </main>
      ) : (
        <AuthPage onBack={() => setPage('home')} initialMode={page} />
      )}

      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(99, 102, 241, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(99, 102, 241, 0.3);
        }
      `}</style>
    </div>
  );
};

export default App;