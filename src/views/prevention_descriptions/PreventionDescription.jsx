import React, {Component} from 'react';

import { connect } from "react-redux";
import Modal from "react-awesome-modal";
import PropTypes from "prop-types";
import {fetchAllPreventionDescription, registerPreventionDescription} from "../../store/modules/prevention_descriptions/actions";
import Table from "../../components/table/table_body/Table";


class PreventionDescription extends Component {

    state = {
        preventionDescription:'',

        tableData: [],
        tableHeaders: {
            PreventionDescriptionId:'#',
            PreventionDescription:'PreventionDescription'

        }
    };


    componentDidMount() {
        this.props.fetchAllPreventionDescription();
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
            PreventionDescription:this.state.preventionDescription
        };

        this.props.registerPreventionDescription(payload);
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
                <Modal
                    visible={this.props.preventionDescriptionSuccessFullyRegistered}
                    width="300"
                    height="300"
                    effect="fadeInUp"
                >
                    <p>measureDescription Registered SuccessFully</p>
                </Modal>
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
};


const mapStateToProps = state => ({
    preventionDescriptionSuccessFullyRegistered: state.prevention_descriptions.preventionDescriptionSuccessFullyRegistered,
    registeredPreventionDescription: state.prevention_descriptions.registeredPreventionDescription
});



const mapDispatchToProps = dispatch => ({
    registerPreventionDescription: payload => dispatch(registerPreventionDescription(payload)),
    fetchAllPreventionDescription: () => dispatch(fetchAllPreventionDescription)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PreventionDescription);