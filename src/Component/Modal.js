import { closeModal } from "../feature/modal/modalSlice"
import { clearCart } from "../feature/cart/cartSlice"
import { useDispatch } from "react-redux"

const Modal = () => {
    const dispatch = useDispatch()
  return (
    <aside className='modal-container'>
        <div className='modal'>
          <h4>remove all item from your shopping card </h4>  
          <div className='btn-container'>
            <button className='btn confirm-btn' onClick={()=>{
                dispatch(clearCart())
                dispatch(closeModal())
            }}>
                confirm
            </button>

            <button className='btn clear-btn' onClick={()=>{
            
                dispatch(closeModal())
            }}>
                cancle
            </button>

            </div>
        </div>
    </aside>
  )
}

export default Modal