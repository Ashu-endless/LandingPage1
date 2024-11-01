import { FC, MouseEventHandler } from "react"

interface props {
    open:boolean
    onClose : MouseEventHandler<HTMLElement>
    children:React.ReactNode
}

const Modal :FC<props> =  ({ open, onClose, children })  =>{
    return (
      // backdrop
      <div
        onClick={onClose}
        className={`
          fixed inset-0 flex justify-center p-4
          ${open ? "visible bg-black/20" : "invisible"}
        `}
        style={{zIndex:1}}
      >
        {/* modal */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`
            bg-white rounded-xl shadow p-6 overflow-auto
            ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
          `}
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
          >
            X
          </button>
          {children}
        </div>
      </div>
    )
  }

export default Modal;