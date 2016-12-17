/**
 * Created by user2 on 2016-12-14.
 */
import React, { Component, PropTypes } from 'react';
import styles from "./App3.css";

let data={
    err:{},
    people:100,
    body:[
        {
            url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2823673366,2283527722&fm=116&gp=0.jpg',
            name:'mj',
            rank:'2',
            tone:'3',
            jian:'5',
            bu:'8',
            score:'77515'
        },
        {
            url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2823673366,2283527722&fm=116&gp=0.jpg',
            name:'ssssss',
            rank:'2',
            tone:'3',
            jian:'5',
            bu:'8',
            score:'77'
        },
        {
            url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2823673366,2283527722&fm=116&gp=0.jpg',
            name:'mj',
            rank:'2',
            tone:'3',
            jian:'5',
            bu:'8',
            score:'77'
        },
        {
            url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2823673366,2283527722&fm=116&gp=0.jpg',
            name:'mj',
            rank:'2',
            tone:'3',
            jian:'5',
            bu:'8',
            score:'77'
        },
        {
            url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2823673366,2283527722&fm=116&gp=0.jpg',
            name:'mj',
            rank:'2',
            tone:'3',
            jian:'5',
            bu:'8',
            score:'77'
        },
        {
            url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2823673366,2283527722&fm=116&gp=0.jpg',
            name:'mj',
            rank:'2',
            tone:'3',
            jian:'5',
            bu:'8',
            score:'77'
        },
        {
            url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2823673366,2283527722&fm=116&gp=0.jpg',
            name:'mj',
            rank:'2',
            tone:'3',
            jian:'5',
            bu:'8',
            score:'77'
        },
        {
            url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2823673366,2283527722&fm=116&gp=0.jpg',
            name:'无间道地狱火神罗天正阿丽玛西他',
            rank:'2',
            tone:'3',
            jian:'5',
            bu:'8',
            score:'77'
        },
        {
            url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2823673366,2283527722&fm=116&gp=0.jpg',
            name:'mj',
            rank:'2',
            tone:'312',
            jian:'512',
            bu:'8',
            score:'77'
        },
        {
            url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2823673366,2283527722&fm=116&gp=0.jpg',
            name:'mj',
            rank:'2',
            tone:'3',
            jian:'5',
            bu:'8',
            score:'77'
        },

    ]

};

const Table=()=>(
    <div>
        <div className={styles.head}>
            总人数:{data.people}
        </div>
        <div className={styles.title}>
            <div style={{flexBasis:'131px'}}></div>
            <div>石头</div>
            <div>剪刀</div>
            <div>布</div>
            <div>总分</div>
        </div>
            {
                data.body.map((item)=>{
                    return(
                        <div className={styles.main}>
                            <div className={styles.info}>
                                <span >
                                    {item.rank}
                                </span>
                                <img src={item.url} />
                            </div>
                            <div style={{maxWidth: '120px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',display:'inline-block',verticalAlign:'middle',textAlign:'left',lineHeight:'54px',marginLeft:'10px'}}>
                                {item.name}
                            </div>
                            <div>
                                {item.tone}
                            </div>
                            <div>
                                {item.jian}
                            </div>
                            <div>
                                {item.bu}
                            </div>
                            <div>
                                {item.score}
                            </div>
                        </div>
                    )
                })
            }
        </div>
);

export default Table