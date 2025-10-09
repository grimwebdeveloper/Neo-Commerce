import { useContext } from 'react';
import { CartContext, SidebarContext } from '../context/CreateContexts';

const Sidebar = () => {
  const { openSidebar, setOpenSidebar } = useContext(SidebarContext);
  const {
    cart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);
  return (
    <div
      id='sidebar'
      className={`bg-white fixed top-0 right-0 z-50 h-screen w-full md:w-3/5 lg:w-2/5 shadow-2xl p-8 flex flex-col transition-transform duration-300 ease-in-out ${
        openSidebar ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className='flex items-center justify-between pb-6 px-2'>
        <div className='font-semibold'>ORDER</div>
        <i
          onClick={() => setOpenSidebar(false)}
          className='ri-close-large-line cursor-pointer'
        ></i>
      </div>

      <div className='max-h-[72vh] overflow-auto pt-8 border-t border-zinc-300 flex flex-col gap-16'>
        {cart.map((product) => {
          // const [
          //   quantity,
          // ] = product;
          return (
            <div key={product.id} className='flex gap-4 justify-between p-2'>
              <img src={product.image} alt={product.title} className='w-20' />
              <div className='mr-auto flex flex-col justify-between'>
                <div className='line-clamp-1 font-semibold'>
                  {product.title}
                </div>
                <div>Rs. {(product.price * 88.76).toFixed(2)}</div>
                <div className='flex border border-zinc-300 w-fit py-0.5'>
                  <button
                    onClick={() => decreaseQuantity()}
                    type='button'
                    className='w-8'
                  >
                    <i className='ri-subtract-fill text-red-600'></i>
                  </button>
                  <div className='text-center'>{product.quantity}</div>
                  <button
                    onClick={() => increaseQuantity()}
                    type='button'
                    className='w-8'
                  >
                    <i className='ri-add-fill text-green-600'></i>
                  </button>
                </div>
              </div>
              <div className='flex flex-col min-w-fit'>
                <i
                  onClick={() => removeFromCart()}
                  className='ri-close-large-line ml-auto bg-red-600 text-white p-1.5'
                ></i>
                <div className='mt-auto ml-auto font-semibold'>
                  Rs. {product.quantity * (product.price * 88.76).toFixed(2)}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className='mt-auto px-2'>
        <div className='flex items-center justify-between py-4'>
          <div className='font-semibold text-lg'>TOTAL: Rs. 00.00</div>
          <i
            onClick={clearCart}
            className='ri-delete-bin-line text-xl bg-red-600 text-white p-1.5'
          ></i>
        </div>
        <button
          type='button'
          className='bg-black text-white px-4 py-2 w-full font-semibold rounded cursor-pointer flex items-center justify-center gap-1 mt-auto'
        >
          <i className='ri-shopping-cart-line text-2xl'></i>
          <span>Checkout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
