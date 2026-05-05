import { useState } from "react";
import { X, MessageCircle, Send } from "lucide-react";

const WHATSAPP_NUMBER = "447700900000";
const WHATSAPP_PREFILL = "Hello, I would like to enquire about UK immigration services.";

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function FloatingChat() {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_PREFILL)}`;

  function handleSend() {
    if (!message.trim()) return;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setSent(true);
    setMessage("");
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
      {chatOpen && (
        <div className="w-80 rounded-xl shadow-2xl border border-border overflow-hidden bg-white dark:bg-gray-900 animate-in slide-in-from-bottom-4 duration-200">
          <div className="bg-primary text-primary-foreground px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <span className="text-sm font-bold text-secondary-foreground font-serif">B</span>
              </div>
              <div>
                <p className="font-semibold text-sm leading-tight">Britannia Visas</p>
                <span className="flex items-center gap-1.5 text-xs text-primary-foreground/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  Online — replies within 1 hour
                </span>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-4 min-h-[140px] bg-slate-50 dark:bg-gray-800 flex flex-col justify-end gap-3">
            <div className="bg-white dark:bg-gray-700 rounded-xl rounded-tl-none px-4 py-3 text-sm text-foreground shadow-sm max-w-[90%]">
              <p className="font-medium text-primary mb-1">Hello! 👋</p>
              <p className="text-muted-foreground leading-snug">Welcome to Britannia Visas. Ask us anything about UK visas and immigration, and a qualified adviser will respond shortly.</p>
            </div>
            {sent && (
              <div className="self-end bg-primary/10 rounded-xl rounded-tr-none px-4 py-2 text-sm text-primary max-w-[85%]">
                Message sent — we'll be in touch soon!
              </div>
            )}
          </div>

          <div className="px-3 py-3 border-t border-border bg-white dark:bg-gray-900">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={e => setMessage(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSend()}
                placeholder="Type your question…"
                className="flex-1 text-sm border border-border rounded-lg px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              <button
                onClick={handleSend}
                disabled={!message.trim()}
                className="bg-primary text-primary-foreground rounded-lg px-3 py-2 hover:bg-primary/90 disabled:opacity-40 transition-colors"
                aria-label="Send message"
              >
                <Send size={15} />
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Or start a chat on{" "}
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-semibold hover:underline">
                WhatsApp
              </a>
            </p>
          </div>
        </div>
      )}

      <div className="flex items-center gap-3">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex items-center gap-2 bg-[#25D366] text-white pl-3 pr-5 py-3 rounded-full shadow-xl hover:bg-[#20ba5a] hover:scale-105 transition-all duration-200"
        >
          <WhatsAppIcon />
          <span className="font-semibold text-sm">WhatsApp Us</span>
        </a>

        <button
          onClick={() => setChatOpen(o => !o)}
          aria-label={chatOpen ? "Close chat" : "Open live chat"}
          className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-105 ${
            chatOpen
              ? "bg-gray-700 text-white"
              : "bg-primary text-primary-foreground"
          }`}
        >
          {chatOpen ? <X size={22} /> : <MessageCircle size={22} />}
        </button>
      </div>
    </div>
  );
}
