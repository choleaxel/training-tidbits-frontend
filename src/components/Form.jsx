import { useState } from "react";
import { useNavigate} from "react-router-dom";

export default functions AddMedication() {
    let navigate = useNavigate();

    const [newMedication, setNewMedication] = useState({
        name: '',
        uses: '',
        contraindication: '',
        feline: true ,
        canine: true ,
        category: ''
     })

     const [error, setError] = useState('');

     const 


}
