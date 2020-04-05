import React, {Component} from 'react';

import { connect } from "react-redux";
import Modal from "react-awesome-modal";
import PropTypes from "prop-types";
import {fetchAllPreventions, registerPreventions} from "../../store/modules/preventions/actions";
import Table from "../../components/table/table_body/Table";

class Prevention extends Component {

    state = {
        preventionTitle:'',

        tableData: [],
        tableHeaders: {
            PreventionId:'#',
            PreventionTitle:'Prevention'

        }
    };


    componentDidMount() {
        this.props.fetchAllPreventions();
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
            PreventionTitle:this.state.preventionTitle
        };

        this.props.registerPreventions(payload);
        this.setState({preventionTitle:''});
    };

    render() {
        return (
            <div>
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Register Preventions</h3>
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
                                        name="preventionTitle"
                                        className="form-control"
                                        placeholder="preventionTitle"
                                        value={this.state.preventionTitle}
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
                       tableData={this.props.registeredPreventions}/>
            </div>
        );
    }
}


Prevention.propTypes = {
    registerPreventions: PropTypes.func.isRequired,
    preventionsSuccessFullyRegistered: PropTypes.bool.isRequired,
    fetchAllPreventions: PropTypes.func.isRequired,
    registeredPreventions: PropTypes.arrayOf(PropTypes.object).isRequired,
};


const mapStateToProps = state => ({
    preventionsSuccessFullyRegistered: state.preventions.preventionsSuccessFullyRegistered,
    registeredPreventions: state.preventions.registeredPreventions
});



const mapDispatchToProps = dispatch => ({
    registerPreventions: payload => dispatch(registerPreventions(payload)),
    fetchAllPreventions: () => dispatch(fetchAllPreventions())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Prevention);