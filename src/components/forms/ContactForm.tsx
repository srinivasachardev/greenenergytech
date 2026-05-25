import type { FormEvent } from 'react';

export function ContactForm() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name"
          className="px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
        />
      </div>
      <input
        type="email"
        placeholder="Email Address"
        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
      />
      <textarea
        rows={4}
        placeholder="Your message..."
        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition resize-none"
      />
      <button
        type="submit"
        className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition text-sm"
      >
        Send Message
      </button>
    </form>
  );
}
