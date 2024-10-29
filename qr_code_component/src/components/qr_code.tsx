
export default function QrCode() {
    return (
      <div className="grid grid-cols-1 auto-rows-min bg-slate-50 p-5 pb-8 gap-2 w-80 place-items-center rounded-xl">
        <img src="src/assets/image-qr-code.png" alt="QR Code" className="rounded-xl"/>
        <text className="text-slate-900 font-[700] text-lg font-Outfit w-5/6 text-center mt-3">Improve your front-end skills by building projects</text> 
        <text className="text-slate-500 font-[400] text-sm/[15px] font-Outfit w-5/6 text-center">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</text> 
      </div>
  
    )
  }
  