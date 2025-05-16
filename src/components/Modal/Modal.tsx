import React, { ReactNode } from 'react'
import classes from './Modal.module.css'
import closeIcon from '../../assets/close.svg'

import { Button } from '../Button/Button.tsx'


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <div className={classes.overlay} onClick={onClose}>
      <div className={classes.content} onClick={(e) => e.stopPropagation()}>
        <Button
          round
          icon={<img src={closeIcon} alt="" />}
          onClick={onClose}
        />

        {children}
      </div>
    </div>
  )
}

export default Modal
