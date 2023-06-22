import React from "react";
import TimeSettingBlock from "./TimeSettingBlock";
import './Home.scss'

class Home extends React.Component {

    render() {
        return (
            // <div class="container-fluid">
            <>
                <div class="container-fluid" >
                    <div class="row justify-content-md-center" style={{backgroundColor:"black",color:"white"}}>
                        遠隔操作システム　時間設定
                    </div>
                </div>

                {/* <div class="container-fluid" style={{marginBottom:10}}>
                    <div class="row">
                        <h1 class="col-3  fw-bold" style={{ color:"#002060"}}>見取り図</h1>
                    </div>
                    <div class="row">
                        <div class="col-8">
                            <img src="./Exm.png" class="img-thumbnail" style={{ height:550,width:700}}/>
                        </div>
                    </div>
                </div> */}

                <div class="container-fluid" style={{marginBottom:10}}>
                    <div class="row">
                        <h1 class="col-3  fw-bold" style={{ color:"#002060"}}>時間設定</h1>
                    </div>

                    <div class="row justify-content-md-center">
                        {/* <button type="button" class="col col-lg-1 btn btn-primary btn-lg" style={{ backgroundColor:"#FFC0CB",color:"#FF3300",borderColor:"#FF3300"}}>一斉停止</button> */}
                        <input  class="col col-lg-1 fw-bold" type="button" value="一斉停止" style={{ backgroundColor:"#FFC0CB",color:"#FF3300",borderColor:"#FF3300",height:80,fontSize:25, marginRight:80}}/>
                        {/* <div class="col col-lg-1"></div> */}

                        <div class="col col-lg-1 d-flex align-items-end">
                            <input type="button" value="時間変更" style={{ backgroundColor:"#C8C8C8",height:40,width:500}}/>
                        </div>
                        
                        <label   class="col col-lg-2 d-flex align-items-end" >時間変更中/通常モード</label>

                        <div class="col-1 fw-bold"></div>
                    </div>
                    
                    
                </div>

                <div class="container-lg">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col" rowspan="2" style={{ backgroundColor:"#002060",color:"white",borderColor:"white"}}>No</th>
                                <th scope="col" rowspan="2" style={{ backgroundColor:"#002060",color:"white",borderColor:"white"}}>シャッター位置名称</th>
                                <th scope="col" rowspan="2" style={{ backgroundColor:"#002060",color:"#FFFF00",borderColor:"white"}}>個別停止ボタン</th>
                                <th scope="col" rowspan="2" style={{ backgroundColor:"#002060",color:"white",borderColor:"white"}}>開放ボタン</th>
                                <th scope="col" rowspan="2" style={{ backgroundColor:"#002060",color:"white",borderColor:"white"}}>状態</th>
                                <th scope="col" colSpan="2" style={{ backgroundColor:"#002060",color:"white",borderColor:"white"}}>開放時間設定1</th>
                                <th scope="col" colSpan="2" style={{ backgroundColor:"#002060",color:"white",borderColor:"white"}}>開放時間設定2</th>
                                <th scope="col" colSpan="2" style={{ backgroundColor:"#002060",color:"white",borderColor:"white"}}>開放時間設定3</th>
                                <th scope="col" rowspan="2" style={{ backgroundColor:"#002060",color:"white",borderColor:"white"}}>起動差</th>
                            </tr>
                            <tr>
                                <th scope="col" style={{ backgroundColor:"#E0FFFF",borderColor:"white"}}>ON/OFF</th>
                                <th scope="col" style={{ backgroundColor:"#E0FFFF",borderColor:"white"}}>設定時間</th>
                                <th scope="col" style={{ backgroundColor:"#E0FFFF",borderColor:"white"}}>ON/OFF</th>
                                <th scope="col" style={{ backgroundColor:"#E0FFFF",borderColor:"white"}}>設定時間</th>
                                <th scope="col" style={{ backgroundColor:"#E0FFFF",borderColor:"white"}}>ON/OFF</th>
                                <th scope="col" style={{ backgroundColor:"#E0FFFF",borderColor:"white"}}>設定時間</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th scope="row" style={{ backgroundColor:"#FFFACD"}}>A1</th>
                                <td rowspan="3" class="fw-bold" style={{ backgroundColor:"#FFFACD"}}>リーンレーベル周り</td>
                                {/* <td>
                                <div class="col col-lg-1 border" style={{backgroundColor:this.state.iBackgroundColor_default}}>
                                    <input type="button" value="停止" />
                                </div>
                            </td> */}
                                <TimeSettingBlock id="A1" />
                            </tr>
                            <tr>
                                <th scope="row" style={{ backgroundColor:"#FFFACD"}}>A2</th>
                                <TimeSettingBlock id="A2" />
                            </tr>
                            <tr>
                                <th scope="row" style={{ backgroundColor:"#FFFACD"}}>A3</th>
                                <TimeSettingBlock id="A3" />
                            </tr>
                            <tr>
                                <th scope="row" style={{ backgroundColor:"#90ee90"}}>B1</th>
                                <td rowspan="2" class="fw-bold" style={{ backgroundColor:"#90ee90"}}>ふっとデザイン～<br />いっぴんさん</td>
                                <TimeSettingBlock id="B1" />
                            </tr>
                            <tr>
                                <th scope="row" style={{ backgroundColor:"#90ee90"}}>B2</th>
                                <TimeSettingBlock id="B2" />
                            </tr>
                            <tr>
                                <th scope="row"  style={{ backgroundColor:"#90ee90"}}>B3</th>
                                <td rowspan="2" class="fw-bold" style={{ backgroundColor:"#90ee90"}}>中11階段<br />中12階段</td>
                                <TimeSettingBlock id="B3" />
                            </tr>
                            <tr>
                                <th scope="row"  style={{ backgroundColor:"#90ee90"}}>B4</th>
                                <TimeSettingBlock id="B4" />
                            </tr>
                            <tr>
                                <th scope="row"  style={{ backgroundColor:"#90ee90"}}>B5</th>
                                <td rowspan="2" class="fw-bold" style={{ backgroundColor:"#90ee90"}}>75～78周り</td>
                                <TimeSettingBlock id="B5" />
                            </tr>
                            <tr>
                                <th scope="row"  style={{ backgroundColor:"#90ee90"}}>B6</th>
                                <TimeSettingBlock id="B6" />
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>

        )
    }
}

export default Home;