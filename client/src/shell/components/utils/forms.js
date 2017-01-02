import React from 'react';
const renderInput = field => {
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

const renderCheckbox = field => {
    return (
       
        <label className="checkbox-inline">
            <input {...field.input} type="checkbox"  /> {field.placeholder}
        </label>              
    );
}

const renderRadio = field => {
    console.log(field)
    return (
        <label className="radio-inline">
            <input  {...field.input} value={field.input.value} type="radio"/>
                {field.placeholder}
        </label>
           
    );
}

export { renderInput , renderCheckbox, renderRadio};
