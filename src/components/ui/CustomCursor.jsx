import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for high-end feel
  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const onMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      const target = e.target;
      const clickable = 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.btn') || 
        target.closest('[role="button"]');
      
      setIsPointer(!!clickable);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div 
        className="cursor-dot"
        style={{
          x: mouseX,
          y: mouseY,
          scale: isClicking ? 0.8 : 1,
        }}
      />
      <motion.div 
        className={`cursor-outline ${isPointer ? 'pointer' : ''}`}
        style={{
          x: cursorX,
          y: cursorY,
          scale: isPointer ? 1.5 : 1,
          opacity: isPointer ? 0.4 : 1,
        }}
      >
        {isPointer && (
          <motion.div 
            className="cursor-inner-circle"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        )}
      </motion.div>
    </>
  );
};

export default CustomCursor;
