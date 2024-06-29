import LocalShippingIcon from '@mui/icons-material/LocalShipping';
function Service() {
    return ( 
        <>
        <div className='text-center w-full'>
           <h1 className='text-2xl mt-20 text-yellow-700'>OUR SERVICES</h1>
           <h1 className='text-4xl font-bold mt-10'>Explore What We Provide the <br/> facility to our customers</h1>
        </div>
        <div className="full xl:flex px-20 space-x-20 mt-10 mb-10">
           <div className='text-center'>
             <LocalShippingIcon style={{ fontSize: '100px' }}/>
             <div>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
             </div>
           </div>
           <div className='text-center'>
             <LocalShippingIcon style={{ fontSize: '100px' }}/>
             <div>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
             </div>
           </div>
           <div className='text-center'>
             <LocalShippingIcon style={{ fontSize: '100px' }}/>
             <div>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
             </div>
           </div>
        </div>
        </>
     );
}

export default Service;