import styled from 'styled-components';

export const SearchArea = styled.div`
    background-color: #ddd;
    border-bottom: #ccc;
    padding: 20px 0;

    .searchbox {
        background-color: #9bb83c;
        padding: 20px 15px;
        border-radius: 5px;
        box-shadow: 1px 1px 1px .3px rgba(0, 0, 0, .2);
        display: flex;
    }
    form {
        flex: 1;
        display: flex;

        input, select {
            height: 40px;
            border: 0;
            border-radius: 5px;
            outline: 0;
            font-size: 15px;
            color: #000;
            margin-right: 20px;
        }
        input {
            flex: 1;
            padding: 0 10px;
        }
        select {
            width: 100px;
        }
        button {
            background-color: #49aeef;
            font-size: 15px;
            border: 0;
            border-radius: 5px;
            color: #ffffff;
            height: 40px;
            padding: 0 20px;
            cursor: pointer;
        }
    }
    .category-list {
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;

        .category-item {
            width: 25%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #000;
            text-decoration: none;
            height: 50px;
            margin-bottom: 10px;

            &:hover {
                color: #999;
            }

            img {
                width: 45px;
                height: 45px;
                margin-right: 10px;
            }

        }
    }
    @media (max-width: 600px) {
        .searchbox form {
            flex-direction:column;

            input {
                padding: 10px;
                margin-right: 0;
                margin-bottom: 10px;
            }

            select {
                width: 100%;
                margin-bottom: 10px;
            }
        }
        
        .category-list .category-item {
            width: 50%;
            padding: 10px;
            margin: 10px 0;
        }

    }
`;

export const PageArea = styled.div`
    h2 {
        font-size: 20px;
    }
    .list {
        display: flex;
        flex-wrap: wrap;

        .aditem {
            width: 25%;
        }
    }
    .see-all-link {
        color: #000;
        text-decoration: none;
        font-weight: bold;
        display: inline-block;
        margin-top: 10px;
        transition: all .3s ease;

        &:hover {
            color: #999;
        }
    }
    @media (max-width: 600px) {
        & {
            margin: 10px;
        }
    
        .list .aditem {
            width:50%;
        }
    }
`;