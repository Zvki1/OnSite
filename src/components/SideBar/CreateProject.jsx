import axios from 'axios';
import { X } from 'lucide-react';
import { useState } from 'react';

const CreateProject = ({setShowModal}) => {
    const [name, setName] = useState('')
    const handleClick = () => {
    setShowModal(false)
    }
    const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://192.168.43.40:8000/api/projects', {
    name: name
    }, {
    headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    }
    })
    .then(res => {
    console.log(res.data)
    alert('Project created successfully')
    window.location.reload()
    
    })
    .catch(err => console.log(err))
    console.log(name);
    setName('')
    setShowModal(false)
    }
  return (
    <div className="absolute z-50 top-0 right-0 w-screen h-screen      flex justify-center items-center">
      <form  className="bg-white p-10 rounded-md border flex flex-col items-center">
        <div className="mb-5">
         <div className="flex items-center justify-between">
         <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Project name
          </label>
         <button onClick={handleClick}>
            <X size={20}  />
         </button>
         </div>
          <input
            value={name}
            onChange={(e) => { setName(e.target.value) }}
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="project"
            required
          />
        </div>
         <button onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </div>
  );
};

export default CreateProject;
