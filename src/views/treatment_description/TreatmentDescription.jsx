import React, {Component} from 'react';

import { connect } from "react-redux";
import Modal from "react-awesome-modal";
import PropTypes from "prop-types";
import {registerTreatmentDescription, fetchAllTreatmentDescription} from "../../store/modules/treatment_description/actions";
import Table from "../../components/table/table_body/Table";


class TreatmentDescription extends Component {

    state = {
        treatmentDescription:'',

        tableData: [],
        tableHeaders: {
            TreatmentDescriptionId:'#',
            TreatmentDescription:'TreatmentDescription'

        }
    };


    componentDidMount() {
        this.props.fetchAllTreatmentDescription();
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
            TreatmentDescription:this.state.treatmentDescription
        };

        this.props.registerTreatmentDescription(payload);
    };

    render() {
        return (
            <div>
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Register TreatmentDescription</h3>
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
                                        name="treatmentDescription"
                                        className="form-control"
                                        placeholder="treatmentDescription"
                                        value={this.state.treatmentDescription}
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
                    visible={this.props.treatmentDescriptionSuccessFullyRegistered}
                    width="300"
                    height="300"
                    effect="fadeInUp"
                >
                    <p>treatmentDescription Registered SuccessFully</p>
                </Modal>
                <Table tableTitle='Registered Companies'
                       tableHeaderObject={this.state.tableHeaders}
                       tableData={this.props.registeredTreatmentDescription}/>
            </div>
        );
    }
}


TreatmentDescription.propTypes = {
    registerTreatmentDescription: PropTypes.func.isRequired,
    treatmentDescriptionSuccessFullyRegistered: PropTypes.bool.isRequired,
    fetchAllTreatmentDescription: PropTypes.func.isRequired,
    registeredTreatmentDescription: PropTypes.arrayOf(PropTypes.object).isRequired,
};


const mapStateToProps = state => ({
    treatmentDescriptionSuccessFullyRegistered: state.treatment_description.treatmentDescriptionSuccessFullyRegistered,
    registeredTreatmentDescription: state.treatment_description.registeredTreatmentDescription
});



const mapDispatchToProps = dispatch => ({
    registerTreatmentDescription: payload => dispatch(registerTreatmentDescription(payload)),
    fetchAllTreatmentDescription: () => dispatch(fetchAllTreatmentDescription)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TreatmentDescription);