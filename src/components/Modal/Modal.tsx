import React, { ReactNode, useEffect } from 'react'
import classes from './Modal.module.css'
import closeIcon from '../../assets/close.svg'

import { Button } from '../Button/Button.tsx'
import { motion } from 'motion/react'


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    return () => document.body.classList.remove('no-scroll')
  }, [isOpen])

  if (!isOpen) return null

  return (
    <motion.div
      className={classes.overlay}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .2 }}
    >
      <motion.div
        className={classes.content}
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: .2 }}

      >
        <Button
          round
          icon={<img src={closeIcon} alt="" />}
          onClick={onClose}
        />

        {children}
      </motion.div>
    </motion.div>
  )
}

export default Modal
