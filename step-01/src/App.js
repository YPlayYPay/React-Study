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
        score:'1'
    },
    body:[
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
                <img src={this.props.data.mine.url} />
                <span style={{ position:'absolute' ,right: '2%' ,top: '2%'}}>{this.props.data.mine.name}</span>
                <span style={{ position:'absolute' ,right: '12%' ,bottom: '2%'}}>{this.props.data.mine.rank}</span>
            </div>
            <div className={styles.sfp}>
                <div >
                    {this.props.data.mine.win + '胜'}
                </div>
                <div >
                    {this.props.data.mine.fail + '负'}
                </div>
                <div >
                    {this.props.data.mine.ping + '平'}
                </div>
            </div>
            <div className={styles.textMineHeight}>
                {this.props.data.mine.score + '分'}
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
                                    <span style={{display:'inline-block',height: 32,width: 45, textAlign: 'center', lineHeight: '32px'}}>
                                        { result.rank }
                                    </span>
                                    <img src={result.url} style={{display:'inline-block' ,verticalAlign: 'middle'}}/>
                                    <span style={{position:'absolute'}}>
                                        {result.name}
                                    </span>
                                </div>
                                <div className={styles.sfp}>
                                    <div>
                                        {result.win + '胜'}
                                    </div>
                                    <div>
                                        {result.fail + '负' }
                                    </div>
                                    <div>
                                        {result.ping + '平' }
                                    </div>
                                </div>
                                <div className={styles.bodyitem}>
                                    {result.score + '分'}
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



