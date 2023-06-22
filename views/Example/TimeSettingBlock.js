import React from "react";
import ToggleSwitch from "./ToggleSwitch";
import "./TimeSettingBlock.scss";

class TimeSettingBlock extends React.Component {

    state = {
        onOffStatus_1: false,
        onOffStatus_2: false,
        onOffStatus_3: false,
        iBackgroundColor_1: "#dcdcdc",
        iBackgroundColor_2: "#dcdcdc",
        iBackgroundColor_3: "#dcdcdc",
        iBackgroundColor_default: "#ffffff"
    }

    handleOnOffOnChange_1 = (event) => {
        this.setState({
            onOffStatus_1: !this.state.onOffStatus_1,
            iBackgroundColor_1: (this.state.onOffStatus_1 === true) ? "#dcdcdc" : "#ffffff"
        })
    };

    handleOnOffOnChange_2 = (event) => {
        this.setState({
            onOffStatus_2: !this.state.onOffStatus_2,
            iBackgroundColor_2: (this.state.onOffStatus_2 === true) ? "#dcdcdc" : "#ffffff"
        })
    };

    handleOnOffOnChange_3 = (event) => {
        this.setState({
            onOffStatus_3: !this.state.onOffStatus_3,
            iBackgroundColor_3: (this.state.onOffStatus_3 === true) ? "#dcdcdc" : "#ffffff"
        })
    };

    render() {
        return (
            <>
                <td style={{ backgroundColor: this.state.iBackgroundColor_default }}>
                    {/* 個別停止ボタン*/}
                    {/* <div class="col col-lg-1 border" style={{backgroundColor:this.state.iBackgroundColor_default}}> */}
                    <input type="button" value="停止" />
                    {/* </div> */}
                </td>

                <td style={{ backgroundColor: this.state.iBackgroundColor_default }}>
                    {/* 開放ボタン*/}
                    {/* <div class="col col-lg-1 border" style={{backgroundColor:this.state.iBackgroundColor_default}}> */}
                    <input type="button" value="開放" />
                    {/* </div> */}
                </td>


                <td style={{ backgroundColor: this.state.iBackgroundColor_default }}>
                    {/* 状態 */}
                    {/* <div class="col col-lg-1 border d-flex align-items-center text-center" style={{backgroundColor:this.state.iBackgroundColor_default}}> */}
                    全開停止
                    {/* </div> */}
                </td>


                <td style={{ backgroundColor: this.state.iBackgroundColor_1 }}>
                    {/* 開放時間設定1 */}
                    {/* <div class="col col-lg-1 border" style={{backgroundColor:this.state.iBackgroundColor_1}}> */}
                    <ToggleSwitch className="time-on-off-toggle" id={"toggle-01-" + this.props.id}
                        checked={this.state.onOffStatus_1}
                        onChange={(event) => this.handleOnOffOnChange_1(event)}
                    />
                    {/* </div> */}
                </td>


                <td style={{ backgroundColor: this.state.iBackgroundColor_1 }}>
                    {/* <div class="col col-lg-1 border" style={{backgroundColor:this.state.iBackgroundColor_1}}> */}
                    <input className="input-textbox" id="time-hour-01" type="number" min="0" max="23"
                        disabled={!this.state.onOffStatus_1}
                    />
                    <label>時</label>
                    <input className="input-textbox" id="time-minute-01" type="number" min="0" max="59"
                        disabled={!this.state.onOffStatus_1}
                    />
                    <label>分</label>
                    {/* </div> */}
                </td>


                <td style={{ backgroundColor: this.state.iBackgroundColor_2 }}>
                    {/* 開放時間設定2 */}
                    {/* <div class="col col-lg-1 border" style={{backgroundColor:this.state.iBackgroundColor_2}}> */}
                    <ToggleSwitch className="time-on-off-toggle" id={"toggle-02-" + this.props.id}
                        checked={this.state.onOffStatus_2}
                        onChange={(event) => this.handleOnOffOnChange_2(event)}
                    />
                    {/* </div> */}
                </td>


                <td style={{ backgroundColor: this.state.iBackgroundColor_2 }}>
                    {/* <div class="col col-lg-1 border" style={{backgroundColor:this.state.iBackgroundColor_2}}> */}
                    <input className="input-textbox" id="time-hour-02" type="number" min="0" max="23"
                        disabled={!this.state.onOffStatus_2}
                    />
                    <label>時</label>
                    <input className="input-textbox" id="time-minute-02" type="number" min="0" max="59"
                        disabled={!this.state.onOffStatus_2}
                    />
                    <label>分</label>
                    {/* </div> */}
                </td>


                <td style={{ backgroundColor: this.state.iBackgroundColor_3 }}>
                    {/* 開放時間設定3 */}
                    {/* <div class="col col-lg-1 border" style={{backgroundColor:this.state.iBackgroundColor_3}}> */}
                    <ToggleSwitch className="time-on-off-toggle" id={"toggle-03-" + this.props.id}
                        checked={this.state.onOffStatus_3}
                        onChange={(event) => this.handleOnOffOnChange_3(event)}
                    />
                    {/* </div> */}
                </td>

                <td style={{ backgroundColor: this.state.iBackgroundColor_3 }}>
                    {/* <div class="col col-lg-1 border" style={{backgroundColor:this.state.iBackgroundColor_3}}> */}
                    <input className="input-textbox" id="time-hour-03" type="number" min="0" max="23"
                        disabled={!this.state.onOffStatus_3}
                    />
                    <label>時</label>
                    <input className="input-textbox" id="time-minute-03" type="number" min="0" max="59"
                        disabled={!this.state.onOffStatus_3}
                    />
                    <label>分</label>
                    {/* </div> */}
                </td>


                <td style={{ backgroundColor: this.state.iBackgroundColor_default }}>
                    {/* 起動差 */}
                    {/* <div class="col col-lg-1 border" style={{backgroundColor:this.state.iBackgroundColor_default}}> */}
                    <input className="input-textbox" id="time-hour-03" type="number" min="0" max="23" />
                    <label>秒</label>
                    {/* </div> */}
                </td>

            </>
        )
    }
}

export default TimeSettingBlock;
