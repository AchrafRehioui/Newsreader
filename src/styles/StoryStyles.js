import styled from 'styled-components';

export const StoryWrapper = styled.section`

padding-top: 10px;
margin-bottom: 20px;
border-top: 1px solid #cccccc;


&:first-of-type {
    border-top: 0;

}

&:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
}

`;

// export const StoryTitle = styled.h1`
//     margin-bottom: 5px;
//     font-size: 18px;
//     line-height: 1.8;
//     margin: 0;
//     text-decoration: none;

//     a {
//         color: #2e2e2c;
//     }

// `;
