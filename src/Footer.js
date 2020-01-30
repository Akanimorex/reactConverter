import React from 'react';


const Footer=()=>{

    const style={

        background:'inherit',
        fontFamily:' Courier, monospace',
        textAlign:'center',
        position:'relative',
        bottom:'0',
        top:'100px'

    }


    return(
        <div style={style}>
            <div>
                <h3>Built by Akanimo Rex with<span style={{color:'red'}}> &hearts;</span></h3>
            </div>
        </div>

    );
}


export default Footer;