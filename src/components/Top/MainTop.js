import TopSubRank from "components/Top/TopSubRank";
import React from "react";
import { Link, HashRouter as Router, Route, Switch, useParams } from "react-router-dom";
import "components/css/Top.css";

const MainTop = ({ webtoons }) => {
  return (
    <div className="main_container">
      <div className="top_preview">
        <div className="top_preview_form">
          <h2 className="top_title">전체 TOP 5</h2>
          <Link to="/top/subCategory=1000" style={{ textDecoration: "none", color: "#777676" }}>
            <h3 className="top_more">더보기</h3>
          </Link>
        </div>
        <div className="top_container">
          {webtoons.slice(0, 5).map((webtoon) => (
            <TopSubRank
              key={webtoon.series_id}
              url={webtoon.url}
              image={webtoon.image}
              title={webtoon.title}
              reader={webtoon.read_count}
            />
          ))}
        </div>
      </div>
      <hr color = "#bdbdbd" width="100%" size="2px" />
      <div className="top_preview">
        <div className="top_preview_form">
          <h2 className="top_title">소년 TOP 5</h2>
          <Link to="/top/subCategory=115" style={{ textDecoration: "none", color: "#777676" }}>
            <h3 className="top_more">더보기</h3>
          </Link>
        </div>
        <div className="top_container">
          {webtoons
            .filter((element) => element.sub_category === 115).slice(0, 5)
            .map((webtoon) => (
              <TopSubRank
                key={webtoon.series_id}
                url={webtoon.url}
                image={webtoon.image}
                title={webtoon.title}
                reader={webtoon.read_count}
              />
            ))
          }
        </div>
      </div>
      <hr color = "#bdbdbd" width="100%" size="2px" />
      <div className="top_preview">
        <div className="top_preview_form">
          <h2 className="top_title">드라마 TOP 5</h2>
          <h3 className="top_more">
            <Link to="/top/subCategory=116" style={{ textDecoration: "none", color: "#777676" }}>더보기</Link>
          </h3>
        </div>
        <div className="top_container">
          {webtoons
            .filter((element) => element.sub_category === 116).slice(0, 5)
            .map((webtoon) => (
              <TopSubRank
                key={webtoon.series_id}
                url={webtoon.url}
                image={webtoon.image}
                title={webtoon.title}
                reader={webtoon.read_count}
              />
            ))
          }
        </div>
      </div>
      <hr color = "#bdbdbd" width="100%" size="2px" />
      <div className="top_preview">
        <div className="top_preview_form">
          <h2 className="top_title">로맨스 TOP 5</h2>
          <h3 className="top_more">
            <Link to="/top/subCategory=121" style={{ textDecoration: "none", color: "#777676" }}>더보기</Link>
          </h3>
        </div>
        <div className="top_container">
          {webtoons
            .filter((element) => element.sub_category === 121).slice(0, 5)
            .map((webtoon) => (
              <TopSubRank
                key={webtoon.series_id}
                url={webtoon.url}
                image={webtoon.image}
                title={webtoon.title}
                reader={webtoon.read_count}
              />
            ))
          }
        </div>
      </div>
      <hr color = "#bdbdbd" width="100%" size="2px" />
      <div className="top_preview">
        <div className="top_preview_form">
          <h2 className="top_title">로판 TOP 5</h2>
          <h3 className="top_more">
            <Link to="/top/subCategory=69" style={{ textDecoration: "none", color: "#777676" }}>더보기</Link>
          </h3>
        </div>
        <div className="top_container">
          {webtoons
            .filter((element) => element.sub_category === 69).slice(0, 5)
            .map((webtoon) => (
              <TopSubRank
                key={webtoon.series_id}
                url={webtoon.url}
                image={webtoon.image}
                title={webtoon.title}
                reader={webtoon.read_count}
              />
            ))
          }
        </div>
      </div>
      <hr color = "#bdbdbd" width="100%" size="2px" />
      <div className="top_preview">
        <div className="top_preview_form">
          <h2 className="top_title">액션무협 Top 5</h2>
          <h3 className="top_more">
            <Link to="/top/subCategory=112" style={{ textDecoration: "none", color: "#777676" }}>더보기</Link>
          </h3>
        </div>
        <div className="top_container">
          {webtoons
            .filter((element) => element.sub_category === 112).slice(0, 5)
            .map((webtoon) => (
              <TopSubRank
                key={webtoon.series_id}
                url={webtoon.url}
                image={webtoon.image}
                title={webtoon.title}
                reader={webtoon.read_count}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default MainTop;