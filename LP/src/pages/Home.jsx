import bg1 from '../assets/image/bg1.jpg'
import calamansi from '../assets/image/calamansi.jpg'
import barney from '../assets/image/barney.jpg'
import boss from '../assets/image/boss.jpg'
import lemon from '../assets/image/lemon.jpg'

function Home(){
    return(
        <>
        <div>
        <section className=" container 1pic relative mx-auto max-w-85 bg-white ">
          <div className="text-blue-500 relative" >
              <img src={bg1} className=" h-[95vh] w-full "/>
                  <div className="absolute inset-0 flex-col flex items-center justify-center">
                   <p className="text-emerald-300 text-5xl font-bold">Welcome</p>
                   <p className="text-emerald-300 text-5xl font-bold mt-4">to JJM soap and detergents manufacturing</p>
                   <p className="text-3xl mt-6 text-emerald-300"> Description</p>
                    <a href="/" className="btn mt-10 bg-white text-blue-600 px-8 py-3 rounded-full shadow-lg hover:bg-gray-100">
                       Start
                     </a>
                   </div>
          </div>
        </section>

      <section id='2'>
        <div className="mx-auto text-center h-[600px] w-full py-8 bg-gray-100">
          <h2 className="text-3xl font-bold mb-10 text-emerald-300">Our Features</h2>
          <div className="col-span-2 w-full h-[1px] bg-gray-300 my-4">
          <div className="grid lg:grid-cols-2 p-9 gap-10 ">
            <div className="rounded-lg p-6 shadow-lg bg-gray-800">
              <h3 className="text-xl font-bold text-emerald-400">JJM Calamansi Dishwashing Liquid</h3>
              <button className="btn btn-outline btn-accent my-5" onClick={()=>document.getElementById('my_modal_1').showModal()}>See Products</button>
                <dialog id="my_modal_1" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg ">JJM Calamansi Dishwashing Liquid</h3>
                    <div className='flex items-center justify-center  '>
                    <img src={barney} className='h-[30vh]' />
                    </div>
                    <p className="pt-5">$200</p>
                    <p className="">Gin bilog + calamansi pampa-ginawaha ng buhay</p>
                    
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg " >
              <h3 className="text-xl font-bold text-emerald-400">JJM Lemon Dishwashing</h3>
              <button className="btn btn-outline btn-accent my-5" onClick={()=>document.getElementById('my_modal_2').showModal()}>See Products</button>
                <dialog id="my_modal_2" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">JJM Lemon Dishwashing</h3>
                    <div className='flex items-center justify-center '>
                    <img src={lemon} />
                    </div>
                    <p className="pt-5">$200</p>
                    <p className="">Gin bilog + calamansi pampa-ginawaha ng buhay</p>
                    
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg" >
              <h3 className="text-xl font-bold text-emerald-400">JJM Antibac Fabric </h3>
              <button className="btn btn-outline btn-accent my-5" onClick={()=>document.getElementById('my_modal_3').showModal()}>See Products</button>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">JJM Antibac Fabric</h3>
                    <div className='flex items-center justify-center '>
                    <img src={boss} />
                    </div>
                    <p className="pt-5">$200</p>
                    <p className="">Gin bilog + calamansi pampa-ginawaha ng buhay</p>
                    
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-emerald-400">JJM Calamansi Dishwashing Paste</h3>
              <button className="btn btn-outline btn-accent my-5" onClick={()=>document.getElementById('my_modal_4').showModal()}>See Products</button>
                <dialog id="my_modal_4" className="modal">
                  <div className="modal-box ">
                    <h3 className="font-bold text-lg mb-5">JJM Calamansi</h3>
                    <div className='flex items-center justify-center '>
                    <img src={calamansi} />
                    </div>
                    <p className="pt-5">$200</p>
                    <p className="">Gin bilog + calamansi pampa-ginawaha ng buhay</p> 
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn">Close</button>
                      </form>
                      
                    </div>
                  </div>
                </dialog>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section id='3'>
      <div className='dark:bg-gray-100  '>
          <div className="w-30 px-50 text-center sm:p-8 dark:bg-gray-100">
          <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-800"></hr>
              <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-gray-900">About</h5>
              <p className="mb-5 text-base text-gray-900 sm:text-lg ">Basta Best Quality and Best Brand JJM na Yan!</p>
          </div>  
          </div>
      </section>

       <section id='4'>
       <div className="grid grid-cols-6 sm:grid-cols-2 lg:grid-cols-2 p-9 gap-10  dark:bg-gray-100">
          <div className="w-30 px-50 text-center sm:p-8 dark:bg-gray-100  ">
          <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-800"></hr>
              <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-gray-900">Mission</h5>
              <p className="mb-5 text-base text-gray-900 sm:text-lg ">Description</p>
          </div>
          <div className="w-30 px-50 text-center sm:p-8 dark:bg-gray-100  ">
          <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-800"></hr>
              <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-gray-900">Vission</h5>
              <p className="mb-5 text-base text-gray-900 sm:text-lg ">Description</p>
          </div>
          </div>
      </section>
      <section id='5'>
      <div className="w-30 px-50 text-center sm:p-8  dark:bg-gray-100">
      <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-800"></hr>
              <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-gray-900">Contact Us</h5>
              <p className="mb-5 text-base text-gray-900 sm:text-lg ">We love to hear from you! Please fill out the form below and we will get in touch as soon as possible.</p>
              <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-gray-700">Your Email</label>
              <input type="email" id="email" className="w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3740]"placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700">Your Message</label>
              <textarea id="message" rows="4" className="w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3740]"placeholder="Enter your message"></textarea>
            </div>                    
            <div className="text-center">
              <button type="submit" className="bg-[#1E3740] text-white px-6 py-2 rounded-lg hover:bg-[#0d1e23] transition duration-300"> Send Message
              </button>
              
              </div>
              
            </form>
            </div>
            
      </section>

      <footer className="bg-gray-800 text-white py-1">
        <div className="container mx-auto text-center">
        <p>&copy; 2024 MyApp. All Rights Reserved.</p>
        </div>
      </footer>
      </div>
      </> 
    )
}

export default Home;