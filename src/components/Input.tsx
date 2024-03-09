import React from 'react'

interface InputProps {
    onInputChange: (inputValue: number | string) => void,
    inputName: string,
}

const Input: React.FC<InputProps> = ({ onInputChange, inputName }) => {
    const handleInputValue = (event: any) => {
        const inputValue = event.target.value;
        onInputChange(inputValue)
    }
    

    return (
        <form className="input">
            <label htmlFor="fname">{inputName}</label>
            <input
                type="text"
                id="fname"
                name="fname"
                className="input__field"
                onChange={handleInputValue}
            />
        </form>
    )
}

export default Input
