import React, {Component} from 'react';

import { connect } from "react-redux";
import Modal from "react-awesome-modal";
import PropTypes from "prop-types";
import {fetchAllMyths, registerMyths} from "../../store/modules/myths/actions";
import Table from "../../components/table/table_body/Table";

class Myths extends Component {

    state = {
        mythsTitle:'',

        tableData: [],
        tableHeaders: {
            MythsId:'#',
            MythsTitle:'mythsTitle'

        }
    };


    componentDidMount() {
        this.props.fetchAllMyths();
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
            MythsTitle:this.state.mythsTitle
        };

        this.props.registerMyths(payload);
        this.setState({mythsTitle:''});
    };

    render() {
        return (
            <div>
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Register Myths</h3>
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
                                        name="mythsTitle"
                                        className="form-control"
                                        placeholder="mythsTitle"
                                        value={this.state.mythsTitle}
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
                       tableData={this.props.registeredMyths}/>
            </div>
        );
    }
}


Myths.propTypes = {
    registerMyths: PropTypes.func.isRequired,
    mythsSuccessFullyRegistered: PropTypes.bool.isRequired,
    fetchAllMyths: PropTypes.func.isRequired,
    registeredMyths: PropTypes.arrayOf(PropTypes.object).isRequired,
};


const mapStateToProps = state => ({
    mythsSuccessFullyRegistered: state.myths.mythsSuccessFullyRegistered,
    registeredMyths: state.myths.registeredMyths
});



const mapDispatchToProps = dispatch => ({
    registerMyths: payload => dispatch(registerMyths(payload)),
    fetchAllMyths: () => dispatch(fetchAllMyths())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Myths);