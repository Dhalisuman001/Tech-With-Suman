import { AnimatePresence, motion } from "framer-motion";

function Animation({
  children,
  keyValue,
  initial = { opacity: 0 },
  animate = { opacity: 10 },
  transition = { duration: 1.5 },
  className,
}) {
  return (
    <AnimatePresence>
      <motion.div
        key={keyValue}
        initial={initial}
        animate={animate}
        transition={transition}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default Animation;
