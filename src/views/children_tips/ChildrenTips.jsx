import React, {Component} from 'react';

import { connect } from "react-redux";
import Modal from "react-awesome-modal";
import PropTypes from "prop-types";
import {fetchAllChildrenTips, registerChildrenTips} from "../../store/modules/children_tips/actions";
import Table from "../../components/table/table_body/Table";
import TopBar from "../../components/topbar/TopBar";

class ChildrenTips extends Component {

    state = {
        childrenTipsTitle:'',

        tableData: [],
        tableHeaders: {
            ChildrenTipsId:'#',
            ChildrenTipsTitle:'ChildrenTipsTitle'
            
        }
    };


    componentDidMount() {
        this.props.fetchAllChildrenTips();
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
            ChildrenTipsTitle:this.state.childrenTipsTitle
        };

        this.props.registerChildrenTips(payload);
        this.setState({childrenTipsTitle:''});
    };

    render() {
        return (
            <div>
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Register ChildrenTips</h3>
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
                                        name="childrenTipsTitle"
                                        className="form-control"
                                        placeholder="childrenTipsTitle"
                                        value={this.state.childrenTipsTitle}
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
                       tableData={this.props.registeredChildrenTips}/>
            </div>
        );
    }
}


ChildrenTips.propTypes = {
    registerChildrenTips: PropTypes.func.isRequired,
    childrenTipsSuccessFullyRegistered: PropTypes.bool.isRequired,
    fetchAllChildrenTips: PropTypes.func.isRequired,
    registeredChildrenTips: PropTypes.arrayOf(PropTypes.object).isRequired,
};


const mapStateToProps = state => ({
    childrenTipsSuccessFullyRegistered: state.children_tips.childrenTipsSuccessFullyRegistered,
    registeredChildrenTips: state.children_tips.registeredChildrenTips
});



const mapDispatchToProps = dispatch => ({
    registerChildrenTips: payload => dispatch(registerChildrenTips(payload)),
    fetchAllChildrenTips: () => dispatch(fetchAllChildrenTips())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChildrenTips);