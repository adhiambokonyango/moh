import React, {Component} from 'react';

import { connect } from "react-redux";
import Modal from "react-awesome-modal";
import PropTypes from "prop-types";
import {fetchAllMythsDescription, registerMythsDescription} from "../../store/modules/myths_description/actions";
import Table from "../../components/table/table_body/Table";
import {reducer as myths_description} from "../../store/modules/myths_description";

class MythsDescription extends Component {

    state = {
        mythsDescription:'',

        tableData: [],
        tableHeaders: {
            MythsDescriptionId:'#',
            MythsDescription:'MythsDescription'

        }
    };


    componentDidMount() {
        this.props.fetchAllMythsDescription();
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
            MythsDescription:this.state.mythsDescription
        };

        this.props.registerMythsDescription(payload);
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
                <Modal
                    visible={this.props.mythsDescriptionSuccessFullyRegistered}
                    width="300"
                    height="300"
                    effect="fadeInUp"
                >
                    <p>mythsDescription Registered SuccessFully</p>
                </Modal>
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
};


const mapStateToProps = state => ({
    myDescriptionSuccessFullyRegistered: state.myths_description.myDescriptionSuccessFullyRegistered,
    registeredMythsDescription: state.myths_description.registeredMythsDescription
});



const mapDispatchToProps = dispatch => ({
    registerMythsDescription: payload => dispatch(registerMythsDescription(payload)),
    fetchAllMythsDescription: () => dispatch(fetchAllMythsDescription)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MythsDescription);