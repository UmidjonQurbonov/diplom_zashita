import axios from 'axios'
import { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import err429 from './err429.png'


function App() {
    const cancelTokenSource = axios.CancelToken.source();
    const [result] = useState([])
    const [show, setShow] = useState(false)
    const [dis, setDis] = useState(true)
    const [errPageShow, setErrPageShow] = useState(false)
    const [dataPie, setDataPie] = useState({
        labels: ['Success', 'Error'],
        datasets: [
          {
            label: 'Count',
            data: [0, 0],
            backgroundColor: [
                '#28a745',
                '#dc3545',
            ],
          },
        ],
    })

    const options = {
        method: 'GET',
        url: 'https://covid-193.p.rapidapi.com/countries',
        headers: {
          'x-rapidapi-key': '3eafc1afccmsh898cb249f366fe3p162bcfjsn8db0eab2dcf7',
          'x-rapidapi-host': 'covid-193.p.rapidapi.com'
        },
        cancelToken: cancelTokenSource.token
    };

const showResult = () => {
    setDataPie({
        labels: ['Success', 'Error'],
        datasets: [
          {
            label: 'Count',
            data: [result.length, 250 - result.length],
            backgroundColor: [
                '#28a745',
                '#dc3545',
            ],
          },
        ],
        
    })
    setErrPageShow(false)
    setShow(true)

}
   
    const attackFunction = () => {
        for(let i = 1; i <= 250; i++){
            axios.request(options)
                .then((response) => {
                    result.push(response.data) 
                }).catch((err) => {
                    console.log("err", err.response)
                    cancelTokenSource.cancel();
                    setErrPageShow(true)
                    setDis(false)
            });
        }
    }

    
    return (
        <div className="App">
            <div className={"container"}>
                <div className={"jumbotron d-flex "}>
                    <div 
                        className={"d-flex flex-column pr-3 pt-2"} 
                        style={{
                            borderRight: '1px solid rgba(0,0,0, .1)'
                        }}
                    >
                        <button className={"btn btn-warning  mb-3"} onClick={attackFunction}>Boshlash (DoS)</button>
                        <button 
                            className={"btn btn-success"} 
                            onClick={showResult} 
                            disabled={dis}
                        >
                            Natijani ko'rish
                        </button>
                    </div>
                    <div 
                        className={"d-flex justify-content-between"}
                        style={{
                            flexGrow: 1
                        }}
                    >   
                        <div className={"pl-4"}>
                            <h5>All request: {!dis? 250 : 0}</h5>
                            <h5>Success request: {!dis? result.length : 0}</h5>
                            <h5>Failed: {!dis? 250 - result.length : 0}</h5>
                        </div>
                        <div
                            style={{
                                height: "450px",
                                width: "450px",
                            }}
                        >   
                                  
                            {errPageShow? (
                                <img src={err429} alt={""} />
                            ) : null}
                            {show ? <Pie data={dataPie} /> : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;