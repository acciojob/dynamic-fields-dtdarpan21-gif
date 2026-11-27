

import './../styles/App.css';
import React,{useState} from "react";


const App = () => {
  const[fields, setFields] = useState([
    {id: 1, name: "", age: ""}
  ]);

  const addFields = () => {
    setFields([
      ...fields,
      {
        id: Date.now(),
        name: "",
        age: ""
      }
    ]);
  };

  const removeFields = (id) => {
    const updatedFields = fields.filter(
      (field) = field.id !== id
    );
    setFields(updatedFields);

  };

  const handleChange = (id, event) => {
    const{name,value} = event.target;

    const updatedFields = fields.map((field)=>{
      if(field.id === id){
        return{
          ...field,
          [name]: value
        };
      }

      return field;
    })
    setFields(updatedFields);
  };

  const handleSubmit = (event)=> {
    event.preventDefault();

    console.log(fields);
  }
  return (
    <div className = "App">
      <h1>Dynamic Form Fields</h1>
       <form onSubmit={handleSubmit}>
                {fields.map((field) => (
                    <div key={field.id} className="form-group">

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            value={field.name}
                            onChange={(event) =>
                                handleChange(field.id, event)
                            }
                        />

                        <input
                            type="number"
                            name="age"
                            placeholder="Enter Age"
                            value={field.age}
                            onChange={(event) =>
                                handleChange(field.id, event)
                            }
                        />

                        <button
                            type="button"
                            onClick={() => removeFields(field.id)}
                        >
                            Remove
                        </button>

                    </div>
                ))}

                <button type="button" onClick={addFields}>
                    Add More
                </button>

                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default App;
       
