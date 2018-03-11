import React from 'react';
const _style = {
    color: '#ddd',
};
class Loading extends React.Component {
    render(){
        return <h1 style={_style}>Производится поиск... Пожалуйста подождите</h1>
    }
}

export default Loading;