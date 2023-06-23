import React from "react";
import './Home.scss'
import TimeSettingBlock from "../../components/TimeSettingBlock/TimeSettingBlock";
class Home extends React.Component {

    render() {
        return (
            <>
            <nav class="fixed-top">
                <div class="container-fluid">
                    <div class="row justify-content-md-center">
                        遠隔操作システム 時間設定
                    </div>
                </div>
            </nav>

            <div class="base_container" data-spy="scroll" >
                <br/>
                <div class="area">
                    <div class="container-fluid">
                        <div class="row flex">
                            <h1 class="col-3  fw-bold screen_title">見取り図</h1>
                            <h1 class="col-8"> </h1>
                            <button class="btn btn-link col-1  fw-bold" type="button">ログアウト</button>
                            <h1 class="col-1"> </h1>
                        </div>
                        <div class="row flex">
                            <div class="col-9">
                                <img src="./Exm.png" alt="img-thumbnail"/>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="area">
                    <div class="container-fluid">
                        <div class="row flex">
                            <h1 class="col-3  fw-bold screen_title">時間設定</h1>
                        </div>

                        <div class="row justify-content-md-center flex">
                            <input  class="col col-lg-1 fw-bold all_stop_mode" type="button" value="一斉停止"/>
                            <div class="col col-lg-1 d-flex align-items-end">
                                <input type="button" value="時間変更" class="change_mode"/>
                            </div>
                            <label   class="col col-lg-2 d-flex align-items-end" >時間変更中/通常モード</label>
                            <div class="col-1 fw-bold"></div>
                        </div>
                    </div>

                    <div class="container-lg">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col" rowspan="2" class="title_default">No</th>
                                    <th scope="col" rowspan="2" class="title_default">シャッター位置名称</th>
                                    <th scope="col" rowspan="2" class="title_default" id="primary_stop_col">個別停止ボタン</th>
                                    <th scope="col" rowspan="2" class="title_default">開放ボタン</th>
                                    <th scope="col" rowspan="2" class="title_default">状態</th>
                                    <th scope="col" colSpan="2" class="title_default">開放時間設定1</th>
                                    <th scope="col" colSpan="2" class="title_default">開放時間設定2</th>
                                    <th scope="col" colSpan="2" class="title_default">開放時間設定3</th>
                                    <th scope="col" rowspan="2" class="title_default">起動差</th>
                                </tr>
                                <tr>
                                    <th scope="col" class="title_onoff">ON/OFF</th>
                                    <th scope="col" class="title_onoff">設定時間</th>
                                    <th scope="col" class="title_onoff">ON/OFF</th>
                                    <th scope="col" class="title_onoff">設定時間</th>
                                    <th scope="col" class="title_onoff">ON/OFF</th>
                                    <th scope="col" class="title_onoff">設定時間</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <th scope="row" class="title_A_type">A1</th>
                                    <td rowspan="3" class="fw-bold title_A_type">リーンレーベル周り</td>
                                    <TimeSettingBlock id="A1" />
                                </tr>
                                <tr>
                                    <th scope="row" class="title_A_type">A2</th>
                                    <TimeSettingBlock id="A2" />
                                </tr>
                                <tr>
                                    <th scope="row" class="title_A_type">A3</th>
                                    <TimeSettingBlock id="A3" />
                                </tr>
                                <tr>
                                    <th scope="row" class="title_B_type">B1</th>
                                    <td rowspan="2" class="fw-bold title_B_type">ふっとデザイン～<br />いっぴんさん</td>
                                    <TimeSettingBlock id="B1" />
                                </tr>
                                <tr>
                                    <th scope="row" class="title_B_type">B2</th>
                                    <TimeSettingBlock id="B2" />
                                </tr>
                                <tr>
                                    <th scope="row"  class="title_B_type">B3</th>
                                    <td rowspan="2" class="fw-bold title_B_type">中11階段<br />中12階段</td>
                                    <TimeSettingBlock id="B3" />
                                </tr>
                                <tr>
                                    <th scope="row"  class="title_B_type">B4</th>
                                    <TimeSettingBlock id="B4" />
                                </tr>
                                <tr>
                                    <th scope="row"  class="title_B_type">B5</th>
                                    <td rowspan="2" class="fw-bold title_B_type">75～78周り</td>
                                    <TimeSettingBlock id="B5" />
                                </tr>
                                <tr>
                                    <th scope="row"  class="title_B_type">B6</th>
                                    <TimeSettingBlock id="B6" />
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>

        )
    }
}

export default Home;