import React, {Component} from 'react';

import { connect } from "react-redux";
import Modal from "react-awesome-modal";
import PropTypes from "prop-types";
import {fetchAllTestingDescription, registerTestingDescription} from "../../store/modules/testing_description/actions";
import Table from "../../components/table/table_body/Table";
import {fetchAllTesting} from "../../store/modules/testing/actions";
import Select from "react-select";


class TestingDescription extends Component {

    state = {
        testingDescription:'',
        selectedOption: '',
        selectOptions: [],

        tableData: [],
        tableHeaders: {
            TestingDescriptionId:'#',
            TestingDescription:'TestingDescription'

        }
    };


    componentDidMount() {
        this.props.fetchAllTestingDescription();
        this.props.fetchAllTesting();
    }

    componentDidUpdate(prevProps) {
        if(this.props.registeredTesting !== prevProps.registeredTesting) {
            if(this.props.registeredTesting.length > 0) {
                let allregisteredTesting = this.props.registeredTesting;

                allregisteredTesting = allregisteredTesting.map(item => {
                    return {
                        label: item.TestingTitle,
                        value: item.TestingId
                    };
                });
                this.setState({ selectOptions: allregisteredTesting });
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
            TestingId:this.state.selectedOption.value,
            TestingDescription:this.state.testingDescription
        };

        this.props.registerTestingDescription(payload);
        this.setState({testingDescription:''});
    };

    render() {
        return (
            <div>
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Register TestingDescription</h3>
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
                                        name="testingDescription"
                                        className="form-control"
                                        placeholder="testingDescription"
                                        value={this.state.testingDescription}
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

                <Table tableTitle='Registered TestingDescription'
                       tableHeaderObject={this.state.tableHeaders}
                       tableData={this.props.registeredTestingDescription}/>
            </div>
        );
    }
}


TestingDescription.propTypes = {
    registerTestingDescription: PropTypes.func.isRequired,
    testingDescriptionSuccessFullyRegistered: PropTypes.bool.isRequired,
    fetchAllTestingDescription: PropTypes.func.isRequired,
    registeredTestingDescription: PropTypes.arrayOf(PropTypes.object).isRequired,
    fetchAllTesting: PropTypes.func.isRequired,
    registeredTesting: PropTypes.arrayOf(PropTypes.object).isRequired,
};


const mapStateToProps = state => ({
    testingDescriptionSuccessFullyRegistered: state.testing_description.testingDescriptionSuccessFullyRegistered,
    registeredTestingDescription: state.testing_description.registeredTestingDescription,
    registeredTesting: state.testing.registeredTesting
});



const mapDispatchToProps = dispatch => ({
    registerTestingDescription: payload => dispatch(registerTestingDescription(payload)),
    fetchAllTestingDescription: () => dispatch(fetchAllTestingDescription()),
    fetchAllTesting: () => dispatch(fetchAllTesting())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TestingDescription);