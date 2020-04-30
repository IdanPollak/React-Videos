import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction:column;
    padding: 20px;
    align-items: center;
    background-color: white;
    border-color: #000;
    height: auto;
    border: 1px solid #B8B8B8;
    cursor: pointer;
    margin-top: 50px;
`

export const DayWrapper = styled.div`
color: #BBBBBB;

`

export const StatusWrapper = styled.div`

`

export const TempWrapper = styled.div`
display: flex;

*:nth-child(1) {
    margin-inline-end: 5px;
    color: #797979;
}

*:nth-child(2) {
    color: #B8B8B8;
}
`