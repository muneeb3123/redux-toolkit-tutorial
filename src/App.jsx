import CartContainer from "./components/CartContainer"
import Modal from "./modal"
import Navbar from "./components/Navbar"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { calculateTotal,getItems } from "./features/cart/cartslice"

function App() {
const dispatch = useDispatch()
const {cartItems} = useSelector((state) => state.cart)
const {isOpen} = useSelector((state) => state.modal)

useEffect(() => {
dispatch(calculateTotal())
}, [cartItems])

useEffect(() => {
  dispatch(getItems())
}, [])

  return (
    <>
   {isOpen && <Modal />}
     <Navbar />
     <CartContainer />
     </>
  )
}

export default App
