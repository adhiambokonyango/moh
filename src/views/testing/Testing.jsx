import React, {Component} from 'react';

import { connect } from "react-redux";
import Modal from "react-awesome-modal";
import PropTypes from "prop-types";
import {fetchAllTesting, registerTesting} from "../../store/modules/testing/actions";
import Table from "../../components/table/table_body/Table";

class Testing extends Component {

    state = {
        testingTitle:'',

        tableData: [],
        tableHeaders: {
            TestingId:'#',
            TestingTitle:'TestingTitle'

        }
    };


    componentDidMount() {
        this.props.fetchAllTesting();
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
            TestingTitle:this.state.testingTitle
        };

        this.props.registerTesting(payload);
    };

    render() {
        return (
            <div>
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Register Testing</h3>
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
                                        name="testingTitle"
                                        className="form-control"
                                        placeholder="testingTitle"
                                        value={this.state.testingTitle}
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
                    visible={this.props.testingSuccessFullyRegistered}
                    width="300"
                    height="300"
                    effect="fadeInUp"
                >
                    <p>Testing Registered SuccessFully</p>
                </Modal>
                <Table tableTitle='Registered Testing'
                       tableHeaderObject={this.state.tableHeaders}
                       tableData={this.props.registeredTesting}/>
            </div>
        );
    }
}


Testing.propTypes = {
    registerTesting: PropTypes.func.isRequired,
    testingSuccessFullyRegistered: PropTypes.bool.isRequired,
    fetchAllTesting: PropTypes.func.isRequired,
    registeredTesting: PropTypes.arrayOf(PropTypes.object).isRequired,
};


const mapStateToProps = state => ({
    testingSuccessFullyRegistered: state.testing.testingSuccessFullyRegistered,
    registeredTesting: state.testing.registeredTesting
});



const mapDispatchToProps = dispatch => ({
    registerTesting: payload => dispatch(registerTesting(payload)),
    fetchAllTesting: () => dispatch(fetchAllTesting)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Testing);