import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
        }}
        exit={{ opacity: 1 }} // 👈 garante animação de saída
        className="h-screen w-screen fixed bg-primary top-0 left-0 pointer-events-none"
      />
      {children}
    </div>
  );
};

export default PageTransition;
