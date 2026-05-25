import { Phone, Mail, MapPin } from 'lucide-react';
import { ContactForm } from '../forms/ContactForm';

const CONTACT_ITEMS = [
  { icon: Phone, label: 'Call Us', value: '9972200502', href: 'tel:9972200502' },
  { icon: Mail, label: 'Email Us', value: 'info@greenenergytech.in', href: 'mailto:info@greenenergytech.in' },
  { icon: MapPin, label: 'Visit Us', value: '47 CMH Road, Indiranagar, Bangalore', href: '#' },
] as const;

export function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-amber-600 text-sm font-bold uppercase tracking-widest mb-3">
              Contact Us
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6">
              Let&apos;s Power Up with Solar Energy
            </h2>
            <p className="text-slate-500 mb-8">
              Ready to start your solar journey? Reach out to us for a free consultation and site survey.
            </p>
            <div className="space-y-4">
              {CONTACT_ITEMS.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-amber-50 transition group"
                >
                  <div className="w-10 h-10 bg-amber-100 group-hover:bg-amber-500 rounded-xl flex items-center justify-center transition-colors">
                    <item.icon className="w-5 h-5 text-amber-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">{item.label}</p>
                    <p className="font-bold text-slate-800">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <h3 className="font-extrabold text-slate-800 text-xl mb-5">Send Us a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
