import React, {Component} from 'react';

import { connect } from "react-redux";
import Modal from "react-awesome-modal";
import PropTypes from "prop-types";
import {fetchAllStressCopingDescription, registerStressCopingDescription} from "../../store/modules/stress_coping_description/actions";
import Table from "../../components/table/table_body/Table";


class StressCopingDescription extends Component {

    state = {
        stressCopingDescription:'',

        tableData: [],
        tableHeaders: {
            StressCopingDescriptionId:'#',
            StressCopingDescription:'StressCopingDescription'

        }
    };


    componentDidMount() {
        this.props.fetchAllStressCopingDescription();
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
            StressCopingDescription:this.state.stressCopingDescription
        };

        this.props.registerStressCopingDescription(payload);
    };

    render() {
        return (
            <div>
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">registerStressCopingDescription</h3>
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
                                        name="stressCopingDescription"
                                        className="form-control"
                                        placeholder="stressCopingDescription"
                                        value={this.state.stressCopingDescription}
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
                    visible={this.props.stressCopingDescriptionSuccessFullyRegistered}
                    width="300"
                    height="300"
                    effect="fadeInUp"
                >
                    <p>stressCopingDescriptionSuccessFullyRegistered</p>
                </Modal>
                <Table tableTitle='Registered Companies'
                       tableHeaderObject={this.state.tableHeaders}
                       tableData={this.props.registeredStressCopingDescription}/>
            </div>
        );
    }
}


StressCopingDescription.propTypes = {
    registerStressCopingDescription: PropTypes.func.isRequired,
    stressCopingDescriptionSuccessFullyRegistered: PropTypes.bool.isRequired,
    fetchAllStressCopingDescription: PropTypes.func.isRequired,
    registeredStressCopingDescription: PropTypes.arrayOf(PropTypes.object).isRequired,
};


const mapStateToProps = state => ({
    stressCopingDescriptionSuccessFullyRegistered: state.stress_coping_description.stressCopingDescriptionSuccessFullyRegistered,
    registeredStressCopingDescription: state.stress_coping_description.registeredStressCopingDescription
});



const mapDispatchToProps = dispatch => ({
    registerStressCopingDescription: payload => dispatch(registerStressCopingDescription(payload)),
    fetchAllStressCopingDescription: () => dispatch(fetchAllStressCopingDescription)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StressCopingDescription);