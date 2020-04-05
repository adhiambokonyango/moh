import React, {Component} from 'react';

import { connect } from "react-redux";
import Modal from "react-awesome-modal";
import PropTypes from "prop-types";
import {fetchAllSymptomDescription, registerSymptomDescription} from "../../store/modules/symptom_descriptions/actions";
import Table from "../../components/table/table_body/Table";


class SymptomDescription extends Component {

    state = {
        symptomDescription:'',

        tableData: [],
        tableHeaders: {
            SymptomDescriptionId:'#',
            SymptomDescription:'SymptomDescription'

        }
    };


    componentDidMount() {
        this.props.fetchAllSymptomDescription();
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
            SymptomDescription:this.state.symptomDescription
        };

        this.props.registerSymptomDescription(payload);
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
                <Modal
                    visible={this.props.symptomDescriptionSuccessFullyRegistered}
                    width="300"
                    height="300"
                    effect="fadeInUp"
                >
                    <p>SymptomDescription Registered SuccessFully</p>
                </Modal>
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
};


const mapStateToProps = state => ({
    symptomDescriptionSuccessFullyRegistered: state.symptom_descriptions.symptomDescriptionSuccessFullyRegistered,
    registeredSymptomDescription: state.symptom_descriptions.registeredSymptomDescription
});



const mapDispatchToProps = dispatch => ({
    registerSymptomDescription: payload => dispatch(registerSymptomDescription(payload)),
    fetchAllSymptomDescription: () => dispatch(fetchAllSymptomDescription)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SymptomDescription);