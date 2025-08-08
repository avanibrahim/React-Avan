
import React, { useState } from 'react';
import { useToast } from '../hooks/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Um-Um",
        description: "Name must be filled",
        variant: "destructive"
      });
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Not-Net",
        description: "Invalid email",
        variant: "destructive"
      });
      return false;
    }
    
    if (!formData.message.trim()) {
      toast({
        title: "Um-Um",
        description: "Message must be filled",
        variant: "destructive"
      });
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Succeed!",
        description: "Your message has been sent. I will respond soon!",
      });
      
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'avanibrahim375@gmail.com',
      link: 'mailto:avanibrahim375@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Telephone',
      value: '+62 Just Click',
      link: 'https://wa.me/6282291325909'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Gorontalo, Indonesia',
      link: '/notfound'
    }
  ];
  

  const socialLinks = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      label: 'LinkedIn',
      link: '/notfound',
      color: 'hover:text-gray-300'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      label: 'GitHub',
      link: 'https://github.com/avanibrahim',
      color: 'hover:text-gray-300'
    }
  ];

  return (
    <section id="contact" className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="text-right mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 w-full">
          <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-white bg-clip-text text-transparent w-full inline-block font-sans font-extralight tracking-wider uppercase">
              contact -
            </span>
          </h2>
        </div>

    {/* Grid 2 kolom, bagian atas */}
    <div className="grid lg:grid-cols-2 gap-12 items-stretch">
      {/* Kanan: Contact Info */}
      <div className="flex flex-col gap-8 justify-between h-full">
        <div className="glass-card p-8 h-full">
          <h3 className="text-2xl font-bold mb-6 text-white dark:text-white">
            Contact Info
          </h3>
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="flex items-center space-x-4 p-4 rounded-lg glass-effect hover:bg-white/10 transition-colors duration-200"
              >
                <span className="text-2xl text-gray-300">{info.icon}</span>
                <div>
                  <p className="font-medium text-white dark:text-white">{info.label}</p>
                  <p className="text-white/80 dark:text-gray-200">{info.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
       {/* Kiri: Need Help */}
      <div className="glass-card p-8 rounded-2xl flex flex-col justify-between h-full">
        <h3 className="text-2xl font-bold text-white mb-3">Need Help?</h3>
        <details className="mb-2 bg-white/10 rounded-lg p-3">
          <summary className="cursor-pointer font-semibold text-white">What services do you offer?</summary>
          <p className="text-white/80 mt-2">Web development, design, automation, etc.</p>
        </details>
        <details className="mb-2 bg-white/10 rounded-lg p-3">
          <summary className="cursor-pointer font-semibold text-white">How can I contact you quickly?</summary>
          <p className="text-white/80 mt-2">Just click the WhatsApp button below!</p>
        </details>
        <button
          className="mt-6 relative group border-none bg-transparent p-0 outline-none cursor-pointer font-mono font-light uppercase text-base w-full flex justify-center"
          onClick={() =>
            window.open('https://wa.me/6282291325909?text=Halo%20saya%20mau%20tanya%20tentang%20portfolio%20Anda', '_blank')
          }
          type="button"
        >
          <span className="absolute top-0 left-0 w-56 h-auto bg-black bg-opacity-25 rounded-lg transform translate-y-0.5 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-[250ms] group-active:translate-y-px" />
          <span className="absolute top-0 left-0 w-56 h-auto rounded-lg bg-gradient-to-l from-[hsl(217,33%,6%)] via-[hsl(217,33%,3%)] to-[hsl(217,33%,6%)]" />
          <div className="relative flex items-center justify-between py-3 px-6 text-lg text-white rounded-lg transform -translate-y-1 bg-gradient-to-r from-[#000] via-[#b0b0b0] to-[#b0b0b0] gap-3 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-[250ms] group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110">
            <span className="select-none">Contact via WhatsApp</span>
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2 -mr-1 transition duration-250 group-hover:translate-x-1">
              <path clipRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fillRule="evenodd" />
            </svg>
          </div>
        </button>
      </div>
    </div>

    {/* Bawah sendiri: Let's Discuss! horizontal card */}
    <div className="mt-12">
      <div className="glass-card bg-gradient-to-r from-gray-700/30 to-gray-500/30 p-8 text-white rounded-2xl w-full">
        <h3 className="text-2xl font-bold mb-4">▲ Let's Discuss!</h3>
        <p className="text-white/90 leading-relaxed">
          I am always open to new projects, creative collaborations, or simply discussing the latest technology. 
          Let’s bring your amazing ideas to life together!
        </p>
      </div>
    </div>
  </div>
</section>

  );
};

export default Contact;
