import React from 'react';
interface SelectProps {
    onSelectChange: (selectedValue: string) => void; 
}

const Select: React.FC<SelectProps> = ({ onSelectChange }) => {
    const handleSelectChange = (event: any) => {
        const selectedValue = event.target.value;
        onSelectChange(selectedValue)
    }
    return (
        <form className="select">
            <label htmlFor="field">Сортировать по:</label>
            <select name="field" id="field" className="select__field" onChange={handleSelectChange}>
                <option value="price">Цена</option>
                <option value="brand">Бренд</option>
                <option value="product">Название</option>
            </select>
        </form>
    )
}

export default Select
