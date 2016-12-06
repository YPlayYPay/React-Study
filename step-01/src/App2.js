/**
 * Created by user2 on 2016-11-22.
 */
import React, { Component, PropTypes } from 'react';
import styles from "./fight.css";

const Fight=()=>(
    <div className={styles.fight}>
            <Header />
            <Other />
            <Result />
            <Self />
    </div>
);

const Header = ()=> {
        return (
            <div className={styles.header}>
                <span>&lt;</span>
                博弈游戏
            </div>
        )
    }


const Other =()=>(
    <div className={styles.other}>
        <span>10</span>
        <div className={styles.info}>
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2823673366,2283527722&fm=116&gp=0.jpg" alt=""/>
            <div>JoJoNice</div>
        </div>
        <img src={require('./img/a.png')} alt="" className={styles.caiquan}/>
    </div>
);

const Result = () => (
    <div className={styles.result}>
        <img src={require('./img/d.png')} alt="" />
    </div>
);


class Self extends Component{
    constructor(){
        super();
        this.clicka=this.clicka.bind(this);
        this.clickb=this.clickb.bind(this);
        this.clickc=this.clickc.bind(this);
    }

    clicka(e){
        this.act.src=e.target.src;
    };
    clickb(e){
        this.act.src=e.target.src;
    };
    clickc(e){
        this.act.src=e.target.src;
    };

    render(){
        return (
            <div className={styles.mine}>
                <img src={require('./img/c.png')} alt="" ref={(input)=>{this.act=input}} />
                <div>
                    <div className={styles.picSelect}>
                        <img src={require('./img/a.png')} alt="" onClick={this.clicka}/>
                        <img src={require('./img/b.png')} alt="" onClick={this.clickb}/>
                        <img src={require('./img/c.png')} alt="" onClick={this.clickc}/>
                    </div>
                    <img
                        src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2823673366,2283527722&fm=116&gp=0.jpg'
                        alt=""/>
                </div>
            </div>
        )
    }
}

export default Fight;
