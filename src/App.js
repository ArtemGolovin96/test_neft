import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import { onChangeInputIhaveAction, getCurrencyAction } from "./redux/action";

class App extends Component {
  componentDidMount() {
    this.props.getCurrencyActionProps();
  }
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
              <p className="ihavep">У меня есть</p>
              <div className="valuta">
                <div className="valutenavigete">
                  <button className="valutbutton buttonv" id="valutbutton11">
                    RUB
                  </button>
                  <button className="valutbutton buttonv">USD</button>
                  <button className="valutbutton buttonv">EUR</button>
                  <button className="valutbutton buttonv">GBP</button>
                  <select className="valutbutton select">
                    <option className="option1">BYR</option>
                    <option className="option1">CHF</option>
                    <option className="option1">NOK</option>
                    <option className="option1">CAD</option>
                    <option className="option1">MXN</option>
                    <option className="option1">CNY</option>
                    <option className="option1">ISK</option>
                    <option className="option1">KRW</option>
                    <option className="option1">HKD</option>
                    <option className="option1">CZK</option>
                    <option className="option1">BGN</option>
                    <option className="option1">BRL</option>
                    <option className="option1">IDR</option>
                    <option className="option1">SGD</option>
                    <option className="option1">PHP</option>
                    <option className="option1">RON</option>
                    <option className="option1">HUF</option>
                    <option className="option1">ILS</option>
                    <option className="option1">THB</option>
                    <option className="option1">SEK</option>
                    <option className="option1">NZD</option>
                    <option className="option1">AUD</option>
                    <option className="option1">DKK</option>
                    <option className="option1">HRK</option>
                    <option className="option1">PLN</option>
                    <option className="option1">TRY</option>
                    <option className="option1">INR</option>
                    <option className="option1">MYR</option>
                    <option className="option1">ZAR</option>
                    <option className="option1">JPY</option>
                  </select>
                </div>
                <input
                  className="inputihave"
                  type="text"
                  onChange={(e) => this.props.onChangeInputIhaveActionProps(e)}
                ></input>
                <p className="inputp" id="inputp1">
                  1 RUB = 0.0135 USD
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
                  <button className="valutbutton buttonv2" id="valutbutton12">
                    RUB
                  </button>
                  <button className="valutbutton buttonv2">USD</button>
                  <button className="valutbutton buttonv2">EUR</button>
                  <button className="valutbutton buttonv2">GBP</button>
                  <select className="valutbutton select2">
                    <option className="option2">BYR</option>
                    <option className="option2">CHF</option>
                    <option className="option2">NOK</option>
                    <option className="option2">CAD</option>
                    <option className="option2">MXN</option>
                    <option className="option2">CNY</option>
                    <option className="option2">ISK</option>
                    <option className="option2">KRW</option>
                    <option className="option2">HKD</option>
                    <option className="option2">CZK</option>
                    <option className="option2">BGN</option>
                    <option className="option2">BRL</option>
                    <option className="option2">IDR</option>
                    <option className="option2">SGD</option>
                    <option className="option2">PHP</option>
                    <option className="option2">RON</option>
                    <option className="option2">HUF</option>
                    <option className="option2">ILS</option>
                    <option className="option2">THB</option>
                    <option className="option2">SEK</option>
                    <option className="option2">NZD</option>
                    <option className="option2">AUD</option>
                    <option className="option2">DKK</option>
                    <option className="option2">HRK</option>
                    <option className="option2">PLN</option>
                    <option className="option2">TRY</option>
                    <option className="option2">INR</option>
                    <option className="option2">MYR</option>
                    <option className="option2">ZAR</option>
                    <option className="option2">JPY</option>
                  </select>
                </div>
                <input
                  className="inputiwant"
                  type="text"
                  value={this.props.valueIwant}
                ></input>
                <p className="inputp" id="inputp2">
                  1 USD = 73.8896 RUB
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
    from: state.from,
    to: state.to,
    valueIwant: state.valueIwant,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeInputIhaveActionProps: (e) => {
      dispatch(onChangeInputIhaveAction(e.target.value));
    },
    onChangeInputIhaveActionProps: (e) => {
      dispatch(onChangeInputIhaveAction(e.target.value));
    },
    getCurrencyActionProps: () => {
      dispatch(getCurrencyAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
