/**
 * Created by user2 on 2016-11-22.
 */
import React, { Component, PropTypes } from 'react';
import styles from "./Rank.css";

let data={
    err:{},
    mine:{
        url:'https://avatars.githubusercontent.com/u/4639625?v=3',
        name:'leossssssssssssssssss',
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
            name:'ssssssssssssssddddddddddddddddddddddd',
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


export default class Rank extends Component{
    render() {
        return <div className={styles.rank}>
            <Header />
            <Mine data={data}/>
            <Body data={data}/>
        </div>
    }
}


class Mine extends Component{
    render() {
        return <div className={styles.mine}>
            <div className={styles.info} >
                <img src={this.props.data.mine.url}/>
                <div style={{paddingTop: '1.2rem'}}>
                    <div style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',width:'3rem',marginBottom:'.8rem'}}>{this.props.data.mine.name}</div>
                    <div>{this.props.data.mine.rank}</div>
                </div>
            </div>
            <div className={styles.sfp}>
                <div>
                    <div>胜</div>
                    <span className={styles.fontStyle}> {this.props.data.mine.win }</span>
                </div>
                <div>
                    <div>负</div>
                    <span className={styles.fontStyle}> {this.props.data.mine.fail }</span>
                </div>
                {/*<div>*/}
                    {/*<div>平</div>*/}
                    {/*<span className={styles.fontStyle}> {this.props.data.mine.ping}</span>*/}
                {/*</div>*/}
            </div>
            <div className={styles.textMineHeight}>
                <div>分</div>
                {this.props.data.mine.score }
            </div>
        </div>
    }
}

class Body extends Component{
    render(){
        return <div  className={styles.wrap}>
            {
                this.props.data.body.map((result,i)=> {
                        return (
                            <div key={i} className={styles.body}>
                                <div className={ styles.bodyitemInfo }>
                                    <span style={{display:'inline-block',height: 32,width: 30, textAlign: 'center', lineHeight: '32px'}}>
                                        {result.rank}
                                    </span>
                                    <img src={result.url} style={{display:'inline-block' ,verticalAlign: 'middle'}}/>
                                    <span style={{position:'absolute',paddingTop: '0.5rem',fontSize: '1.2rem',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',width:'3rem'}}>
                                        {result.name}
                                    </span>
                                </div>
                                <div className={styles.sfpMine}>

                                        <div className={styles.fontStyle}>
                                            {result.win}
                                        </div>

                                        <div className={styles.fontStyle}>
                                            {result.fail}
                                        </div>
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
    }
}


class Header extends Component{
    render(){
        return <div className={styles.header}>
           超级排行榜
        </div>
    }
}



