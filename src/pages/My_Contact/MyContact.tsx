import { motion } from 'framer-motion';
import { Twitter, Linkedin, Mail } from 'lucide-react';

export function MyContact() {
  const contactMethods = [
    { 
      icon: Twitter, 
      label: 'X', 
      href: 'http://x.com/Mahesh1561332',
      color: 'text-blue-400'
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      href: 'https://linkedin.com/in/mahesh-divate',
      color: 'text-blue-600'
    },
    { 
      icon: Mail, 
      label: 'Email', 
      href: 'mailto:maheshddivate@gmail.com',
      color: 'text-amber-500'
    },
  ];

  return (
    <section id='contact' className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl sm:text-5xl font-extrabold text-amber-500 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Get in Touch Section */}
          <motion.div 
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl text-white font-bold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
                  whileHover={{ x: 10 }}
                >
                  <method.icon className={`w-6 h-6 ${method.color}`} />
                  <span>{method.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Additional Info Section */}
          <motion.div 
            className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl text-white font-bold mb-4">Let's Connect</h3>
            <p className="text-gray-400">
              I'm always open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

