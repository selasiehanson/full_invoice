import React from 'react';
const renderInput = field => {
    console.log(field)
    return (
        <div className="form-group">
            <label> {field.placeholder} </label>
            <div>
                <input {...field.input} className="form-control" />
                {field.meta.error && field.meta.touched && <span className="text-danger"> {field.meta.error} </span>}
            </div>
        </div>
    )
}

export { renderInput };