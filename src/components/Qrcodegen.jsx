import { QRCodeSVG } from "qrcode.react";

const QRCodeGenerator = () => {
  const url = "https://collegedisha.com";

  return (
    <>
     <div className="md:flex flex-col items-center p-4 hidden ">
      <QRCodeSVG value={url} size={130} />
    </div>
    <div className="flex flex-col items-center p-4 md:hidden">
      <QRCodeSVG value={url} size={50} />
    </div>
    </>
  
  );
};

export default QRCodeGenerator;
