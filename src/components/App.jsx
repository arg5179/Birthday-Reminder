import React from "react";
import '../App.css';
import List from "./List";
import Info from "../Info";


function Recent(person){
    let currentDay = new Date().getDate();
    let currentMonth = new Date().getMonth();

    let remain =person.filter(data => {
        let day = new Date(data.birthday).getDate();
        let month = new Date(data.birthday).getMonth();

        if ( month <= currentMonth){
            if (month == currentMonth) {
                return day<currentDay;
            }
            return day;
        }
    })

    return remain;
}

function Today(person){
    let currentDay = new Date().getDate();
    let currentMonth = new Date().getMonth();

    let remain = person.filter(data => {
        let day = new Date(data.birthday).getDate();
        let month = new Date(data.birthday).getMonth();

        return currentDay == day && currentMonth == month;
    })
    return remain;
}

function Upcoming(person){
    let currentDay = new Date().getDate();
    let currentMonth = new Date().getMonth();

    let remain =person.filter(data => {
        let day = new Date(data.birthday).getDate();
        let month = new Date(data.birthday).getMonth();

        if ( month >= currentMonth){
            if (month == currentMonth) {
                return day>currentDay;
            }
            return day;
        }
    })

    return remain;
}


function App() {

  return (
    <div className="App">
       <main id='site-main'>
            <h1 className="text-dark Htitle">Birthday Reminder</h1>

            <div className="board">
                <h2 className="text-dark upcoming">Today's</h2>
                <List info={Today(Info)} />
                <h2 className="text-dark upcoming">Upcoming</h2>
                <List info={Upcoming(Info)} upcoming={true} />
                <h2 className="text-dark upcoming">Recent</h2>
                <List info={Recent(Info)} recent={true} />
            </div>
        </main>
    </div>
  );
}

export default App;