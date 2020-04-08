import React, {Component} from 'react';

import { connect } from "react-redux";

import PropTypes from "prop-types";
import {fetchAllCounty, registerCounty} from "../../store/modules/county/actions";
import Table from "../../components/table/table_body/Table";


class County extends Component {

    state = {

        countyTitle:'',

        tableData: [],
        tableHeaders: {
            CountyId:'#',
            CountyTitle:'CountyTitle'

        }
    };


    componentDidMount() {
        this.props.fetchAllCounty();
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
            CountyTitle:this.state.countyTitle
        };

        this.props.registerCounty(payload);
        this.setState({countyTitle:''});
    };

    render() {
        return (
            <div>
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Register CountyTitle</h3>
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
                                        name="countyTitle"
                                        className="form-control"
                                        placeholder="countyTitle"
                                        value={this.state.countyTitle}
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

                <Table tableTitle='Registered childrenTips'
                       tableHeaderObject={this.state.tableHeaders}
                       tableData={this.props.registeredCounty}/>
            </div>
        );
    }
}


County.propTypes = {
    registerCounty: PropTypes.func.isRequired,
    countySuccessFullyRegistered: PropTypes.bool.isRequired,
    fetchAllCounty: PropTypes.func.isRequired,
    registeredCounty: PropTypes.arrayOf(PropTypes.object).isRequired,
};


const mapStateToProps = state => ({
    countySuccessFullyRegistered: state.county.countySuccessFullyRegistered,
    registeredCounty: state.county.registeredCounty
});



const mapDispatchToProps = dispatch => ({
    registerCounty: payload => dispatch(registerCounty(payload)),
    fetchAllCounty: () => dispatch(fetchAllCounty())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(County);