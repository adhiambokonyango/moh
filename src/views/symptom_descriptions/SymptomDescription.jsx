import React, {Component} from 'react';

import { connect } from "react-redux";
import Modal from "react-awesome-modal";
import PropTypes from "prop-types";
import {fetchAllSymptomDescription, registerSymptomDescription} from "../../store/modules/symptom_descriptions/actions";
import Table from "../../components/table/table_body/Table";
import Select from "react-select";
import {fetchAllSymptom} from "../../store/modules/symptoms/actions";


class SymptomDescription extends Component {

    state = {
        symptomDescription:'',
        selectedOption: '',
        selectOptions: [],

        tableData: [],
        tableHeaders: {
            SymptomDescriptionId:'#',
            SymptomDescription:'SymptomDescription'

        }
    };


    componentDidMount() {
        this.props.fetchAllSymptom();
        this.props.fetchAllSymptomDescription();
    }

    componentDidUpdate(prevProps) {
        if(this.props.registeredSymptom !== prevProps.registeredSymptom) {
            if(this.props.registeredSymptom.length > 0) {
                let allregisteredSymptom = this.props.registeredSymptom;

                allregisteredSymptom = allregisteredSymptom.map(item => {
                    return {
                        label: item.SymptomTitle,
                        value: item.SymptomId
                    };
                });
                this.setState({ selectOptions: allregisteredSymptom });
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
            SymptomId:this.state.selectedOption.value,
            SymptomDescription:this.state.symptomDescription
        };

        this.props.registerSymptomDescription(payload);
        this.setState({symptomDescription:''});
    };

    render() {
        return (
            <div>
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Register SymptomDescription</h3>
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
                                        name="symptomDescription"
                                        className="form-control"
                                        placeholder="symptomDescription"
                                        value={this.state.symptomDescription}
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

                <Table tableTitle='Registered SymptomDescription'
                       tableHeaderObject={this.state.tableHeaders}
                       tableData={this.props.registeredSymptomDescription}/>
            </div>
        );
    }
}


SymptomDescription.propTypes = {
    registerSymptomDescription: PropTypes.func.isRequired,
    symptomDescriptionSuccessFullyRegistered: PropTypes.bool.isRequired,
    fetchAllSymptomDescription: PropTypes.func.isRequired,
    registeredSymptomDescription: PropTypes.arrayOf(PropTypes.object).isRequired,
    fetchAllSymptom: PropTypes.func.isRequired,
    registeredSymptom: PropTypes.arrayOf(PropTypes.object).isRequired,
};


const mapStateToProps = state => ({
    symptomDescriptionSuccessFullyRegistered: state.symptom_descriptions.symptomDescriptionSuccessFullyRegistered,
    registeredSymptomDescription: state.symptom_descriptions.registeredSymptomDescription,
    registeredSymptom: state.symptoms.registeredSymptom
});



const mapDispatchToProps = dispatch => ({
    registerSymptomDescription: payload => dispatch(registerSymptomDescription(payload)),
    fetchAllSymptomDescription: () => dispatch(fetchAllSymptomDescription()),
    fetchAllSymptom: () => dispatch(fetchAllSymptom())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SymptomDescription);