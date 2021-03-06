import styled from 'styled-components';

export const HeaderArea = styled.div`
    background-color: #fff;
    height: 60px;
    border-bottom: 1px solid #ccc;

    .container {
        max-width: 1000px;
        margin: auto;
        display: flex;
    }

    a {
        text-decoration: none;
    }

    .logo {
        flex: 1;
        display: flex;
        align-items: center;
        height: 60px;

        .logo-1,
        .logo-2,
        .logo-3 {
            font-size: 27px;
            font-weight: bold;
        }
        .logo-1{ color: #FF0000; }
        .logo-2{ color: #00FF00; }
        .logo-3{ color: #0000FF; }
    }
    nav {
        padding: 10px 0;

        ul, li {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        ul {
            display: flex;
            align-items: center;
            height: 40px;
        }
        li {
            margin: 0 20px;

            a, button {
                border: 0;
                background: none;
                font-family: 'Oswald', 'sans-serif';
                outline: none;
                cursor: pointer;
                color: #000;
                font-size: 14px;

                &:hover {
                    color: #999;
                }

                &.button {
                    background-color: #ff8100;
                    border-radius: 4px;
                    color: #fff;
                    padding: 5px 10px;
                }

                &.button:hover {
                    background-color: #e57706;
                }
            }
        }
    }

    @media (max-width: 600px) {
        
        height: auto;

        .container {
            flex-direction:column;
        }

        .logo {
            align-self:center;
            margin:10px 0;
        }

        nav ul {
            flex-direction:column;
            height:auto;
        }

        nav li {
            margin:10px 0;
        }
    }
    `;