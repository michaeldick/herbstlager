import React from 'react';

const FormErrors  = ({formErrors}) => (
  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName].length > 0) {
        console.log("errors in ze form");
        return (
          <p key={i}>{fieldName} {formErrors[fieldName]}</p>
        )
      } else {
        return null;
      }
    })}
  </div>
)

export default FormErrors


