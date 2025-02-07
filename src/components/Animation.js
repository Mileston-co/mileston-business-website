'use client';
import React from 'react';
import { motion } from 'framer-motion';

export const BaseFramerAnimation = ({
    children,
    duration,
    delay,
    initialY,
    className,
    id,
    style,
    ...props
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: initialY || 200, zIndex: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration || 0.8, delay: delay || 0 }}
            className={className}
            id={id}
            style={style}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export const ScrollTriggeredAnimation = ({
    children,
    duration,
    delay,
    initialY,
    className,
    id,
    style,
    ...props
}) => {
    return (
        <motion.div
            initial={{ opacity: -8, y: initialY || 300, zIndex: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: duration || 1, delay: delay || 0 }}
            className={className}
            id={id}
            style={style}
            {...props}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
};
