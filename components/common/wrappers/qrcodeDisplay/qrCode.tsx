import { IProps, QRCode } from 'react-qrcode-logo';

type QRCodeProps = IProps & {
  hasLogo?: boolean;
};

const QRCodeDisplay = ({ hasLogo, ...props }: QRCodeProps) => {
  return (
    <QRCode
      value={props.value}
      size={props.size}
      bgColor={props.bgColor}
      fgColor={props.fgColor}
      logoWidth={props.logoWidth}
      logoHeight={props.logoHeight}
      logoOpacity={props.logoOpacity}
      qrStyle={props.qrStyle}
      {...(hasLogo && {
        logoImage: props.logoImage,
      })}
    />
  );
};

export default QRCodeDisplay;
