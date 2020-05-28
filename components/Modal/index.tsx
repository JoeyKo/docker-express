import React, { Children } from "react";
import Modal from 'react-modal'
import styles from './Modal.module.css'
import Button from "../Button";

interface Props {
  isOpen: boolean,
  onRequestClose?: () => void,
  children: any
}
function Loading({ isOpen, onRequestClose, children }: Props) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="modal"
      className={styles.modal}
      overlayClassName={styles.modalOverlay}
      >
      <div className={styles.modalInner}>
        {children}
      </div>
    </Modal>
  );
}

export default Loading;
