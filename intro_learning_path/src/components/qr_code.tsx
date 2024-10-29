
export default function QrCode() {
  return (
    <div className="grid grid-cols-1 grid-rows-3 gap-3 padding-4">
      <div>
        <img src="src/assets/image-qr-code.png" alt="QR Code"/>
      </div>
      <text className="font-[700] underline font-Outfit">Improve your front-end skills by building projects</text> 
      <text className="font-[400] font-Outfit">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</text> 

    </div>
  )
}
