import React, {Component} from 'react';

import { connect } from "react-redux";
import Modal from "react-awesome-modal";
import PropTypes from "prop-types";
import {fetchAllScam, registerScam} from "../../store/modules/scams/actions";
import Table from "../../components/table/table_body/Table";
import {reducer as scams} from "../../store/modules/scams";

class Scam extends Component {

    state = {
        scamTitle:'',

        tableData: [],
        tableHeaders: {
            ScamId:'#',
            ScamTitle:'Scam'

        }
    };


    componentDidMount() {
        this.props.fetchAllScam();
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
            ScamTitle:this.state.scamTitle
        };

        this.props.registerScam(payload);
    };

    render() {
        return (
            <div>
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">registerScam</h3>
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
                                        name="scamTitle"
                                        className="form-control"
                                        placeholder="scamTitle"
                                        value={this.state.scamTitle}
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
                    visible={this.props.scamsSuccessFullyRegistered}
                    width="300"
                    height="300"
                    effect="fadeInUp"
                >
                    <p>Measures Registered SuccessFully</p>
                </Modal>
                <Table tableTitle='Registered Measures'
                       tableHeaderObject={this.state.tableHeaders}
                       tableData={this.props.registeredScam}/>
            </div>
        );
    }
}


Scam.propTypes = {
    registerScam: PropTypes.func.isRequired,
    scamsSuccessFullyRegistered: PropTypes.bool.isRequired,
    fetchAllScam: PropTypes.func.isRequired,
    registeredScam: PropTypes.arrayOf(PropTypes.object).isRequired,
};


const mapStateToProps = state => ({
    scamsSuccessFullyRegistered: state.scams.scamsSuccessFullyRegistered,
    registeredScam: state.scams.registeredScam
});



const mapDispatchToProps = dispatch => ({
    registerScam: payload => dispatch(registerScam(payload)),
    fetchAllScam: () => dispatch(fetchAllScam)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Scam);