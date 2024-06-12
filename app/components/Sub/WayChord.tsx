interface WayChordProps {
    img:string;
    title1:string;
    title2:string;
    details:string;
}
 
const WayChord: React.FC<WayChordProps> = ({img,title1,title2,details}) => {
    return ( 
        <div className="">
            <div className="flex gap-5 mt-5" >
                <img src={img} alt=""  width={700} height={700} className="rounded-3xl"/>
                <div>
                <h1  className="text-[130px] font-bold leading-none uppercase text-[#ff3500]">{title1}</h1>
                <h1 className="text-[130px] font-bold leading-none uppercase " >{title2}</h1>
                <p className="mt-[23rem] font-semibold text-lg w-[450px] uppercase">{details}</p>
                </div>
            </div>
        </div>
     );
}
 
export default WayChord;