import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PopUp = ({ showModal, setShowModal }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [user_name, setuser_name] = useState("");
  const [deadline, setdeadline] = useState("");
  const [priority, setpriority] = useState("");
  const [validation_type, setvalidation_type] = useState("");
  const [color, setColor] = useState("");
    const handleChangeuser_name = (event) => {
    setuser_name(event.target.value);
    };
    const handleChangeLocation = (event) => {
    setLocation(event.target.value);
    };
    const handleChangeName = (event) => {
    setName(event.target.value);
    };

  const handleColorChange = (event) => {
    setColor(event.target.value);
    console.log(color);
    };
  const handlevalidation_typeChange = (event) => {
    setvalidation_type(event.target.value);
    };
  const handleSelectChange = (event) => {
    setpriority(event.target.value);
    
  };
  const handleDateChange = (event) => {
    setdeadline(event.target.value);
    
  };
  const handleClick = () => {
    setShowModal(false);
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    // verify the data
    if (!name || !location || !user_name || !deadline || !priority || !validation_type || !color) {
      alert("please fill all the fields");
      return;
    }else{
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = urlParams.get("project");
        console.log(name, location, user_name, deadline, priority, validation_type, color,projectId);
        axios.post('http://192.168.43.40:8000/api/tasks', {
            name: name,
            location: location,
            user_name: user_name,
            deadline: deadline,
            priority: priority,
            validation_type: validation_type,
            color: color,
            project_id: projectId,
            }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
            })
            .then( res => 
              {console.log(res);
              alert("task added successfully");
              window.location.reload();

              })
            .catch(err => console.log(err))
    }
    // send the data to the backend
    // close the modal

  };

  return (
    <div className="">
      <div
        id="crud-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="p-4 pl-96 overflow-y-auto overflow-x-hidden absolute top-20  z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="absolute top-20   p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Create New Product
              </h3>
              <button
                onClick={handleClick}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="crud-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* the main form */}
            <form className="p-4 md:p-5">
              <div className="grid gap-4 px-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChangeName}
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type task name"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    location
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={handleChangeLocation}
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type location"
                    required=""
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    user_name it to:
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={user_name}
                    onChange={handleChangeuser_name}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="give the name of the employe"
                    required
                  />
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="deadline"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    deadline
                  </label>
                  <input
                    type="date"
                    value={deadline}
                    onChange={handleDateChange}
                    name="date"
                    id="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required=""
                  />
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Priority
                  </label>
                  <select value={priority} onChange={handleSelectChange}
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option selected="">Select category</option>
                    <option value="high">high</option>
                    <option value="medium">medium</option>
                    <option value="low">low</option>
                  </select>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    validation type
                  </label>
                  <select
                    value={validation_type}
                    onChange={handlevalidation_typeChange}
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option selected="">Select category</option>
                    <option value="file">file</option>
                    <option value="picture">picture</option>
                    <option value="none">none</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="color"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    color
                  </label>
                  <input
                    type="color"
                    value={color}
                    onChange={handleColorChange}
                    name="color"
                    id="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type location"
                    required=""
                  />
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="me-1 -ms-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Add task
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
