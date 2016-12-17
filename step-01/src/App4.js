/**
 * Created by user2 on 2016-12-16.
 */
import React, { Component, PropTypes } from 'react';
import styles from "./App4.css";

let data={
    info:
        {
            url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2823673366,2283527722&fm=116&gp=0.jpg',
            name:'Leo',
            time:1,
            tone:10,
            jiandao:5,
            bu:3
        }

};

const Detail =()=>(
    <div className={styles.detail}>
      <header>
          <img src={data.info.url} />
          <div>{data.info.name}</div>
      </header>
      <div>
          平均思考时间:
      </div>
    <div>
        <div>
          石头:
        </div>
        <div>
          剪刀:
        </div>
        <div>
            布:
        </div>
        </div>
    </div>
);

export default Detail;