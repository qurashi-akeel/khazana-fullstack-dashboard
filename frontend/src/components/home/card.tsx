import Image from 'next/image';

const Card = () => {
  return (
    <div className="flex bg-[#0070DF]/20 text-[#F6F6F6] rounded-md py-2 flex-col gap-4 px-4">
      <div className="flex justify-between gap-4">
        <p className="border-l-2 border-teal-500 text-sm px-2 w-32">
          Current Investment Value
        </p>
        <div className="text-[#6BBD6E] text-xs">
          <p className="flex items-center gap-1">
            <Image src="arr-up.svg" alt="up" width={14} height={14} />
            <span>+0.6</span>
          </p>
          <p>1D Return</p>
        </div>
      </div>
      <p className="font-semibold">₹ 5,75,000</p>
    </div>
  );
};
export default Card;
