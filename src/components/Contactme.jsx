
import emailjs from 'emailjs-com';

const Contactme = () => {

    
        function enviarEmail(e){
            e.preventDefault();
           
            emailjs.sendForm('service_jyzep1i','template_hxr6uh9',e.target,'GDZTuX3g5NbLDVZkz').then(res=>{
                e.target.reset()
                console.log(res);
            })
      
           
            
              


        }

       
    return (
   <>
   
   <div className='max-w-[230px] mx-auto relative  rounded-md p-1 pt-11' >
    <div className='p-2  pt-4 flex  flex-col m-auto shadow-lg shadow-black rounded-lg ' >
        <h1 className='font-Source_Code_Pro text-center text-lg text-white'>Contact me</h1>
        <hr/>
        <form className=' p-3 rounded-md grid gap- w-[min(200%,_210px)] relative  ' id="create-course-form" onSubmit={enviarEmail}>
            <div >
                <div>
                    <label className='font-Source_Code_Pro text-white grid ' htmlFor="">Name</label>
                    <input className='rounded-sm outline-none' id='name'  name='frOm_name' type='text'/>
                </div>
                <div >
                    <label  className='font-Source_Code_Pro text-white grid ' htmlFor="">email</label>
                    <input   type="text"  className="rounded-sm outline-none" id="email" name="email "/>
                </div>
            </div>
            <div>
                <label className='font-Source_Code_Pro text-white grid ' htmlFor="">mensaje</label>
                <textarea  type="text" className="rounded-sm w-[181px]  outline-none" id="message" name='message'></textarea>
            </div>
            <button type="submit" className=" hover:bg-indigo-600 rounded-sm font-Source_Code_Pro text-center text-white " >Enviar Correo</button>
        </form>
    </div>
</div>
   </>
 
 
 
 
 
    )
    }

 

export default Contactme