import React, {Component} from 'react';

import { connect } from "react-redux";
import Modal from "react-awesome-modal";
import PropTypes from "prop-types";
import {fetchAllTreatment, registerTreatment} from "../../store/modules/treatment/actions";
import Table from "../../components/table/table_body/Table";

class Treatment extends Component {

    state = {
        treatmentTitle:'',

        tableData: [],
        tableHeaders: {
            TreatmentId:'#',
            TreatmentTitle:'TreatmentTitle'

        }
    };


    componentDidMount() {
        this.props.fetchAllTreatment();
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
            TreatmentTitle:this.state.treatmentTitle
        };

        this.props.registerTreatment(payload);
    };

    render() {
        return (
            <div>
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Register Treatment</h3>
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
                                        name="treatmentTitle"
                                        className="form-control"
                                        placeholder="treatmentTitle"
                                        value={this.state.treatmentTitle}
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
                    visible={this.props.treatmentSuccessFullyRegistered}
                    width="300"
                    height="300"
                    effect="fadeInUp"
                >
                    <p>Treatment Registered SuccessFully</p>
                </Modal>
                <Table tableTitle='Registered Treatment'
                       tableHeaderObject={this.state.tableHeaders}
                       tableData={this.props.registeredTreatment}/>
            </div>
        );
    }
}


Treatment.propTypes = {
    registerTreatment: PropTypes.func.isRequired,
    treatmentSuccessFullyRegistered: PropTypes.bool.isRequired,
    fetchAllTreatment: PropTypes.func.isRequired,
    registeredTreatment: PropTypes.arrayOf(PropTypes.object).isRequired,
};


const mapStateToProps = state => ({
    treatmentSuccessFullyRegistered: state.treatment.treatmentSuccessFullyRegistered,
    registeredTreatment: state.treatment.registeredTreatment
});



const mapDispatchToProps = dispatch => ({
    registerTreatment: payload => dispatch(registerTreatment(payload)),
    fetchAllTreatment: () => dispatch(fetchAllTreatment)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Treatment);