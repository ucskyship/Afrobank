import React, { Component } from 'react';
import { userLogin } from "../../services/authentication"
import {transactionHistory } from "../../services/transactions"
import { LoginForm} from "../forms"
import { Container } from "reactstrap"

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {error: "", formLoading: false}
    }

    componentDidMount = async () => {
        try {
            await transactionHistory(8139492091);
        } catch (error) {
            console.log(error.response)
        }
    }
    handleSubmit = async (value) => {
        this.setState({
            formLoading: true
        })
        try {
            const data = await userLogin(value)
            this.setState({
                error: ""
            })
        this.setState({
            formLoading: false
        })
            console.log(data)
        } catch (error) {
            this.setState({error: error.response.data.message || "An error occured", formLoading: false})
        }
    }
    render() {
        const { formLoading} = this.state
        return(
            <div style={{ background: "black" }}>
                {!!this.state.error && <p style={{color: 'red'}}>{this.state.error}</p>}
                {LoginForm(this.handleSubmit, formLoading)}
            </div>
        )
    }
}

export default HomePage;