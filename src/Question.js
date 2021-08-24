import React from 'react';
import Button from "react-bootstrap/Button";

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionText: '',
            answerText: '',
        }
    }
    // sets the state to the value typed in the input field
    changeQuestion = (event) => {
        this.setState({
            questionText: event.target.value
        })
    }
    // sets the state to the value typed in the input field
    changeAnswer = (event) => {
        this.setState({
            answerText: event.target.value
        })
    }

    clearInput = () => {
        this.setState({
            questionText: '',
            answerText: ''
        })
    }

    render() {
        return (
          <div className="container">
              <form>
                  <input name="question"
                         placeholder="Type your question"
                         //whatever value is typed in, assign it to this state's question text
                         value={this.state.questionText}
                         //when change is detected, set the state to the value being typed in
                         onChange={(event) => {this.changeQuestion(event)}} />
                  <input name="answer"
                         placeholder="Type the answer"
                         value={this.state.answer}
                         onChange={(event) => {this.changeAnswer(event)}} />
                  <Button name="submit"
                        placeholder="Submit"
                          //add the question to the array when user clicks submit
                         onClick={(event) => {
                      this.props.addQuestion(event, this.props.index, this.state.questionText, this.state.answerText);
                         this.clearInput();}} >Submit</Button>
              </form>
              <p>{this.props.question}</p>
              <p>{this.props.answer}</p>
          </div>
        );
    }
}

export default Question;