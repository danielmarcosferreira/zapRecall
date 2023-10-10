import setaPlay from "../img/seta_play.png";
import right from "../img/icone_certo.png"
import almost from "../img/icone_quase.png"
import error from "../img/icone_erro.png"

export default function Icon({status}) {
    return (
        <>
            {status === "no status" && <img src={setaPlay} alt="seta"/>}
            {status === "right" && <img src={right} alt="right"/>}
            {status === "almost" && <img src={almost} alt="almost"/>}
            {status === "error" && <img src={error} alt="error"/>}
        </>
    )
};
