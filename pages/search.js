import React from 'react'
import Link from 'next/link'

import '../public/css/main.css'
import Caja from '../components/cajaInfo'
import Toolbar from '../components/toolbar'
import CenterBox from '../components/centerBox';

class DrawGrid extends React.Component {
    render() {
      return (
         <div className="container">
          <h2></h2>
          <table className="grid">
            <tbody>
                <div className="row bus">
                <div className="col-6"> 
                    <div className="conductor">
                        <p>Conductor</p>
                    </div>
                </div>
                <div className="col-6"></div>
                  { this.props.seat.map( row =>
                        
                        <div className={"col-3"
                        + ' ' + ((row.indexOf('1') > -1 || row.indexOf('2') > -1)? 'Izq':'Der')}>
                        <div
                        className={"asiento" 
                        + ' ' + (this.props.reservedOthers.indexOf(row) > -1? 'reservedOther': ( this.props.reserved.indexOf(row) > -1? 'reserved': 'available'))}
                        key={row} onClick = {e => this.onClickSeat(row)}>{row} 
                        </div>

                        </div>
                        
                    ) 
                }
                </div>
            </tbody>
          </table>
          <div style={{ height: '30px' }}></div>
          {/* <AvailableList available = { this.props.available } /> */}
          {/* <ReservedList reserved = { this.props.reserved } /> */}
         </div>
      )
    }
    onClickSeat(seat) {
        this.props.onClickData(seat);
      }
}

class AvailableList extends React.Component {
    render() {
      const seatCount = this.props.available.length;
      return(
        <div className="left">
          <h4>Available Seats: ({seatCount == 0? 'No seats available' : seatCount})</h4>
          <ul>
            {this.props.available.map( res => <li key={res} >{res}</li> )}
          </ul>
        </div>
      )
    }
  }
  
  class ReservedList extends React.Component {
    render() {
      return(
        <div className="right">
          <h4>Reserved Seats: ({this.props.reserved.length})</h4>
          <ul>
            { this.props.reserved.map(res => <li key={res} >{res}</li>) }
          </ul>
        </div>
      )
    }
  }

export default class Search extends React.Component{
    constructor() {
        super();
          this.state = {
            seat: [
                'F1','F2','F3', 'F4',
                'M1','M2','M3', 'M4',
                'B1','B2','B3', 'B4',
                'I1','I2','I3', 'I4',
                'C1','C2','C3', 'C4',
                'D1','D2','D3', 'D4',
                'E1','E2','E3', 'E4',
                'G1','G2','G3', 'G4',
                'H1','H2','H3', 'H4'
            ],
            seatAvailable: [
                'F1','F2','F3', 'F4',
                'M1','M2','M3', 'M4',
                'B1','B2','B3', 'B4',
                'I1','I2','I3', 'I4',
                'C1','C2','C3', 'C4',
                'D1','D2','D3', 'D4',
                'E1','E2','E3', 'E4',
                'G1','G2','G3', 'G4',
                'H1','H2','H3', 'H4'
            ],
            seatReserved: [
            ],
            seatReservedOthers: [
                'B2'
            ]
        }
      }
      
      onClickData(seat) {
          
          if(this.state.seatReservedOthers.indexOf(seat) > -1){
            console.log("Esta reservado")
          }else{
            console.log("No esta reservado")
            if(this.state.seatReserved.indexOf(seat) > -1 ) {
                this.setState({
                  seatAvailable: this.state.seatAvailable.concat(seat),
                  seatReserved: this.state.seatReserved.filter(res => res != seat)
                })
              } else {
                this.setState({
                  seatReserved: this.state.seatReserved.concat(seat),
                  seatAvailable: this.state.seatAvailable.filter(res => res != seat)
                })
              }
          }

      }

    render() {
        return (
            <div>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Cesta</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <p>Elige tus asientos favoritos</p>
                    
                    <DrawGrid 
                        seat = { this.state.seat }
                        available = { this.state.seatAvailable }
                        reserved = { this.state.seatReserved }
                        reservedOthers = { this.state.seatReservedOthers }
                        onClickData = { this.onClickData.bind(this) }
                        />
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Comprar</button>
                  </div>
                </div>
              </div>
            </div>
            
                    <Toolbar title={'EasyTrans'} class={'navColor navbar-dark'}/>
            
                    <div style={{ textAlign:"center", padding: '60px'}}>
                        <h1>Buscar</h1>
                        <p>Tienes 1 reserva</p>
                    </div>
            
                    <div className="container">
                        <div className="row">
                            <div className="col-8">
                                <CenterBox></CenterBox>
                           
                                <Caja/>
                                <Caja/>
                                <Caja/>
                                <Caja/>
                                <Caja/>
                                <Caja/>
                                <Caja/>
                                <Caja/>
                                <Caja/>
                                <Caja/>
                            </div>
                            <div className="col-4">
                                <div className="box" style={{ textAlign: "center"}}>
                                    <p>Cesta</p>
                                    <p>Tu total es:</p>
                                    <p>19.65$</p>
                                    <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#exampleModal">Comprar</button>
                                </div>
                            </div>
                         
                        </div>
                    </div>
            
                </div>
            
        )
    }

}

