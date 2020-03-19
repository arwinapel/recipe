import React, {useState} from 'react';
import './App.css';
import AppHeader from "../../component/AppHeader/AppHeader";

function App() {
    const [date, setDate] = useState(new Date());
    return (
        <div className="App-container">
            <AppHeader selectedDate={date} handleDateChange={setDate}/>
        </div>
    );
}

export default App;
