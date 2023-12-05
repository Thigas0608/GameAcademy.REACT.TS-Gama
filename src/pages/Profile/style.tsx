import styled from "styled-components";

export const ContainerBody = styled.div`
    display: flex;
`

export const ContainerConteudo = styled.div`
    padding: 58px;
    width: 80%;
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
    gap: 30px;
    flex-wrap: wrap;

    p,span{
        font-size: 15px;
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

export const Texto = styled.div`
    margin: 10px 0px;
`

export const ContainerPlayerInformation = styled.div`

`
export const Container = styled.div`
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
`