import { FAQItem } from '../ui/FAQItem';
import { FAQS } from '../../data/siteData';

export function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-amber-600 text-sm font-bold uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500">
            Everything you need to know about going solar with Green Energy Technologies.
          </p>
        </div>
        <div className="space-y-3">
          {FAQS.map(faq => (
            <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
