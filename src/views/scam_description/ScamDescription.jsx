import React, {Component} from 'react';

import { connect } from "react-redux";
import Modal from "react-awesome-modal";
import PropTypes from "prop-types";
import {fetchAllScamDescription, registerScamDescription} from "../../store/modules/scam_description/actions";
import Table from "../../components/table/table_body/Table";


class ScamDescription extends Component {

    state = {
        scamDescription:'',

        tableData: [],
        tableHeaders: {
            ScamDescriptionId:'#',
            ScamDescription:'ScamDescription'

        }
    };


    componentDidMount() {
        this.props.fetchAllScamDescription();
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
            ScamDescription:this.state.scamDescription
        };

        this.props.registerScamDescription(payload);
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
                <Modal
                    visible={this.props.scamDescriptionSuccessFullyRegistered}
                    width="300"
                    height="300"
                    effect="fadeInUp"
                >
                    <p>measureDescription Registered SuccessFully</p>
                </Modal>
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
};


const mapStateToProps = state => ({
    scamDescriptionSuccessFullyRegistered: state.scam_description.scamDescriptionSuccessFullyRegistered,
    registeredScamDescription: state.scam_description.registeredScamDescription
});



const mapDispatchToProps = dispatch => ({
    registerScamDescription: payload => dispatch(registerScamDescription(payload)),
    fetchAllScamDescription: () => dispatch(fetchAllScamDescription)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScamDescription);