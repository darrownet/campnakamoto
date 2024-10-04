"use client";

import React, { forwardRef, MouseEventHandler } from "react";
import { motion, MotionProps } from "framer-motion";
import { cn } from "../../../../lib/utils";

interface CardProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
}

interface CardItemProps extends CardProps {
  translateZ?: number | string;
  rotateX?: number;
  rotateZ?: number;
  translateX?: number | string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export const CardContainer = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, as: Component = "div", onMouseEnter, onMouseLeave }, ref) => (
    <motion.div 
      ref={ref} 
      className={cn("relative", className)} 
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </motion.div>
  )
);

export const CardBody = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, as: Component = "div" }, ref) => (
    <motion.div ref={ref} className={cn("overflow-hidden", className)}>
      {children}
    </motion.div>
  )
);

export const CardItem = forwardRef<HTMLDivElement, CardItemProps>(
  ({ children, className, as: Component = "div", translateZ, rotateX, rotateZ, translateX, onClick }, ref) => {
    const style = {
      transform: `
        translateZ(${translateZ || 0}px)
        translateX(${translateX || 0}px)
        rotateX(${rotateX || 0}deg)
        rotateZ(${rotateZ || 0}deg)
      `,
    };

    return (
      <motion.div ref={ref} className={cn("absolute", className)} style={style} onClick={onClick}>
        {children}
      </motion.div>
    );
  }
);

CardContainer.displayName = "CardContainer";
CardBody.displayName = "CardBody";
CardItem.displayName = "CardItem";
