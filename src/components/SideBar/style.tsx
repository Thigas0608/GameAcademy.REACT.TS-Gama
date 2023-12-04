import styled from "styled-components";

export const Container = styled.div`
    width: 25%;
    height: 1000px;
    background-color: #050033;
    position: fixed;
    text-align: center;
    

    img{
        width: 182px;
        height: 165px;
    }
`

export const Menu = styled.nav`
    text-align: left;
    
    ul{
        list-style: none;
        padding: 0;
        

        li{
            height: 50px;
            width: auto;
            padding: 10px 45px;
            border: 1px solid #0f0f3e;

            svg{
                padding: 0px 20px 0px 0px;
                height: 27px;
                width: 28px;
            }

            a{
                font-size: 20px;
                color: #fff;
                text-decoration: none;
                cursor: pointer;

                &:hover{
                    color: #3030f8;
                    transition: 1s;
                }
            }
        } 
    }
`





