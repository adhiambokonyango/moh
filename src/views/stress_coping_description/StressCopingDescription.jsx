import React, {Component} from 'react';

import { connect } from "react-redux";
import Modal from "react-awesome-modal";
import PropTypes from "prop-types";
import {fetchAllStressCopingDescription, registerStressCopingDescription} from "../../store/modules/stress_coping_description/actions";
import Table from "../../components/table/table_body/Table";
import {fetchAllStressCoping} from "../../store/modules/stress_coping/actions";
import Select from "react-select";


class StressCopingDescription extends Component {

    state = {
        stressCopingDescription:'',
        selectedOption: '',
        selectOptions: [],

        tableData: [],
        tableHeaders: {
            StressCopingDescriptionId:'#',
            StressCopingDescription:'StressCopingDescription'

        }
    };


    componentDidMount() {
        this.props.fetchAllStressCopingDescription();
        this.props.fetchAllStressCoping();
    }

    componentDidUpdate(prevProps) {
        if(this.props.registeredStressCoping !== prevProps.registeredStressCoping) {
            if(this.props.registeredStressCoping.length > 0) {
                let allregisteredStressCoping = this.props.registeredStressCoping;

                allregisteredStressCoping = allregisteredStressCoping.map(item => {
                    return {
                        label: item.StressCopingTitle,
                        value: item.StressCopingId
                    };
                });
                this.setState({ selectOptions: allregisteredStressCoping });
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
            StressCopingId:this.state.selectedOption.value,
            StressCopingDescription:this.state.stressCopingDescription
        };

        this.props.registerStressCopingDescription(payload);
        this.setState({stressCopingDescription:''});
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
    fetchAllStressCoping: PropTypes.func.isRequired,
    registeredStressCoping: PropTypes.arrayOf(PropTypes.object).isRequired,
};


const mapStateToProps = state => ({
    stressCopingDescriptionSuccessFullyRegistered: state.stress_coping_description.stressCopingDescriptionSuccessFullyRegistered,
    registeredStressCopingDescription: state.stress_coping_description.registeredStressCopingDescription,
    registeredStressCoping: state.stress_coping.registeredStressCoping
});



const mapDispatchToProps = dispatch => ({
    registerStressCopingDescription: payload => dispatch(registerStressCopingDescription(payload)),
    fetchAllStressCopingDescription: () => dispatch(fetchAllStressCopingDescription),
    fetchAllStressCoping: () => dispatch(fetchAllStressCoping())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StressCopingDescription);