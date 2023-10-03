import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function List(params) {
    const mylist = [
        {
            id:1,
            name:"Mahad",
            phone:"0757375190",
            img:"",
            plugFor:["Curtains","Curtain Rods","Cushions"]
        }
    ]
    return(
    <>
    <div>
        <div>
        <img />
        </div>
        <h3 className="plug-name">{mylist[0].name}</h3>
        <div>
            <FontAwesomeIcon icon={faPhone} />
            <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faWhatsapp} />
        </div>
        <div className="plug-for-div">
           {
             mylist[0].plugFor.map((item) =>
             (<span className="item"> {item}</span>)
             )
           }
        </div>
    </div>
    </>
    )
}
export default List