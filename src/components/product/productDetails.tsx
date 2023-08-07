export const ProductDetails = () => {
  return (
    <>
      <hgroup>
        <p className='uppercase text-orange font-bold text-xs sm:text-sm tracking-widest'>
          Sneaker Company
        </p>
        <h1 className='my-4 text-veryDarkBlue text-[27px] sm:text-[44px] font-bold leading-8 sm:leading-[3rem]'>
          Fall Limited Edition Sneakers
        </h1>
      </hgroup>
      <p className='text-grey text-[15px] sm:text-base sm:mt-10'>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className='my-6 flex flex-wrap gap-x-4 items-center'>
        <span className='text-[27px] font-bold text-veryDarkBlue'>$125.00</span>
        <span className='text-orange text-[15px] font-bold bg-paleOrange p-2 leading-none rounded-md'>
          50%
        </span>
        <span className='ml-auto font-bold text-[15px] sm:basis-full'>
          <s>$250.00</s>
        </span>
      </div>
    </>
  );
};
