export default (prs) => (

    prs.data? 
    <div className="caja-info--viaje">
    <div className="row" style={{margin: '16px'}}>
        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 time-transfer">
            <div class="row">
            <div class="col-xs-12 ride-stations">

            <div class="dept-arr">
                <div class="ride-times">
                    <div class="departure">{ prs.data.hora_salida }</div>
                    <div class="arrival">{ prs.data.hora_llegada }</div>
                </div>
                <div class="ride-station-names">
                    <div class="ride-station-name">
                        <div class="station-name departure-station-name">{ prs.data.salida }</div>
                    </div>
                    <div class="ride-station-name">
                        <div class="station-name arrival-station-name">{ prs.data.llegada }</div>
                </div>
            </div>
            <div className="txt-small">
                <p>{ prs.data.date } | Coop: { prs.data.coop }</p>
            </div>
            
            {
                 prs.data.disponible ? 

            <div className="txt-disponible">
                <p>{ prs.data.st_disponibles } Asientos disponibles</p>
            </div>:
            <div className="txt-no-disponible">
                <p>Viaje realizado</p>
            </div>

            }
            
            
            </div>
            </div>
            </div>

        </div>
        
        <div class="col-xs-6 col-sm-6 col-md-5 col-lg-4">
            <div class="row">
                        <div class="col-12 duration"> { prs.data.duracion } h</div>
                        <div class="col-12 type"><span>Directo</span></div>
            </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-2 col-lg-3 price-actions">
        {
            prs.data.disponible ? 
            <button type="button" class="btn btn-success">Reservar</button>
            :
            <button type="button" class="btn btn-danger">No disponible</button>
        }
        </div>

    </div>
</div>:
<div>Error</div>
)