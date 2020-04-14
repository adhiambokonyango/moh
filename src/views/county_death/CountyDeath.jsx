import React, {Component} from 'react';

import { connect } from "react-redux";
import Modal from "react-awesome-modal";
import PropTypes from "prop-types";
import {fetchAllCounty} from "../../store/modules/county/actions";
import Table from "../../components/table/table_body/Table";
import TopBar from "../../components/topbar/TopBar";
import Select from "react-select";
import {increaseCountyDeaths} from "../../store/modules/county_death/actions";

class CountyDeath extends Component {

    state = {
        countyDeath:0,
        selectedOption: '',
        selectOptions: [],

        tableData: [],
        tableHeaders: {
            CountyDeathId:'#',
            CountyDeath:'CountyDeath'

        }
    };


    componentDidMount() {
        this.props.fetchAllCounty();
    }

    componentDidUpdate(prevProps) {
        if(this.props.registeredCounty !== prevProps.registeredCounty) {
            if(this.props.registeredCounty.length > 0) {
                let allregisteredCounty = this.props.registeredCounty;

                allregisteredCounty = allregisteredCounty.map(item => {
                    return {
                        label: item.CountyTitle,
                        value: item.CountyId
                    };
                });
                this.setState({ AllCounty: allregisteredCounty });
            }
        }
    };



    handleChange = event => {
        let newState = this.state;
        newState[event.target.name] = event.target.value;
        this.setState({
            ...newState


        });

    };

    handleSubmit = (e) =>{


        const payload = {
            CountyId:this.state.selectedOption.value,
            CountyDeath:this.state.countyDeath,
        };
        this.props.increaseCountyDeaths(payload);
    };

    render() {
        return (
            <div>
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">

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
                                    <Select
                                        className="react-select"
                                        classNamePrefix="react-select"
                                        placeholder="Select Title"
                                        name="selectedOption"
                                        closeMenuOnSelect={true}
                                        value={this.state.selectedOption}
                                        onChange={value =>
                                            this.setState({
                                                ...this.state,
                                                selectedOption: value
                                            })
                                        }
                                        options={this.state.selectOptions}
                                    />
                                </div>

                            </fieldset>
                        </form>
                        <div>County Deaths-{this.state.countyDeath}</div>
                        <button onClick={() => this.handleSubmit()}>increment</button>

                    </div>
                </div>


            </div>
        );
    }
}


CountyDeath.propTypes = {
    increaseCountyDeaths: PropTypes.func.isRequired,
    countyDeathsSuccessFullyIncreased: PropTypes.bool.isRequired,
    fetchAllCounty: PropTypes.func.isRequired,
    registeredCounty: PropTypes.arrayOf(PropTypes.object).isRequired,
};


const mapStateToProps = state => ({
    countyDeathsSuccessFullyIncreased: state.county_death.countyDeathsSuccessFullyIncreased,
    registeredCounty: state.county.registeredCounty
});



const mapDispatchToProps = dispatch => ({
    increaseCountyDeaths: payload => dispatch(increaseCountyDeaths(payload)),
    fetchAllCounty: () => dispatch(fetchAllCounty())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CountyDeath);