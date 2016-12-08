/**
 * Created by user2 on 2016-11-22.
 */
import React, { Component, PropTypes } from 'react';
import styles from "./Rank.css";

let data={
    err:{},
    mine:{
        url:'https://avatars.githubusercontent.com/u/4639625?v=3',
        name:'leo',
        rank:'1',
        win:'10',
        fail:'5',
        ping:'2',
        score:'12121'
    },
    body:[
        {
            url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2823673366,2283527722&fm=116&gp=0.jpg',
            name:'mj',
            rank:'2',
            win:'3',
            fail:'5',
            ping:'8',
            score:'77515'
        },
        {
            url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2823673366,2283527722&fm=116&gp=0.jpg',
            name:'ssssss',
            rank:'2',
            win:'3',
            fail:'5',
            ping:'8',
            score:'77'
        },
        {
            url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2823673366,2283527722&fm=116&gp=0.jpg',
            name:'mj',
            rank:'2',
            win:'3',
            fail:'5',
            ping:'8',
            score:'77'
        },
        {
            url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2823673366,2283527722&fm=116&gp=0.jpg',
            name:'mj',
            rank:'2',
            win:'3',
            fail:'5',
            ping:'8',
            score:'77'
        },
        {
            url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2823673366,2283527722&fm=116&gp=0.jpg',
            name:'mj',
            rank:'2',
            win:'3',
            fail:'5',
            ping:'8',
            score:'77'
        },
        {
            url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2823673366,2283527722&fm=116&gp=0.jpg',
            name:'mj',
            rank:'2',
            win:'3',
            fail:'5',
            ping:'8',
            score:'77'
        },
        {
            url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2823673366,2283527722&fm=116&gp=0.jpg',
            name:'mj',
            rank:'2',
            win:'3',
            fail:'5',
            ping:'8',
            score:'77'
        },
        {
            url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2823673366,2283527722&fm=116&gp=0.jpg',
            name:'无间道地狱火神罗天正阿丽玛西他',
            rank:'2',
            win:'3',
            fail:'5',
            ping:'8',
            score:'77'
        },
        {
            url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2823673366,2283527722&fm=116&gp=0.jpg',
            name:'mj',
            rank:'2',
            win:'312',
            fail:'512',
            ping:'8',
            score:'77'
        },
        {
            url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2823673366,2283527722&fm=116&gp=0.jpg',
            name:'mj',
            rank:'2',
            win:'3',
            fail:'5',
            ping:'8',
            score:'77'
        },

    ]

};


const Rank =()=>(
    <div className={styles.rank}>
        <div className={styles.header}>
            超级排行榜
        </div>
        <Mine data={data}/>
        <Body data={data}/>
    </div>
);

const Mine =({data})=>(
    <div className={styles.mine}>
        <div className={styles.info} >
            <img src={data.mine.url}/>
            <div style={{paddingTop: '1.2rem'}}>
                <div style={{maxWidth: '120px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{data.mine.name}</div>
                <div>{data.mine.rank}</div>
            </div>
        </div>
        <div className={styles.textMineHeight}>
            <div style={{fontSize:'1.4rem'}}>分数</div>
            {data.mine.score}
        </div>
    </div>
);

const Body =({data})=>(
    <div  className={styles.wrap}>
        {
            data.body.map((result,i)=> {
                    return (
                        <div key={i} className={styles.body}>
                            <div className={ styles.bodyitemInfo }>
                                    <span style={{display:'inline-block',height: 32,width: 30, textAlign: 'center', lineHeight: '32px'}}>
                                        {result.rank}
                                    </span>
                                <img src={result.url} style={{display:'inline-block' ,verticalAlign: 'middle'}}/>
                                <span style={{maxWidth: '120px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',display:'inline-block',verticalAlign:'middle'}}>
                                        {result.name}
                                </span>
                            </div>
                            <div className={styles.bodyitem + ' ' + styles.fontStyle}>
                                {result.score }
                            </div>
                        </div>
                    )
                }
            )
        }
    </div>
);


export default Rank