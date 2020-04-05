import React, {Component} from 'react';
import { connect } from "react-redux";

import PropTypes from "prop-types";
import {fetchAllMythsDescription, registerMythsDescription} from "../../store/modules/myths_description/actions";
import Table from "../../components/table/table_body/Table";
import {fetchAllMyths} from "../../store/modules/myths/actions";
import Select from "react-select";


class MythsDescription extends Component {

    state = {
        mythsDescription:'',
        selectedOption: '',
        selectOptions: [],

        tableData: [],
        tableHeaders: {
            MythsDescriptionId:'#',
            MythsDescription:'MythsDescription'

        }
    };


    componentDidMount() {
        this.props.fetchAllMythsDescription();
        this.props.fetchAllMyths();
    }

    componentDidUpdate(prevProps) {
        if(this.props.registeredMyths !== prevProps.registeredMyths) {
            if(this.props.registeredMyths.length > 0) {
                let allregisteredMyths = this.props.registeredMyths;

                allregisteredMyths = allregisteredMyths.map(item => {
                    return {
                        label: item.MythsTitle,
                        value: item.MythsId
                    };
                });
                this.setState({ selectOptions: allregisteredMyths });
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
            MythsId:this.state.selectedOption.value,
            MythsDescription:this.state.mythsDescription
        };

        this.props.registerMythsDescription(payload);
        this.setState({mythsDescription:''});
    };

    render() {
        return (
            <div>
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Register MythsDescription</h3>
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
                                        name="mythsDescription"
                                        className="form-control"
                                        placeholder="mythsDescription"
                                        value={this.state.mythsDescription}
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

                <Table tableTitle='Registered myths'
                       tableHeaderObject={this.state.tableHeaders}
                       tableData={this.props.registeredMythsDescription}/>
            </div>
        );
    }
}


MythsDescription.propTypes = {
    registerMythsDescription: PropTypes.func.isRequired,
    mythsDescriptionSuccessFullyRegistered: PropTypes.bool.isRequired,
    fetchAllMythsDescription: PropTypes.func.isRequired,
    registeredMythsDescription: PropTypes.arrayOf(PropTypes.object).isRequired,
    fetchAllMyths: PropTypes.func.isRequired,
    registeredMyths: PropTypes.arrayOf(PropTypes.object).isRequired,
};


const mapStateToProps = state => ({
    myDescriptionSuccessFullyRegistered: state.myths_description.myDescriptionSuccessFullyRegistered,
    registeredMythsDescription: state.myths_description.registeredMythsDescription,
    registeredMyths: state.myths.registeredMyths
});



const mapDispatchToProps = dispatch => ({
    registerMythsDescription: payload => dispatch(registerMythsDescription(payload)),
    fetchAllMythsDescription: () => dispatch(fetchAllMythsDescription()),
    fetchAllMyths: () => dispatch(fetchAllMyths())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MythsDescription);