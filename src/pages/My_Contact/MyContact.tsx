import { motion } from 'framer-motion';
import { Twitter, Linkedin, Mail, MessageCircle, Handshake } from 'lucide-react';

export function MyContact() {
  const contactMethods = [
    { 
      icon: Twitter, 
      label: 'Twitter', 
      href: 'http://x.com/Mahesh1561332',
      color: 'text-blue-400',
      borderColor: 'border-blue-400',
      hoverBg: 'hover:bg-blue-400/10',
      iconBg: 'bg-blue-400/10'
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      href: 'https://linkedin.com/in/mahesh-divate',
      color: 'text-blue-600',
      borderColor: 'border-blue-600',
      hoverBg: 'hover:bg-blue-600/10',
      iconBg: 'bg-blue-600/10'
    },
    { 
      icon: Mail, 
      label: 'Email', 
      href: 'mailto:maheshddivate@gmail.com',
      color: 'text-amber-500',
      borderColor: 'border-amber-500',
      hoverBg: 'hover:bg-amber-500/10',
      iconBg: 'bg-amber-500/10'
    },
  ];

  return (
    <section id='contact' className="relative bg-gradient-to-b from-gray-50 to-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-32 h-32 rounded-full bg-blue-100 blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-1/4 w-40 h-40 rounded-full bg-amber-100 blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center justify-center mb-6">
            <MessageCircle className="w-8 h-8 text-amber-500 mr-3" />
            <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">
              Let's Connect
            </h2>
            <Handshake className="w-8 h-8 text-amber-600 ml-3" />
          </div>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "anticipate" }}
          />
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Feel free to reach out for collaborations or just to say hello!
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
              }
            }
          }}
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center p-8 rounded-2xl border ${method.borderColor} bg-white/50 backdrop-blur-sm ${method.hoverBg} transition-all duration-300 shadow-sm hover:shadow-md`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    type: "spring", 
                    stiffness: 100,
                    damping: 15
                  }
                }
              }}
              whileHover={{ 
                y: -8,
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className={`p-5 rounded-full ${method.iconBg} mb-5`}
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <method.icon className={`w-7 h-7 ${method.color}`} />
              </motion.div>
              <h3 className={`text-xl font-semibold ${method.color} mb-3`}>
                {method.label}
              </h3>
              <p className="text-gray-500 text-sm text-center">
                {method.label === 'Email' ? 'maheshddivate@gmail.com' : method.href.split('/').pop()}
              </p>
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-gray-600 text-lg">
            Looking forward to hearing from you!
          </p>
          <motion.div 
            className="mt-6 flex justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, staggerChildren: 0.1 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-amber-500"
                animate={{
                  y: [0, -5, 0],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.3
                  }
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}