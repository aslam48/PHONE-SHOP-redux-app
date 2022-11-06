import Navbar from "./Component/Navbar";
import CartContainer from "./Component/CartContainer";
import {useSelector, useDispatch} from "react-redux"
import { useEffect } from "react";
import {caculateTotals} from './feature/cart/cartSlice'
import Modal from "./Component/Modal";

function App() {
  const {cartItems} = useSelector((store) => store.cart)
  const {isOpen} = useSelector((store) => store.modal)
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(caculateTotals())
  },[cartItems])

  // useEffect(()=> {
  //   dispatch(getCartItem())
  // },[])

  // if(isLoading){
  //   return <div className="loading">
  //     <h1>Loading</h1>
  //   </div>
  // }

  return (
    <main>
   { isOpen && <Modal/>}
   {/* <Modal/> */}
    <Navbar/>
    <CartContainer/>
    </main>
  );
}

export default App;
