import React, {Component} from 'react';

import { connect } from "react-redux";
import Modal from "react-awesome-modal";
import PropTypes from "prop-types";
import {registerQuestion, fetchAllQuestion} from "../../store/modules/questions/actions";
import Table from "../../components/table/table_body/Table";

class Question extends Component {

    state = {
        questionTitle:'',

        tableData: [],
        tableHeaders: {
            QuestionId:'#',
            QuestionTitle:'QuestionTitle'

        }
    };


    componentDidMount() {
        this.props.fetchAllQuestion();
    }

    // componentDidUpdate(prevProps) {
    //     if(this.props.registeredChildrenTips !== prevProps.registeredChildrenTips) {
    //         if(this.props.registeredChildrenTips.length > 0) {
    //             let allregisteredChildrenTips = this.props.registeredChildrenTips;
    //
    //             allregisteredChildrenTips = allregisteredChildrenTips.map(item => {
    //                 return {
    //                     label: item.registeredChildrenTips,
    //                     value: item.CompanyId
    //                 };
    //             });
    //             this.setState({ AllCompanies: allregisteredChildrenTips });
    //         }
    //     }
    // };



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
            QuestionTitle:this.state.questionTitle
        };

        this.props.registerQuestion(payload);
        this.setState({questionTitle:''});
    };

    render() {
        return (
            <div>
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Register Question</h3>
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
                                    <input
                                        name="questionTitle"
                                        className="form-control"
                                        placeholder="questionTitle"
                                        value={this.state.questionTitle}
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

                <Table tableTitle='Registered Measures'
                       tableHeaderObject={this.state.tableHeaders}
                       tableData={this.props.registeredQuestion}/>
            </div>
        );
    }
}


Question.propTypes = {
    registerQuestion: PropTypes.func.isRequired,
    questionsSuccessFullyRegistered: PropTypes.bool.isRequired,
    fetchAllQuestion: PropTypes.func.isRequired,
    registeredQuestion: PropTypes.arrayOf(PropTypes.object).isRequired,
};


const mapStateToProps = state => ({
    questionsSuccessFullyRegistered: state.questions.questionsSuccessFullyRegistered,
    registeredQuestion: state.questions.registeredQuestion
});



const mapDispatchToProps = dispatch => ({
    registerQuestion: payload => dispatch(registerQuestion(payload)),
    fetchAllQuestion: () => dispatch(fetchAllQuestion())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Question);