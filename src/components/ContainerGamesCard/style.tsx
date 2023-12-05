import styled from "styled-components";

export const ContainerGames = styled.div`
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
`
export const Games = styled.div`
    background-color: #ADB3D6;
    color: black;
    height: auto;
    width: 130px;
    border-radius: 10px;
    text-align: center;
    padding: 2px;

    img{
        width: 100%;
        height: 125px;
        border-radius: 10px;
    }

    p{
        margin: 0;
        font-size: 12px;
    }
`