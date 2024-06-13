interface BorderCardProps {
    name:string;
    info:string;
}
 
const BorderCard: React.FC<BorderCardProps> = ({name,info}) => {
    return ( 
        <div className="w-screen h-[50px] px-5 ">
             <div className="flex gap-5 justify-between h-[50px] items-center  border-t border-white w-[1000px] uppercase text-[#ffffff] font-semibold">
                <div>
                    {name}
                </div>
                <div>
                    {info}
                </div>
             </div>
        </div>
     );
}
 
export default BorderCard;