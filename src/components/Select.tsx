import React from 'react'

const Select = () => {
    return (
        <form className="select">
            <label htmlFor="field">Field:</label>
            <select name="field" id="field" className="select__field">
                <option value="volvo">Price</option>
                <option value="saab">Brand</option>
                <option value="mercedes">Product</option>
            </select>
        </form>
    )
}

export default Select
