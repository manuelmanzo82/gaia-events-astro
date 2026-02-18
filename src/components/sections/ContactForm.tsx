import { useState, type FormEvent } from 'react';

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    // Placeholder: replace with actual form submission
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1500);
  }

  if (sent) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-gold flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-charcoal mb-3">Messaggio Inviato!</h3>
        <p className="font-sans text-[0.9rem] text-charcoal/60">
          Grazie per avermi contattato. Risponderò entro 24-48 ore.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Nome */}
        <div>
          <label htmlFor="nome" className="block font-sans text-[0.7rem] tracking-[0.12em] uppercase text-charcoal/60 mb-2">
            Nome *
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            className="w-full bg-transparent border-b border-charcoal/20 focus:border-gold py-3 font-sans text-[0.95rem] text-charcoal outline-none transition-colors duration-300"
          />
        </div>

        {/* Cognome */}
        <div>
          <label htmlFor="cognome" className="block font-sans text-[0.7rem] tracking-[0.12em] uppercase text-charcoal/60 mb-2">
            Cognome *
          </label>
          <input
            type="text"
            id="cognome"
            name="cognome"
            required
            className="w-full bg-transparent border-b border-charcoal/20 focus:border-gold py-3 font-sans text-[0.95rem] text-charcoal outline-none transition-colors duration-300"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-sans text-[0.7rem] tracking-[0.12em] uppercase text-charcoal/60 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-transparent border-b border-charcoal/20 focus:border-gold py-3 font-sans text-[0.95rem] text-charcoal outline-none transition-colors duration-300"
          />
        </div>

        {/* Telefono */}
        <div>
          <label htmlFor="telefono" className="block font-sans text-[0.7rem] tracking-[0.12em] uppercase text-charcoal/60 mb-2">
            Telefono
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            className="w-full bg-transparent border-b border-charcoal/20 focus:border-gold py-3 font-sans text-[0.95rem] text-charcoal outline-none transition-colors duration-300"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Servizio */}
        <div>
          <label htmlFor="servizio" className="block font-sans text-[0.7rem] tracking-[0.12em] uppercase text-charcoal/60 mb-2">
            Servizio di Interesse
          </label>
          <select
            id="servizio"
            name="servizio"
            className="w-full bg-transparent border-b border-charcoal/20 focus:border-gold py-3 font-sans text-[0.95rem] text-charcoal outline-none transition-colors duration-300 appearance-none cursor-pointer"
          >
            <option value="">Seleziona...</option>
            <option value="planning">Wedding Planning Completo</option>
            <option value="coordinamento">Coordinamento del Giorno</option>
            <option value="design">Design & Styling</option>
            <option value="destination">Destination Wedding</option>
            <option value="altro">Altro / Non sono sicuro</option>
          </select>
        </div>

        {/* Data */}
        <div>
          <label htmlFor="data" className="block font-sans text-[0.7rem] tracking-[0.12em] uppercase text-charcoal/60 mb-2">
            Data del Matrimonio
          </label>
          <input
            type="date"
            id="data"
            name="data"
            className="w-full bg-transparent border-b border-charcoal/20 focus:border-gold py-3 font-sans text-[0.95rem] text-charcoal outline-none transition-colors duration-300"
          />
        </div>
      </div>

      {/* Messaggio */}
      <div>
        <label htmlFor="messaggio" className="block font-sans text-[0.7rem] tracking-[0.12em] uppercase text-charcoal/60 mb-2">
          Raccontatemi del vostro matrimonio *
        </label>
        <textarea
          id="messaggio"
          name="messaggio"
          rows={5}
          required
          className="w-full bg-transparent border-b border-charcoal/20 focus:border-gold py-3 font-sans text-[0.95rem] text-charcoal outline-none transition-colors duration-300 resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={sending}
        className="inline-block font-sans text-[0.75rem] tracking-[0.18em] uppercase px-10 py-4 bg-gold text-charcoal hover:bg-gold/85 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {sending ? 'Invio in corso...' : 'Invia Richiesta'}
      </button>
    </form>
  );
}
