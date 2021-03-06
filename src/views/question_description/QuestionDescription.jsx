import React, {Component} from 'react';

import { connect } from "react-redux";
import Modal from "react-awesome-modal";
import PropTypes from "prop-types";
import {fetchAllQuestionDescription, registerQuestionDescription} from "../../store/modules/question_description/actions";
import Table from "../../components/table/table_body/Table";
import {fetchAllQuestion} from "../../store/modules/questions/actions";
import Select from "react-select";



class QuestionDescription extends Component {

    state = {
        questionDescription:'',
        selectedOption: '',
        selectOptions: [],

        tableData: [],
        tableHeaders: {
            QuestionDescriptionId:'#',
            QuestionDescription:'QuestionDescription'

        }
    };


    componentDidMount() {
        this.props.fetchAllQuestion();
        this.props.fetchAllQuestionDescription();
    }

    componentDidUpdate(prevProps) {
        if(this.props.registeredQuestion !== prevProps.registeredQuestion) {
            if(this.props.registeredQuestion.length > 0) {
                let allregisteredQuestion = this.props.registeredQuestion;

                allregisteredQuestion = allregisteredQuestion.map(item => {
                    return {
                        label: item.QuestionTitle,
                        value: item.QuestionId
                    };
                });
                this.setState({ selectOptions: allregisteredQuestion });
            }
        }
    };



    handleChange = event => {
        let newState = this.state;
        newState[event.target.name] = event.target.value;
        this.setState({
            ...newState
        });
    };

    handleSubmit = (e) =>{
        e.preventDefault();

        const payload = {
            QuestionId:this.state.selectedOption.value,
            QuestionDescription:this.state.questionDescription
        };

        this.props.registerQuestionDescription(payload);
        this.setState({questionDescription:''});
    };

    render() {
        return (
            <div>
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Register QuestionDescription</h3>
                    </div>
                    <div className="panel-body">
                        <form
                            action=""
                            method="POST"
                            onSubmit={this.handleSubmit}
                            encType="multipart/form-data"
                        >
                            <fieldset>

                                <div className="form-group">
                                    <Select
                                        className="react-select"
                                        classNamePrefix="react-select"
                                        placeholder="Select Title"
                                        name="selectedOption"
                                        closeMenuOnSelect={true}
                                        value={this.state.selectedOption}
                                        onChange={value =>
                                            this.setState({
                                                ...this.state,
                                                selectedOption: value
                                            })
                                        }
                                        options={this.state.selectOptions}
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        name="questionDescription"
                                        className="form-control"
                                        placeholder="questionDescription"
                                        value={this.state.questionDescription}
                                        type="text"
                                        onChange={this.handleChange}
                                        autoFocus
                                        required={true}
                                    />

                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-lg btn-success btn-block"
                                >
                                    Submit
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>

                <Table tableTitle='Registered Companies'
                       tableHeaderObject={this.state.tableHeaders}
                       tableData={this.props.registeredQuestionDescription}/>
            </div>
        );
    }
}


QuestionDescription.propTypes = {
    registerQuestionDescription: PropTypes.func.isRequired,
    questionDescriptionSuccessFullyRegistered: PropTypes.bool.isRequired,
    fetchAllQuestionDescription: PropTypes.func.isRequired,
    registeredQuestionDescription: PropTypes.arrayOf(PropTypes.object).isRequired,
    registeredQuestion: PropTypes.arrayOf(PropTypes.object).isRequired,
    fetchAllQuestion: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
    questionDescriptionSuccessFullyRegistered: state.question_description.questionDescriptionSuccessFullyRegistered,
    registeredQuestionDescription: state.question_description.registeredQuestionDescription,
    registeredQuestion: state.questions.registeredQuestion
});



const mapDispatchToProps = dispatch => ({
    registerQuestionDescription: payload => dispatch(registerQuestionDescription(payload)),
    fetchAllQuestionDescription: () => dispatch(fetchAllQuestionDescription()),
    fetchAllQuestion: () => dispatch(fetchAllQuestion())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionDescription);