import React, {Component} from 'react';

import { connect } from "react-redux";
import Modal from "react-awesome-modal";
import PropTypes from "prop-types";
import {fetchAllScamDescription, registerScamDescription} from "../../store/modules/scam_description/actions";
import Table from "../../components/table/table_body/Table";
import {fetchAllScam} from "../../store/modules/scams/actions";
import Select from "react-select";


class ScamDescription extends Component {

    state = {
        scamDescription:'',
        selectedOption: '',
        selectOptions: [],

        tableData: [],
        tableHeaders: {
            ScamDescriptionId:'#',
            ScamDescription:'ScamDescription'

        }
    };


    componentDidMount() {
        this.props.fetchAllScam();
        this.props.fetchAllScamDescription();
    }

    componentDidUpdate(prevProps) {
        if(this.props.registeredScam !== prevProps.registeredScam) {
            if(this.props.registeredScam.length > 0) {
                let allregisteredScam = this.props.registeredScam;

                allregisteredScam = allregisteredScam.map(item => {
                    return {
                        label: item.ScamTitle,
                        value: item.ScamId
                    };
                });
                this.setState({ selectOptions: allregisteredScam });
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
            ScamId:this.state.selectedOption.value,
            ScamDescription:this.state.scamDescription
        };

        this.props.registerScamDescription(payload);
        this.setState({scamDescription:''});
    };

    render() {
        return (
            <div>
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Register ScamDescription</h3>
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
                                        name="scamDescription"
                                        className="form-control"
                                        placeholder="scamDescription"
                                        value={this.state.scamDescription}
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
                       tableData={this.props.registeredScamDescription}/>
            </div>
        );
    }
}


ScamDescription.propTypes = {
    registerScamDescription: PropTypes.func.isRequired,
    scamDescriptionSuccessFullyRegistered: PropTypes.bool.isRequired,
    fetchAllScamDescription: PropTypes.func.isRequired,
    registeredScamDescription: PropTypes.arrayOf(PropTypes.object).isRequired,
    registeredScam: PropTypes.arrayOf(PropTypes.object).isRequired,
    fetchAllScam: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
    scamDescriptionSuccessFullyRegistered: state.scam_description.scamDescriptionSuccessFullyRegistered,
    registeredScamDescription: state.scam_description.registeredScamDescription,
    registeredScam: state.scams.registeredScam
});



const mapDispatchToProps = dispatch => ({
    registerScamDescription: payload => dispatch(registerScamDescription(payload)),
    fetchAllScamDescription: () => dispatch(fetchAllScamDescription()),
    fetchAllScam: () => dispatch(fetchAllScam())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScamDescription);