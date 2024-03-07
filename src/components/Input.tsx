import React from 'react'

const Input = () => {
    return (
        <form className="input">
            <label htmlFor="fname">First name:</label>
            <input
                type="text"
                id="fname"
                name="fname"
                className="input__field"
            />
        </form>
    )
}

export default Input
