interface IImageWrapperProps {
  withDot?: boolean;
  src: string;
  alt: string;
  width: string;
  height: string;
  mdWidth: string;
  mdHeight: string;
}

const ImageWrapper: React.FC<IImageWrapperProps> = ({ withDot = true, src, alt, width, height, mdWidth, mdHeight }) => {
  return (
    <div
      className={`relative bg-white border-[5px] border-solid border-white rounded-[20px] pb-[12px] z-40 w-[${width}] h-[${height}] md:w-[${mdWidth}] md:h-[${mdHeight}]`}
      style={{ boxShadow: "0px 0px 15px 0px #00000012, 0px 25px 50px -12px #00000040" }}
    >
      {withDot &&
        <div className="flex gap-[5px] relative py-[5px] top-[5px] left-[12px]">
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <div className="w-2 h-2 rounded-full bg-yellow-500" />
          <div className="w-2 h-2 rounded-full bg-green-500" />
        </div>
      }
      <img
        className="w-full h-full object-cover rounded-bl-[20px] rounded-br-[20px] pb-[5px]"
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default ImageWrapper;