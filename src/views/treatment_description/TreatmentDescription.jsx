import React, {Component} from 'react';

import { connect } from "react-redux";
import Modal from "react-awesome-modal";
import PropTypes from "prop-types";
import {registerTreatmentDescription, fetchAllTreatmentDescription} from "../../store/modules/treatment_description/actions";
import Table from "../../components/table/table_body/Table";
import {fetchAllTreatment} from "../../store/modules/treatment/actions";
import Select from "react-select";


class TreatmentDescription extends Component {

    state = {
        treatmentDescription:'',
        selectedOption: '',
        selectOptions: [],

        tableData: [],
        tableHeaders: {
            TreatmentDescriptionId:'#',
            TreatmentDescription:'TreatmentDescription'

        }
    };


    componentDidMount() {
        this.props.fetchAllTreatmentDescription();
        this.props.fetchAllTreatment();
    }

    componentDidUpdate(prevProps) {
        if(this.props.registeredTreatment !== prevProps.registeredTreatment) {
            if(this.props.registeredTreatment.length > 0) {
                let allregisteredTreatment = this.props.registeredTreatment;

                allregisteredTreatment = allregisteredTreatment.map(item => {
                    return {
                        label: item.TreatmentTitle,
                        value: item.TreatmentId
                    };
                });
                this.setState({ selectOptions: allregisteredTreatment });
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
            TreatmentId:this.state.selectedOption.value,
            TreatmentDescription:this.state.treatmentDescription
        };

        this.props.registerTreatmentDescription(payload);
        this.setState({treatmentDescription:''});
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
    fetchAllTreatment: PropTypes.func.isRequired,
    registeredTreatment: PropTypes.arrayOf(PropTypes.object).isRequired,
};


const mapStateToProps = state => ({
    treatmentDescriptionSuccessFullyRegistered: state.treatment_description.treatmentDescriptionSuccessFullyRegistered,
    registeredTreatmentDescription: state.treatment_description.registeredTreatmentDescription,
    registeredTreatment: state.treatment.registeredTreatment
});



const mapDispatchToProps = dispatch => ({
    registerTreatmentDescription: payload => dispatch(registerTreatmentDescription(payload)),
    fetchAllTreatmentDescription: () => dispatch(fetchAllTreatmentDescription),
    fetchAllTreatment: () => dispatch(fetchAllTreatment())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TreatmentDescription);