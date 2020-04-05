import React, {Component} from 'react';

import { connect } from "react-redux";
import Modal from "react-awesome-modal";
import PropTypes from "prop-types";
import {fetchAllQuestionDescription, registerQuestionDescription} from "../../store/modules/question_description/actions";
import Table from "../../components/table/table_body/Table";


class QuestionDescription extends Component {

    state = {
        questionDescription:'',

        tableData: [],
        tableHeaders: {
            QuestionDescriptionId:'#',
            QuestionDescription:'QuestionDescription'

        }
    };


    componentDidMount() {
        this.props.fetchAllQuestionDescription();
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
            QuestionDescription:this.state.questionDescription
        };

        this.props.registerQuestionDescription(payload);
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
                <Modal
                    visible={this.props.questionDescriptionSuccessFullyRegistered}
                    width="300"
                    height="300"
                    effect="fadeInUp"
                >
                    <p>questionDescription Registered SuccessFully</p>
                </Modal>
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
};


const mapStateToProps = state => ({
    questionDescriptionSuccessFullyRegistered: state.question_description.questionDescriptionSuccessFullyRegistered,
    registeredQuestionDescription: state.question_description.registeredQuestionDescription
});



const mapDispatchToProps = dispatch => ({
    registerQuestionDescription: payload => dispatch(registerQuestionDescription(payload)),
    fetchAllQuestionDescription: () => dispatch(fetchAllQuestionDescription)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionDescription);