import React from 'react';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import moment from 'moment';

const renderInput = field => {
    let label= null;
    if(field.placeholder){
        label = <label> {field.placeholder} </label>
    }
    
    return (
        <div className="form-group">
            {label}
            <div>
                <input {...field.input} className="form-control" />
                {field.meta.error && field.meta.touched && <span className="text-danger"> {field.meta.error} </span>}
            </div>
        </div>
    )
}

const renderDate = field => {

    return (
        <div>
            <label> {field.placeholder} </label>
            <div>
                <DatePicker {...field.input} className="form-control"
                    selected={field.input.value ? moment(field.input.value) : null}
                  />
                {field.meta.error && field.meta.touched && <span className="text-danger"> {field.meta.error} </span>}
            </div>
        </div>
    )
}

const renderSelect = field => {
    console.log(field)
    console.log(field.input.value)
    let label = null;
    if(field.placeholder){
        label = <label> {field.placeholder} </label>
    }
    let labelKey = field.labelKey ? field.labelKey : 'name';
    let valueKey = field.valueKey ? field.valueKey : 'id';
    
    return (
        <div>
            {label}
            <div className>
                <Select
                    {...field.input}
                    options={field.options}
                    value={field.input.value[valueKey]}                    
                    valueKey={valueKey}
                    labelKey={labelKey}
                    onBlur={() => {                        
                        field.input.onBlur(field.input.value)
                    }}                    
                    onChange={(val) =>{
                        console.log('changed with value---' + val)
                        console.log(val)
                        field.input.onChange(val);                        
                    }}
                    />
            </div>
        </div>
    );
}



// const renderDatePicker = ({input, placeholder, defaultValue, meta: {touched, error} }) => (
//   <div>
//         <DatePicker {...input} dateForm="MM/DD/YYYY" selected={input.value ? moment(input.value) : null} />
//         {touched && error && <span>{error}</span>}
//   </div>
// );

// export default renderDatePicker

const renderCheckbox = field => {
    return (
       
        <label className="checkbox-inline">
            <input {...field.input} type="checkbox"  /> {field.placeholder}
        </label>              
    );
}

const renderRadio = field => {    
    return (
        <label className="radio-inline">
            <input  {...field.input} value={field.input.value} type="radio"/>
                {field.placeholder}
        </label>
           
    );
}

export { renderInput , renderCheckbox, renderRadio, renderDate, renderSelect};
