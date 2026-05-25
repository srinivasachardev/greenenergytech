import { useState, type FormEvent } from 'react';
import { CheckCircle } from 'lucide-react';
import { BILL_OPTIONS } from '../../data/siteData';
import type { ConsultationFormData } from '../../types/forms';

const initialForm: ConsultationFormData = {
  name: '',
  phone: '',
  pincode: '',
  bill: '',
  agreed: false,
};

export function ConsultationForm() {
  const [form, setForm] = useState<ConsultationFormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.agreed || !form.bill) return;
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">Consultation Booked!</h3>
        <p className="text-slate-500 text-sm">Our solar expert will call you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        placeholder="Full Name"
        required
        value={form.name}
        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
      />
      <input
        type="tel"
        placeholder="WhatsApp Number"
        required
        value={form.phone}
        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
      />
      <input
        type="text"
        placeholder="PIN Code"
        required
        value={form.pincode}
        onChange={e => setForm(f => ({ ...f, pincode: e.target.value }))}
        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
      />
      <div>
        <p className="text-sm font-medium text-slate-700 mb-2">Monthly Electricity Bill</p>
        <div className="flex flex-wrap gap-2">
          {BILL_OPTIONS.map(opt => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setForm(f => ({ ...f, bill: opt.value }))}
              className={`px-3 py-2 rounded-xl text-xs font-semibold border transition ${
                form.bill === opt.value
                  ? 'bg-gradient-to-r from-green-600 to-emerald-700 text-white border-green-600'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
      <label className="flex items-start gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={form.agreed}
          onChange={e => setForm(f => ({ ...f, agreed: e.target.checked }))}
          className="mt-0.5 w-4 h-4 accent-green-500 rounded"
        />
        <span className="text-xs text-slate-500">
          I agree to Green Energy Tech{' '}
          <span className="text-green-600 underline cursor-pointer">Terms of use</span>{' '}
          and{' '}
          <span className="text-green-600 underline cursor-pointer">Privacy Policy</span>.
        </span>
      </label>
      <div className="relative">
        <span className="absolute -top-2 right-3 bg-green-400 text-slate-800 text-[10px] font-bold px-2 py-0.5 rounded-full italic z-10">
          Limited slots only!
        </span>
        <button
          type="submit"
          disabled={loading || !form.agreed || !form.bill}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-green-600 to-emerald-700 text-white font-bold text-sm tracking-wide hover:from-green-700 hover:to-emerald-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Booking...' : 'Book a FREE Consultation'}
        </button>
      </div>
    </form>
  );
}
