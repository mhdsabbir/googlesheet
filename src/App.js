import {useState,useEffect} from 'react'
import axios from 'axios'
import {Data} from './Components/Data'

function App() {

  // form states
  const [pin, setPin]=useState('');
  const [age, setAge]=useState('');
  const [designation, setDesignation]=useState('');
  const [salary, setSalary]=useState('');

  // retrived data state
  const [data, setData]=useState([]);

  // submit event
  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(name, age, designation, salary);

    // our object to pass
    const data = {
      pin,age,designation,salary
    }

    axios.post('https://sheet.best/api/sheets/9678f069-b1f9-4e9e-b93a-1c228f6781a5',data).then(response=>{
      // console.log(response);
      setPin('');
      setAge('');
      setDesignation('');
      setSalary('');
    })
  }

  // getting data function
  const getData=()=>{
    axios.get('https://sheet.best/api/sheets/9678f069-b1f9-4e9e-b93a-1c228f6781a5').then((response)=>{
      setData(response.data);
    })
  }

  // triggering function
  useEffect(()=>{
    getData();
  },[data])

  return (
    <div className="container">
      <br></br>
      <h1>Save Form Data in Google Sheets using React</h1>
      <br></br>
      <form autoComplete="off" className='form-group'
      onSubmit={handleSubmit}>
        <input type='text' className='form-control' required
          placeholder='Scan Your Id card' onChange={(e)=>setPin(e.target.value)}
          value={pin}
        />
        <br></br>
        <label>Age</label>
        <input type='text' className='form-control' required
          placeholder='Enter your age' onChange={(e)=>setAge(e.target.value)}
          value={age}
        />
        <br></br>
        <label>Designation</label>
        <input type='text' className='form-control' required
          placeholder='Enter your designation'
          onChange={(e)=>setDesignation(e.target.value)}
          value={designation}
        />
        <br></br>
        <label>Salary</label>
        <input type='text' className='form-control' required
          placeholder='Enter your salary'
          onChange={(e)=>setSalary(e.target.value)}
          value={salary}
        />
        <br></br>
        <div style={{display:"flex",justifyContent:'flex-end'}}>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
      </form>
      <div className='view-data'>
        {data.length<1&&<>No data to show</>}
        {data.length>0&&(
          <div className='table-responsive'>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>Index</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>Age</th>
                  <th scope='col'>Designation</th>
                  <th scope='col'>Salary</th>
                </tr>
              </thead>
              <tbody>
                <Data data={data}/>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;