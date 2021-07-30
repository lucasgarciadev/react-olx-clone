import styled from 'styled-components';

export const Item = styled.div`
    a {
        display: block;
        border: 1px solid #fff;
        margin: 10px;
        text-decoration: none;
        padding: 10px;
        border-radius: 5px;
        color: #000;
        background-color: #fff;
        transition: all .3s;

        &:hover {
            border: 1px solid #000;
        }
        
        .itemimage img {
            width: 100%;
            border-radius: 5px;
        }

        .itemname {
            font-weight: bold;
        }
    }
`;