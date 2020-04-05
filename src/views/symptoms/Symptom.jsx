import React, {Component} from 'react';

import { connect } from "react-redux";
import Modal from "react-awesome-modal";
import PropTypes from "prop-types";
import {fetchAllSymptom, registerSymptom} from "../../store/modules/symptoms/actions";
import Table from "../../components/table/table_body/Table";

class Symptom extends Component {

    state = {
        symptomsTitle:'',

        tableData: [],
        tableHeaders: {
            SymptomId:'#',
            SymptomTitle:'SymptomTitle'

        }
    };


    componentDidMount() {
        this.props.fetchAllSymptom();
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
            SymptomTitle:this.state.symptomsTitle
        };

        this.props.registerSymptom(payload);
        this.setState({symptomsTitle:''});
    };

    render() {
        return (
            <div>
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Register SymptomTitle</h3>
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
                                        name="symptomsTitle"
                                        className="form-control"
                                        placeholder="symptomsTitle"
                                        value={this.state.symptomsTitle}
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

                <Table tableTitle='Registered Measures'
                       tableHeaderObject={this.state.tableHeaders}
                       tableData={this.props.registeredSymptom}/>
            </div>
        );
    }
}


Symptom.propTypes = {
    registerSymptom: PropTypes.func.isRequired,
    symptomsSuccessFullyRegistered: PropTypes.bool.isRequired,
    fetchAllSymptom: PropTypes.func.isRequired,
    registeredSymptom: PropTypes.arrayOf(PropTypes.object).isRequired,
};


const mapStateToProps = state => ({
    symptomsSuccessFullyRegistered: state.symptoms.symptomsSuccessFullyRegistered,
    registeredSymptom: state.symptoms.registeredSymptom
});



const mapDispatchToProps = dispatch => ({
    registerSymptom: payload => dispatch(registerSymptom(payload)),
    fetchAllSymptom: () => dispatch(fetchAllSymptom())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Symptom);