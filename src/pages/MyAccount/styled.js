import styled from 'styled-components';
   
export const PageArea = styled.div`
    margin-top:20px;

    form {
        width:100%;
        margin: 0 auto;
        text-align: center;
        background-color: #fff;
        border-radius: 3px;
        padding: 10px;
        box-shadow: 0px 0px 3px #999;

        label {
            display: flex;
            justify-content: center;
            width: 100%;
        }

        .area {
            display:flex;
            padding: 10px;

            .area--title{
                width: 80px;
                text-align: center;
                font-weight: bold;
                font-size: 14px;
            }
            .area--input{
                width: 250px;
                min-width: 200px;

                input, select, textarea {
                    width: 100%;
                    font-size: 14px;
                    padding: 5px;
                    border: 1px solid #ddd;
                    border-radius: 3px;
                    outline: 0;
                    transition: all ease .4s;

                    &:focus {
                        border: 1px solid #333;
                        color: #333;
                    }
                }
            }
        }

        button {
            width: 150px;
            margin:20px 0;
            background-color: #0089ff;
            border: 0;
            outline: 0;
            padding: 5px 10px;
            border-radius: 4px;
            color: #fff;
            font-size: 15px;
            cursor: pointer;

            &:hover {
                background-color: #006fce;
            }
        }
    }

    .ads {
        display: flex;
        align-items: center;
        
        .aditem {
            width:90%
        }

        button {
            flex: 1;
            height: 100%;
            background-color: #0089ff;
            border: 0;
            outline: 0;
            padding: 5px 10px;
            border-radius: 4px;
            color: #fff;
            font-size: 15px;
            cursor: pointer;

            &:hover {
                background-color: #006fce;
            }
        }
    }

`;