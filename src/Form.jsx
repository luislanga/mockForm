import { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [formData, setFormData] = useState({
        inputValue: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, inputValue: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://mock-api-poc.onrender.com/', {
                id: formData.inputValue
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="container">
            <input
                type="text"
                value={formData.inputValue}
                onChange={handleChange}
                placeholder="Enter text"
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;