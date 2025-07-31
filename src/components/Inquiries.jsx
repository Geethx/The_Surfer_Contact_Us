import React from 'react';
import { motion } from 'framer-motion';  // eslint-disable-line no-unused-vars

const Inquiries = () => {
  return (
    <motion.div 
      className="max-w-4xl mx-auto pt-20 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.h2 
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-10 text-neutral-400"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        BOOKING INQUIRIES
      </motion.h2>

      <div className="space-y-1 sm:space-y-1">
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            <span className="font-semibold">01)</span> WE WILL GET BACK TO YOU FOR ALL YOUR INQUIRIES WITHINC 24 HOURS
          </p>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            <span className="font-semibold">02)</span> FEEL FREE TO CONTACT US WITH YOUR ANY SPECIFIC REQUIRMENT FOR UR STAY
          </p>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            <span className="font-semibold">03)</span> A 25% NON REFUNDABLE DEPOSIT REQUIRED TO CONFIRM YOUR RESERVATION
          </p>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            TO STAY WITH US !
          </p>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Inquiries;
