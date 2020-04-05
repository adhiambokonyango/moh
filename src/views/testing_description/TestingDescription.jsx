import React, {Component} from 'react';

import { connect } from "react-redux";
import Modal from "react-awesome-modal";
import PropTypes from "prop-types";
import {fetchAllTestingDescription, registerTestingDescription} from "../../store/modules/testing_description/actions";
import Table from "../../components/table/table_body/Table";


class TestingDescription extends Component {

    state = {
        testingDescription:'',

        tableData: [],
        tableHeaders: {
            TestingDescriptionId:'#',
            TestingDescription:'TestingDescription'

        }
    };


    componentDidMount() {
        this.props.fetchAllTestingDescription();
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
            TestingDescription:this.state.testingDescription
        };

        this.props.registerTestingDescription(payload);
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
                <Modal
                    visible={this.props.testingDescriptionSuccessFullyRegistered}
                    width="300"
                    height="300"
                    effect="fadeInUp"
                >
                    <p>TestingDescription Registered SuccessFully</p>
                </Modal>
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
};


const mapStateToProps = state => ({
    testingDescriptionSuccessFullyRegistered: state.testing_description.testingDescriptionSuccessFullyRegistered,
    registeredTestingDescription: state.testing_description.registeredTestingDescription
});



const mapDispatchToProps = dispatch => ({
    registerTestingDescription: payload => dispatch(registerTestingDescription(payload)),
    fetchAllTestingDescription: () => dispatch(fetchAllTestingDescription)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TestingDescription);