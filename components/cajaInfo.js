export default () => (
    <div className="caja-info--viaje">
    <div className="row" style={{margin: '16px'}}>
        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 time-transfer">
            <div class="row">
            <div class="col-xs-12 ride-stations">

            <div class="dept-arr">
                <div class="ride-times">
                    <div class="departure">23:35</div>
                    <div class="arrival">06:45</div>
                </div>
                <div class="ride-station-names">
                    <div class="ride-station-name">
                        <div class="station-name departure-station-name">Madrid</div>
                    </div>
                    <div class="ride-station-name">
                        <div class="station-name arrival-station-name">Lisboa (Oriente)</div>
                </div>
            </div>
            <div className="txt-disponible">
                <p>8 Asientos disponibles</p>
            </div>
            
            </div>
            </div>
            </div>

        </div>
        
        <div class="col-xs-6 col-sm-6 col-md-5 col-lg-4">
            <div class="row">
                        <div class="col-12 duration"> 8:10 h</div>
                        <div class="col-12 type"><span>Directo</span></div>
            </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-2 col-lg-3 price-actions">
            <button type="button" class="btn btn-success">Success</button>
        </div>

    </div>
</div>
)