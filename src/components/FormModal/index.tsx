import React from 'react'

interface FormModalProps {
  hideModal: () => void
}

const FormModal = (props: FormModalProps) => {
  return (
    <div>
      <div>this a modal</div>
      <button onClick={props.hideModal}>hide modal</button>
    </div>
  )
}

export default FormModal
