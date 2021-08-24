import './App.css';
import React from 'react';
import Question from './Question';
import {Routes, Route, Link} from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        //create array property in state that will hold the questions/answers
        this.state = {
            grid: [{question: '', answer:''}, {question: '', answer: ''}, {question: '', answer: ''},
                {question: '', answer: ''}, {question: '', answer: ''}, {question: '', answer: ''}]
        }
    }
    // function to add the question to the grid
    addQuestion = (event, id, question, answer) => {
        event.preventDefault();
        // log information to the console for debugging purposes
        console.log(`Adding question with id: ${id}, question: ${question}, answer: ${answer}`);
        // create variable from grid state property
        let updatedGrid = Array.from(this.state.grid);
        // set the question/answer to the specified index
        updatedGrid[id] = {
            question: question,
            answer: answer,
        }
        // set the grid state with the updated grid
        this.setState({
            grid: updatedGrid
        })
    }


    render() {
        // create and initialize an array
        let QuestionJSX = [];
        for (let i = 0; i < this.state.grid.length; i++) {
            // add a question to the array
            QuestionJSX.push(<Question addQuestion={this.addQuestion}
                                       question={this.state.grid[i].question}
                                        index={i} key={i} />)
        }

        return (
            <div className="App">
                <Routes>
                    <Route path="/howto" element={<HowTo />} />
                </Routes>
                <Link to="howto">Example Link</Link>
                {QuestionJSX}
            </div>
        );
    }
}

export class HowTo extends React.Component {

    render() {
        return (
            <h1>How To</h1>
        );
    }
}


export default App;
