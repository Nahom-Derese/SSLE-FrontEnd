import "./Style/App.css";
import logo from "./assets/books-stack-of-three.svg";
import Form from "./Components/Form";
import Result from "./Components/Results";
import Footer from "./Components/Footer";
// import ParallaxComponents from "./Components/ParallaxComponents";
import Icon from "./assets/active-search.png";
import { ResultProvider } from "./Contexts/ResultContext";
import { useTransition, animated, config } from "react-spring";
import { useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import WhoAreYou from "./Components/WhoAreYou";

const errorLink = onError(({ graphqlErrors, networkErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql Erorors : ${message}`);
      return path;
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://ssle.herokuapp.com/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  const [Toggle, setToggle] = useState(false);
  const [Toggle_2, setToggle_2] = useState(false);
  const [Toggle_3, setToggle_3] = useState(false);

  const fade = useTransition(Toggle, {
    from: { left: -250 },
    enter: { left: 0 },
    leave: { left: -250 },
    config: config.slow,
  });

  const Visibility = {
    display: Toggle ? "flex" : "none",
  };

  return (
    <ApolloProvider client={client}>
      <ResultProvider>
        <div className="App">
          <nav>
            <div className="nav-bar">
              <div className="logo">
                <img
                  src={logo}
                  onMouseEnter={() => {
                    setToggle(!Toggle);
                  }}
                  onMouseLeave={() => {
                    setToggle(!Toggle);
                  }}
                  alt=""
                />
                <div className="SSLE" style={Visibility}>
                  {fade((style, item) =>
                    item ? (
                      <animated.span style={style}>
                        Secondary School Leaving Exam
                      </animated.span>
                    ) : (
                      ""
                    )
                  )}
                </div>

                <span>(SSLE)</span>
              </div>
              <div className="links">
                <button
                  onClick={() => {
                    setToggle_2(false);
                    setToggle_3(false);
                  }}
                >
                  <img src={Icon} /> Search
                </button>
                <a href="http://result.neaea.gov.et/"> Official Page </a>
                <a href="http://t.me/User_125"> Contact Me </a>
              </div>
            </div>
          </nav>

          <main className="main-container">
            <div className="Title">
            <h2 class="neon" data-text="U">Secondary<span class="flicker-slow">  S</span>chool  Leaving<span class="flicker-fast">  Ex</span>amination<span class="flicker-slow">  (SSLE)  </span>Resu<span class="flicker-fast">lts  <br />for  </span>Neway
                Cha<span class="flicker-fast">ll</span>enge  Acad<span class="flicker-slow">emy</span> Students</h2>
            </div>
            <div className="container">
              {!Toggle_2 && !Toggle_3 ? (
                <Form
                  Toggle_2={Toggle_2}
                  setToggle_2={setToggle_2}
                  Toggle_3={Toggle_3}
                  setToggle_3={setToggle_3}
                />
              ) : (
                <></>
              )}

              {/* <ParallaxComponents /> */}

              {Toggle_2 ? <Result /> : <></>}
              {Toggle_3 ? (
                <WhoAreYou
                  Toggle_2={Toggle_2}
                  setToggle_2={setToggle_2}
                  Toggle_3={Toggle_3}
                  setToggle_3={setToggle_3}
                />
              ) : (
                <></>
              )}
            </div>
            <Footer />
          </main>
        </div>
      </ResultProvider>
    </ApolloProvider>
  );
}

export default App;
