import styled from "styled-components";

export const Container = styled.div`
    width: auto;
    height: 80px;
    background-color: #050033;
    color: #fff;
    padding: 0px 50px;

    display: flex;
    align-items: center;
    justify-content:space-between;

    img{
        height: 110px;
    }

    a{
        color: #fff;
        text-decoration: none;
        padding-right: 30px;
        font-size: 18px;
    }

    a:hover{
        color: #00aeff;
        transition: 0.4s;
    }

`