import React, {Component} from 'react';

import { connect } from "react-redux";
import Modal from "react-awesome-modal";
import PropTypes from "prop-types";
import {fetchAllStressCoping, registerStressCoping} from "../../store/modules/stress_coping/actions";
import Table from "../../components/table/table_body/Table";

class StressCoping extends Component {

    state = {
        stressTitle:'',

        tableData: [],
        tableHeaders: {
            StressCopingId:'#',
            StressCopingTitle:'measure'

        }
    };


    componentDidMount() {
        this.props.fetchAllStressCoping();
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
            StressCopingTitle:this.state.stressTitle
        };

        this.props.registerStressCoping(payload);
    };

    render() {
        return (
            <div>
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">registerStressCoping</h3>
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
                                        name="stressTitle"
                                        className="form-control"
                                        placeholder="stressTitle"
                                        value={this.state.stressTitle}
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
                    visible={this.props.stressCopingSuccessFullyRegistered}
                    width="300"
                    height="300"
                    effect="fadeInUp"
                >
                    <p>stressCopingSuccessFullyRegistered</p>
                </Modal>
                <Table tableTitle='registeredStressCoping'
                       tableHeaderObject={this.state.tableHeaders}
                       tableData={this.props.registeredStressCoping}/>
            </div>
        );
    }
}


StressCoping.propTypes = {
    registerStressCoping: PropTypes.func.isRequired,
    stressCopingSuccessFullyRegistered: PropTypes.bool.isRequired,
    fetchAllStressCoping: PropTypes.func.isRequired,
    registeredStressCoping: PropTypes.arrayOf(PropTypes.object).isRequired,
};


const mapStateToProps = state => ({
    stressCopingSuccessFullyRegistered: state.stress_coping.stressCopingSuccessFullyRegistered,
    registeredStressCoping: state.stress_coping.registeredStressCoping
});



const mapDispatchToProps = dispatch => ({
    registerStressCoping: payload => dispatch(registerStressCoping(payload)),
    fetchAllStressCoping: () => dispatch(fetchAllStressCoping)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StressCoping);