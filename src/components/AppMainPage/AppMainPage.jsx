import { useState } from "react";
import { Input } from "antd";
import search from "../../assets/images/search.png";
import filter from "../../assets/images/filter.png";
import home from "../../assets/images/Home.png";
import settings from "../../assets/images/settings.png";
import find from "../../assets/images/Find.png";
import message from "../../assets/images/message.png";

import "./AppMainPage.css";
function AppMainPage() {
  const [searchWords, setSearchWords] = useState("");
  const updateSearchWords = (e) => {
    setSearchWords(e.target.value);
  };
  let searchI = <img src={search} />;
  let filterI = <img src={filter} />;
  let homeI = <img src={home} />
  let settingsI = <img src={settings} />
  let findI = <img src={find} />
  let messageI = <img src={message} />
  return (
    <div>
      <div className="amt-wrapper">
        <div className="app-main-top">
          <div className="search-input-container">
            <Input
              status={''}
              prefix={searchI}
              suffix={filterI}
              value={searchWords}
              onChange={updateSearchWords}
              size="large"
              placeholder={"Type Something like 'Mechanic Near Me'"}
            />
          </div>
        </div>
      </div>

      <div style={{height : '1000px'}}>
      </div>

      <div className="amb-wrapper">
        <div className="app-main-bottom">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <div className="ambi-wrapper">
                  {homeI}
                </div>
              </div>
              <div className="col-3">
                <div className="ambi-wrapper">
                  {findI}
                </div>
              </div>
              <div className="col-3">
                <div className="ambi-wrapper">
                  {messageI}
                </div>
              </div>
              <div className="col-3">
                <div className="ambi-wrapper">
                  {settingsI}
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppMainPage;
