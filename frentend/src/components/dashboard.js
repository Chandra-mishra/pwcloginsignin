import React, { Component } from "react";
import { Bar } from 'react-chartjs-2';
import {getChartApi} from '../Apiservice/Api'
  const options = {
    tooltips: {
      enabled: false,
    //   custom: CustomTooltips
    },
    maintainAspectRatio: false
  }
export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bar:{}
           
        }
    }
    componentDidMount(){
        this.getChartData()
    }
    getChartData(){
        getChartApi()
        .then((response) => {
            const chartData = response.data.data
            this.setState({
            bar : {labels: Object.keys(chartData),
               datasets: [
                {
                  label: 'Bar graph',
                  backgroundColor: 'rgba(255,99,132,0.2)',
                  borderColor: 'rgba(255,99,132,1)',
                  borderWidth: 1,
                  hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                  hoverBorderColor: 'rgba(255,99,132,1)',
                  data: Object.values(chartData),
                },
              ]
            } 
        })
            console.log("Response Chart: ", chartData);
        })
        .catch((e) => {
            console.error("Error Chart: ", e.response.data.message);
        });
    }

    render() {
        const {bar} = this.state
        return (
            <> <Bar data={bar} options={options} /></>
        );
    }
}
