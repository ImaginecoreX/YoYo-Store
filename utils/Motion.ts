export function slideInFromLeft(delay: number) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export function slideInFromRight(delay: number) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export const slideInFromTop = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

export const slideInFromBottom = {
  hidden: { y: 80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

export const slideInBottom = (delay:number, duration?:number, bottom?:number)=> {
return{
  hidden: { y: bottom?bottom:80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: duration? duration:0.5,
    },
  },
}
};

export const slideInTop = (delay:number, duration?:number, top?:number)=> {
  return{
    hidden: { y: top?-top:-100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration? duration:0.5,
      },
    },
  }
  };
  

export function scaleIn(delay: number)  {
 return{
  hidden: {
    scale: 0.5, // Start with scale set to 0 for hidden state
    opacity: 0, // Also start with opacity set to 0
  },
  visible: {
    scale: 1, // Scale up to 1 for visible state
    opacity: 1, // Fade in to full opacity
    transition: {
      delay: delay,
      duration: 0.4,
    },
  },
 }
};