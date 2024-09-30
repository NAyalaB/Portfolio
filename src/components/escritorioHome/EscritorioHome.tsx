import Image from "next/image";

const EscritorioHome: React.FC = () => {
  return (
    <div id="Contenedor-central-home" className="relative p-8">
      <div className="relative w-full h-0 pb-[42.34%]">
        <Image
          src={"/assets/cuadradosGrisFondo.png"}
          alt={""}
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute top-0 left-1/4 w-[50%] h-[auto] z-10">
        <Image
          src={"/assets/escritorioVacio.png"}
          alt={""}
          layout="responsive"
    width={700}
    height={700}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default EscritorioHome;
