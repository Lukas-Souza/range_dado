import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
type Props={
    range:String
}
export default function RangeDado({range}:Props){
    function returnNumberRange(PNumeber_:number){
        
        switch (PNumeber_){
            case 1:
                return "/Assets/dice(0).png" // link path ;
            case 2:
                return "/Assets/dice(1).png";
            case 3:
                return "/Assets/dice(2).png";
            case 4:
                return "/Assets/dice(3).png";
            case 5:
                return "/Assets/dice(4).png";
            case 6:
                return "/Assets/dice(5).png";
            default:
                return "/Assets/cross.png";
        }
    }
    return(
        <>
        <Image
        src={String(returnNumberRange(Number(range)))}
        width={200}
        height={200}
        alt="20"
        />

        
        </>
    )
}