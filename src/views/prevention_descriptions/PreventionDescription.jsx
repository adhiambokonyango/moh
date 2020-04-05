import React, {Component} from 'react';

import { connect } from "react-redux";
import Modal from "react-awesome-modal";
import PropTypes from "prop-types";
import {fetchAllPreventionDescription, registerPreventionDescription} from "../../store/modules/prevention_descriptions/actions";
import Table from "../../components/table/table_body/Table";
import {fetchAllPreventions} from "../../store/modules/preventions/actions";
import Select from "react-select";
import {fetchAllChildrenTips} from "../../store/modules/children_tips/actions";


class PreventionDescription extends Component {

    state = {
        preventionDescription:'',
        selectedOption: '',
        selectOptions: [],

        tableData: [],
        tableHeaders: {
            PreventionDescriptionId:'#',
            PreventionDescription:'PreventionDescription'

        }
    };


    componentDidMount() {
        this.props.fetchAllPreventions();
        this.props.fetchAllPreventionDescription();
    }

    componentDidUpdate(prevProps) {
        if(this.props.registeredPreventions !== prevProps.registeredPreventions) {
            if(this.props.registeredPreventions.length > 0) {
                let allregisteredPreventions = this.props.registeredPreventions;

                allregisteredPreventions = allregisteredPreventions.map(item => {
                    return {
                        label: item.PreventionTitle,
                        value: item.PreventionId
                    };
                });
                this.setState({ selectOptions: allregisteredPreventions });
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
            PreventionId:this.state.selectedOption.value,
            PreventionDescription:this.state.preventionDescription
        };

        this.props.registerPreventionDescription(payload);
        this.setState({preventionDescription:''});
    };

    render() {
        return (
            <div>
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Register PreventionDescription</h3>
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
                                        name="preventionDescription"
                                        className="form-control"
                                        placeholder="preventionDescription"
                                        value={this.state.preventionDescription}
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
                       tableData={this.props.registeredPreventionDescription}/>
            </div>
        );
    }
}


PreventionDescription.propTypes = {
    registerPreventionDescription: PropTypes.func.isRequired,
    preventionDescriptionSuccessFullyRegistered: PropTypes.bool.isRequired,
    fetchAllPreventionDescription: PropTypes.func.isRequired,
    registeredPreventionDescription: PropTypes.arrayOf(PropTypes.object).isRequired,
    registeredPreventions: PropTypes.arrayOf(PropTypes.object).isRequired,
    fetchAllPreventions: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
    preventionDescriptionSuccessFullyRegistered: state.prevention_descriptions.preventionDescriptionSuccessFullyRegistered,
    registeredPreventionDescription: state.prevention_descriptions.registeredPreventionDescription,
    registeredPreventions: state.preventions.registeredPreventions
});



const mapDispatchToProps = dispatch => ({
    registerPreventionDescription: payload => dispatch(registerPreventionDescription(payload)),
    fetchAllPreventionDescription: () => dispatch(fetchAllPreventionDescription()),
    fetchAllPreventions: () => dispatch(fetchAllPreventions())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PreventionDescription);