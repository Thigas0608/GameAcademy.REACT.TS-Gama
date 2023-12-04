import styled from "styled-components";

export const ContainerBody = styled.div`
    display: flex;
`

export const ContainerConteudo = styled.div`
    padding: 58px;
    width: 70%;
    height: 100%;
    margin-left: 25%;
    gap: 50px;

    span{
        font-size: 20px;
        color: #31A6E8;
        padding-bottom: 20px;
    }
`

export const ContainerPlayer = styled.div`
    display: flex;
    gap: 40px;

    p,span{
        font-size: 20px;
    }

    p{
        margin: 0px 0px 20px;
    }
    span{
        margin: 0;
    }

    img{
        width: 130px;
        height: 150px;
        box-shadow: 0px 0px 5px #fff;
        border-radius: 10px;
    }
`

export const ContainerPlayerInformation = styled.div`

`

export const ContainerGames = styled.div`
    display: flex;
    gap: 10px;
`
export const Games = styled.div`
    background-color: #fff;
    color: black;
    height: auto;
    width: 101px;
    border-radius: 10px;
    text-align: center;
    padding: 2px;

    img{
        width: auto;
        height: 125px;
        border-radius: 10px;
    }

    p{
        margin: 0;
        font-size: 12px;
    }
`