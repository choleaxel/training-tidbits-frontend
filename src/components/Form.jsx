import { useState } from "react";
import { useNavigate} from "react-router-dom";

export default functions AddMedication() {
    let navigate = useNavigate();

    const [newMedication, setNewMedication] = useState({
        name: '',
        uses: '',
        contraindication: '',
        feline: false ,
        canine: false ,
        category: ''
     })

     const [error, setError] = useState('');

     const handleSubmit = (e) => {
         e.preventdefault();
         fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newMedication),
         })
         .then(() => navigate('/'))
         .catch(setError);

     }


}
