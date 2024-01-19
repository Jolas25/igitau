import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

export default function Modal({ children, isOpen }) {
const dialog = useRef()
useEffect(() => {
    if (isOpen) {
        dialog.current.showModal()
    } else {
        dialog.current.close()
    }
}, [isOpen])

    return createPortal(<dialog ref={dialog}>{children}</dialog>, document.getElementById("modal"))
        
    
};
