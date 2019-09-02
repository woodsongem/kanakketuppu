import { useState } from 'react';

const useCustomFormHook = (initialValues: any, callback: any) => {
    const [inputs, setInputs] = useState(initialValues);
    const handleSubmit = (event: any) => {
        if (event) event.preventDefault();
        callback();
    }
    const handleInputChange = (event: any) => {
        event.persist();
        setInputs((inputs: any) => {
            const newLocal = ({ ...inputs, [event.target.name]: event.target.value });
            return newLocal;
        });
    }
    return {
        inputs,
        handleInputChange,
        handleSubmit
    };
}
export default useCustomFormHook;