import logo from "./logo.svg";
import { Button , TextField} from '@mui/material';

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Registration form</h1>
        <div className="abc">
          <TextField
            id="standard-basic"
            label="First name"
            variant="outlined"
            placeholder="Enter your First number"
            required
          />
        </div>
        <div className="abc">
          <TextField
            id="standard-basic"
            label="last name"
            variant="outlined"
            placeholder="Enter your last namr"
            required
          />
        </div>

        <div className="abc">
          <TextField
            id="standard-basic"
            label="Email Id"
            variant="outlined"
            placeholder="Enter your Email Id"
            required
          />
        </div>

        <div className="abc">
          <TextField
            id="standard-basic"
            label="Phone no"
            variant="outlined"
            placeholder="Enter your Phone no"
            required
          />
        </div>
        <div className="abc">
          <TextField
            id="standard-basic"
            label="Password"
            variant="outlined"
            placeholder="Enter your Password"
            required
          />
        </div>

        <div className="abc">
          <TextField
            id="standard-basic"
            label=" Confirm Password"
            variant="outlined"
            placeholder="Enter your  Confirm Password"
            required
          />
        </div>
      <div>
      <Button type="submit" variant="contained" color="primary"  >Submit</Button>

      </div>
      </header>
    </div>
  );
}

export default App;
