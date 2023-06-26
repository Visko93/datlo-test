export const animationConfig = {
  initial: { x: 300, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -300, opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      staggerDirection: -1
    }
  }
};
