import { motion } from 'framer-motion';
import { Twitter, Linkedin, Mail } from 'lucide-react';

export function MyContact() {
  const contactMethods = [
    { 
      icon: Twitter, 
      label: 'Twitter', 
      href: 'http://x.com/Mahesh1561332',
      color: 'text-blue-400',
      borderColor: 'border-blue-400',
      hoverBg: 'hover:bg-blue-400/10'
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      href: 'https://linkedin.com/in/mahesh-divate',
      color: 'text-blue-600',
      borderColor: 'border-blue-600',
      hoverBg: 'hover:bg-blue-600/10'
    },
    { 
      icon: Mail, 
      label: 'Email', 
      href: 'mailto:maheshddivate@gmail.com',
      color: 'text-amber-500',
      borderColor: 'border-amber-500',
      hoverBg: 'hover:bg-amber-500/10'
    },
  ];

  return (
    <section id='contact' className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Feel free to reach out for collaborations or just to say hello!
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center p-8 rounded-xl border-2 ${method.borderColor} bg-white ${method.hoverBg} transition-all duration-300`}
              whileHover={{ y: -5, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className={`p-4 rounded-full ${method.hoverBg} mb-4`}>
                <method.icon className={`w-8 h-8 ${method.color}`} />
              </div>
              <h3 className={`text-xl font-semibold ${method.color} mb-2`}>
                {method.label}
              </h3>
              <p className="text-gray-500 text-sm text-center">
                {method.label === 'Email' ? 'maheshddivate@gmail.com' : method.label}
              </p>
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-600">
            Looking forward to hearing from you!
          </p>
        </motion.div>
      </div>
    </section>
  );
}