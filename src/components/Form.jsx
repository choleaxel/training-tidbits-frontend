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
     const handleChange = (e) => {
         const newValue = (e.target.value)
         setNewMedication({
             ...newMedication,
             [e.target.name]: newValue,
        });
     }
     return (
        <section style={{ margin: '2em 1em' }}>
            <h1> Add New Medication </h1>
            {error && <h2 style={{ color: 'red' }}>{error}</h2>}
            <form onSubmit={handleSubmit}>
                <label for='name'>
                    Name: <input name='name' type='text' value={newMedication.name}
                    onChange={handleChange} />
                </label>
                <br />
                <label for='</label>
            </form>
        </section> 
     )


}
