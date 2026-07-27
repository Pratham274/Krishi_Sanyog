import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Sparkles, Send, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';

export const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Namaste! 🙏 I am Krishi Mitra, your AI Agricultural & Soil Assistant. How can I help your farm today?', isAi: true }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const scrollerRef = useRef(null);

  const quickPrompts = [
    '🌾 Wheat Fertilizer Dosage',
    '🌧️ Indore Weather Forecast',
    '🏛️ PM-Kisan Subsidy Info',
    '🧪 How to calculate NPK?',
    '📈 Today Mandi Prices',
    '🐛 Yellow Rust Pest Control'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const scrollChips = (direction) => {
    if (scrollerRef.current) {
      const scrollAmount = direction === 'left' ? -150 : 150;
      scrollerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const generateAiReply = (userQuery) => {
    const q = userQuery.toLowerCase().trim();

    if (q.includes('hi') || q.includes('hello') || q.includes('namaste') || q.includes('hey')) {
      return "Namaste! 🙏 How can I assist your farm?\n\n• **Fertilizer Calculator**: N-P-K & bag dosing\n• **Soil Diagnostic**: pH & moisture suitability\n• **Govt Subsidies**: PM-Kisan & Fasal Bima\n• **Live Advisories**: Weather & Mandi rates";
    }

    if (q.includes('fertilizer') || q.includes('urea') || q.includes('dap') || q.includes('potash') || q.includes('npk') || q.includes('dose') || q.includes('khad')) {
      return "🌱 **Fertilizer Advisory**:\n• For 1 Acre of Wheat: Apply **45kg Neem Coated Urea** + **25kg DAP** at sowing.\n• Apply remaining 20kg Urea at 1st irrigation (21 days).\n\n👉 Use our **AI Soil Advisor** tab for exact bag calculations!";
    }

    if (q.includes('weather') || q.includes('rain') || q.includes('forecast') || q.includes('temp') || q.includes('monsoon') || q.includes('mausam')) {
      return "🌧️ **Weather Advisory (Indore)**:\n• Temp: **28°C** • Humidity: **62%**\n• Light shower activity expected on Tuesday (65% chance).\n• **Tip**: Postpone chemical spraying until Wednesday morning.";
    }

    if (q.includes('scheme') || q.includes('subsidy') || q.includes('pm kisan') || q.includes('insurance') || q.includes('fasal bima') || q.includes('yojana')) {
      return "🏛️ **Govt Subsidies Available**:\n1. **PM-Kisan**: ₹6,000/year direct cash transfer.\n2. **PM Fasal Bima**: Up to 90% crop loss coverage.\n3. **Soil Health Card**: 100% Free testing.\n\nApply directly inside our **Govt Schemes** portal page!";
    }

    if (q.includes('price') || q.includes('mandi') || q.includes('rate') || q.includes('bhav') || q.includes('quintal') || q.includes('market')) {
      return "📈 **Today Mandi Benchmarks**:\n• **Soybean**: ₹4,850 / qtl (+₹180)\n• **Wheat**: ₹2,450 / qtl\n• **Paddy**: ₹3,920 / qtl";
    }

    if (q.includes('crop') || q.includes('wheat') || q.includes('soybean') || q.includes('rice') || q.includes('paddy') || q.includes('cotton') || q.includes('mustard')) {
      return "🌾 **Crop Suitability Diagnostic**:\nBased on soil (pH 6.8):\n• **Best Match**: Wheat / Soybean rotation (96% Match)\n• **Moisture**: 35% - 40%";
    }

    if (q.includes('pest') || q.includes('disease') || q.includes('yellow rust') || q.includes('insect') || q.includes('spray') || q.includes('keeda')) {
      return "⚠️ **Pest Alert**: Yellow Rust warning in Northern plains. Spray **Propiconazole 25% EC** @ 1ml/L in clear morning sky.";
    }

    return `Thank you for asking about "${userQuery}".\nAs your AI Krishi Agronomist, I recommend checking your parameters in the **AI Soil Advisor** tool or visiting the **Govt Schemes** page!`;
  };

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg = query.trim();
    setMessages(prev => [...prev, { text: userMsg, isAi: false }]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = generateAiReply(userMsg);
      setMessages(prev => [...prev, { text: reply, isAi: true }]);
      setIsTyping(false);
    }, 400);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white dark:bg-[#090d16] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-250">
          
          {/* Compact Header */}
          <div className="px-4 py-3 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-extrabold text-xs leading-tight">Krishi Mitra AI</h4>
                <p className="text-[10px] text-emerald-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span> Online • Agronomist Bot
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="p-3.5 h-64 overflow-y-auto space-y-2.5 bg-slate-50/70 dark:bg-[#030712]/90 text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2 ${msg.isAi ? 'justify-start' : 'justify-end'}`}
              >
                {msg.isAi && (
                  <div className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`p-2.5 rounded-xl max-w-[85%] leading-relaxed whitespace-pre-line text-[11px] ${
                    msg.isAi
                      ? 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 shadow-sm border border-slate-200/80 dark:border-slate-800'
                      : 'bg-emerald-600 text-white rounded-br-none shadow-sm font-medium'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-1.5 items-center text-slate-400 text-[10px] font-semibold py-1">
                <RefreshCw className="w-3 h-3 animate-spin text-emerald-500" />
                <span>Thinking...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Fixed Horizontal Scrollable Suggestion Chips */}
          <div className="relative bg-slate-100 dark:bg-[#060a12] border-t border-slate-200 dark:border-slate-800 p-2 flex items-center gap-1">
            <button
              type="button"
              onClick={() => scrollChips('left')}
              className="p-1 rounded bg-white dark:bg-slate-900 text-slate-500 hover:text-emerald-600 shrink-0 shadow-xs border border-slate-200 dark:border-slate-800"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>

            <div ref={scrollerRef} className="chips-scroller flex-1 gap-1.5 py-0.5">
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleSend(prompt)}
                  className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[10px] font-bold text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 whitespace-nowrap transition-colors cursor-pointer shrink-0"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollChips('right')}
              className="p-1 rounded bg-white dark:bg-slate-900 text-slate-500 hover:text-emerald-600 shrink-0 shadow-xs border border-slate-200 dark:border-slate-800"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Chat Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-2.5 bg-white dark:bg-[#090d16] border-t border-slate-200 dark:border-slate-800 flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Krishi AI..."
              className="flex-1 px-3 py-1.5 text-xs bg-slate-100 dark:bg-slate-800/80 rounded-xl text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="p-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}

      {/* Trigger FAB Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-2xl emerald-gradient-btn flex items-center justify-center shadow-xl hover:scale-105 cursor-pointer relative"
        title="Chat with Krishi Mitra AI"
      >
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full border-2 border-white dark:border-slate-950"></span>
        {isOpen ? <X className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
      </button>
    </div>
  );
};

export default FloatingActionButton;
