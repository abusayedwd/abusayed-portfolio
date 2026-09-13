// Subtle fade-up used across sections. Keeps motion minimal and professional.
export const fadein = (delay = 0) => ({
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

// Shared props so every animated block behaves the same way.
export const reveal = (delay = 0) => ({
  variants: fadein(delay),
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.3 },
});
