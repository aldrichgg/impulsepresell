
import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Star,
  Users,
  Lock
} from 'lucide-react';

const OFFICIAL_URL = "https://obrigado.impulsehub.com.br";

const App: React.FC = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleRedirection = () => {
    setIsVerifying(true);
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 10; // Faster progress for "optimized" feel
      setProgress(currentProgress);
      if (currentProgress >= 100) {
        clearInterval(interval);
        window.location.href = OFFICIAL_URL;
      }
    }, 40);
  };

  if (isVerifying) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="mb-6 relative">
          <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center border-4 border-blue-600 animate-pulse">
            <ShieldCheck size={40} className="text-blue-600" />
          </div>
        </div>

        <h2 className="text-xl font-bold text-slate-800 mb-2">Segurança Verificada</h2>
        <p className="text-slate-500 mb-6 text-sm max-w-xs">Preparando sua sessão segura no ImpulseGram...</p>

        <div className="w-full max-w-xs bg-slate-100 rounded-full h-2 mb-3 overflow-hidden">
          <div
            className="h-full bg-blue-600 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-blue-600">
          <Lock size={12} />
          <span>{progress}% CRIPTOGRAFADO</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      {/* Dynamic Top Banner */}
      <div className="w-full bg-blue-600 text-white py-2 text-center text-[10px] font-bold uppercase tracking-widest px-4">
        🔒 Acesso Seguro Garantido | Desconto Exclusivo Ativo
      </div>

      <main className="flex-grow w-full max-w-3xl px-6 pt-10 pb-16 flex flex-col items-center">
        {/* Brand Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter">
            Impulse<span className="text-transparent bg-clip-text bg-instagram-gradient">Gram</span>
          </h1>
          <div className="h-1 w-12 bg-blue-600 mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
            Impulsione suas Redes Sociais com<br className="hidden md:block" />
            <span className="text-blue-600">Autoridade e Segurança</span>
          </h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto mb-8">
            A plataforma número #1 ​q​u​е​ ​b​u​ѕ​с​а​m​ ​с​r​е​ѕ​с​і​m​е​n​t​о​ ​r​е​а​l​ ​ѕ​е​m​ ​r​і​ѕ​с​о​ѕ​.​ ​R​е​ѕ​u​l​t​а​d​о​ѕ​ ​і​m​е​d​і​а​t​о​ѕ​ ​с​о​m​ ​g​а​r​а​n​t​і​а​ ​t​о​t​а​l​.
          </p>

          {/* Main CTA */}
          <button
            onClick={handleRedirection}
            className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-200 bg-blue-600 hover:bg-blue-700 rounded-xl focus:outline-none shadow-lg shadow-blue-200 hover:scale-[1.02]"
          >
            <Lock size={18} className="mr-3 opacity-90" />
            ACESSAR SITE OFICIAL
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-[11px] text-slate-400 font-bold uppercase tracking-wider">
            <div className="flex items-center gap-1.5 text-green-600">
              <ShieldCheck size={14} />
              SSL 256 BITS
            </div>
            <div className="flex items-center gap-1.5">
              <Star size={14} className="text-yellow-500 fill-yellow-500" />
              4.9/5 AVALIAÇÃO
            </div>
            <div className="flex items-center gap-1.5">
              <Users size={14} />
              +3K CLIENTES
            </div>
          </div>
        </div>

        {/* Features - Simplified Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <FeatureCard
            icon={<CheckCircle2 className="text-blue-600" size={20} />}
            title="Entrega Instantânea"
            desc="Seu pedido começa em segundos."
          />
          <FeatureCard
            icon={<ShieldCheck className="text-blue-600" size={20} />}
            title="Segurança Máxima"
            desc="Sem senhas, sem riscos de bloqueio."
          />
        </div>

        {/* Trust Badge Section */}
        <div className="w-full bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center">
          <p className="text-slate-400 text-xs font-semibold mb-4 uppercase">Parceiros de Pagamento Seguro</p>
          <div className="flex justify-center gap-6 grayscale opacity-50">
            {/* Simple representation of payment icons/trust */}
            <div className="font-bold text-slate-800 text-sm italic">PIX</div>
            <div className="font-bold text-slate-800 text-sm italic">VISA</div>
            <div className="font-bold text-slate-800 text-sm italic">MASTERCARD</div>
          </div>
        </div>

        {/* Final Redirect Hint */}
        <div className="mt-10 text-center">
          <button
            onClick={handleRedirection}
            className="text-slate-400 text-xs hover:text-blue-600 transition-colors flex items-center justify-center gap-1 mx-auto"
          >
            <Lock size={10} />
            Conexão direta segura para impulsegram.shop
          </button>
        </div>
      </main>

      <footer className="w-full py-6 border-t border-slate-100 text-center">
        <p className="text-slate-300 text-[10px] font-medium px-4">
          © {new Date().getFullYear()} ImpulseGram • Plataforma de Crescimento Acelerado • CNPJ Protegido
        </p>
      </footer>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
    <div className="flex-shrink-0">{icon}</div>
    <div className="text-left">
      <h4 className="text-sm font-bold text-slate-900">{title}</h4>
      <p className="text-xs text-slate-500">{desc}</p>
    </div>
  </div>
);

export default App;
