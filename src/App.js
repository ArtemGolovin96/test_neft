import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { connect } from "react-redux";
import {
  onChangeInputIhaveAction,
  getCurrAction,
  onChangeButtonAction,
  changeValueAction,
} from "./redux/action";

class App extends Component {
  componentDidMount() {
    this.props.getCurrActionProps();
  }
  componentWillUpdate() {
    if (this.props.selectedCurr !== "") {
      this.props.changeValueActionProps();
    }
  }

  onCLickCurrButton = (e) => {
    e.preventDefault();
    this.props.onChangeButtonActionProps(e);
  };

  onChange = (e) => {
    e.preventDefault();
    this.props.onChangeButtonActionProps(e);
  };

  render() {
    return (
      <main>
        <div className="header">
          <div className="logo">
            <img
              className="logo"
              src="https://img.icons8.com/plasticine/100/000000/currency-exchange.png"
            />
          </div>
          <button className="burger">МЕНЮ</button>
          <nav className="navigate">
            <p className="navp">БАНК</p>
            <p className="navp">БИЗНЕС</p>
            <p className="navp">ИНВЕСТИЦИИ</p>
            <p className="navp">СТРАХОВАНИЕ</p>
            <p className="navp">МОБАИЛ</p>
            <p className="navp">ПУТЕШЕСТВИЯ</p>
            <p className="navp">РАЗВЛЕЧЕНИЯ</p>
          </nav>
          <button className="vhod">
            <p className="voiti">ВОЙТИ</p>
          </button>
        </div>
        <section className="konverter">
          <h1 className="h1">Конвертер валют онлайн</h1>
          <section className="calc">
            <section className="ihave">
              <p className="ihavep">У меня есть рублей</p>
              <div className="valuta">
                <div className="valutenavigete">
                  <button className="valutbutton buttonRUB" id="valutbutton11">
                    RUB
                  </button>
                </div>
                <input
                  className="inputihave"
                  type="text"
                  onChange={(e) => this.props.onChangeInputIhaveActionProps(e)}
                ></input>
                <p className="inputp" id="inputp1">
                  {/* 1 RUB = {this.props.selectedCurrValue}{" "}
                  {this.props.selectedCurr} */}
                </p>
              </div>
            </section>
            <section className="buttonschange">
              <button className="changebutton">⇆</button>
            </section>
            <section className="iwant">
              <p className="ihavep">Хочу приобрести</p>
              <div className="valuta">
                <div className="valutenavigete">
                  <button
                    id="valutbutton12"
                    className="valutbutton buttonv2"
                    onClick={this.onCLickCurrButton}
                    value="USD"
                  >
                    USD
                  </button>
                  <button
                    className="valutbutton buttonv2"
                    onClick={this.onCLickCurrButton}
                    value="EUR"
                  >
                    EUR
                  </button>
                  <button
                    className="valutbutton buttonv2"
                    onClick={this.onCLickCurrButton}
                    value="GBP"
                  >
                    GBP
                  </button>
                  <select
                    className="valutbutton select2"
                    onChange={this.onChange}
                  >
                    <option className="option2" value="AMD">
                      AMD
                    </option>
                    <option className="option2" value="AUD">
                      AUD
                    </option>
                    <option className="option2" value="AZN">
                      AZN
                    </option>
                    <option className="option2" value="BGN">
                      BGN
                    </option>
                    <option className="option2" value="BRL">
                      BRL
                    </option>
                    <option className="option2" value="CNY">
                      CNY
                    </option>
                    <option className="option2" value="CZK">
                      CZK
                    </option>
                    <option className="option2" value="UAH">
                      UAH
                    </option>
                    <option className="option2" value="TRY">
                      TRY
                    </option>
                    <option className="option2" value="JPY">
                      JPY
                    </option>
                  </select>
                </div>
                <input
                  className="inputiwant"
                  type="text"
                  value={(
                    this.props.result * this.props.selectedCurrValue
                  ).toFixed(2)}
                ></input>
                <p className="inputp" id="inputp2">
                  1 {this.props.selectedCurr}: {this.props.selectedCurrValue}
                </p>
              </div>
            </section>
          </section>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedCurr: state.selectedCurr,
    allCurrObj: state.allCurrObj,
    selectedCurrValue: state.selectedCurrValue,
    result: state.result,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeInputIhaveActionProps: (e) => {
      dispatch(onChangeInputIhaveAction(e, e.target.value));
    },
    onChangeInputIhaveActionProps: (e) => {
      dispatch(onChangeInputIhaveAction(e, e.target.value));
    },
    getCurrActionProps: () => {
      dispatch(getCurrAction());
    },
    onChangeButtonActionProps: (e) => {
      dispatch(onChangeButtonAction(e.target.value));
    },
    changeValueActionProps: () => {
      dispatch(changeValueAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
