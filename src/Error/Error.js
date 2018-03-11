import React from 'react';
const _style = {
    color: 'red',
};
class Loading extends React.Component {
    render(){
        return <h1 style={_style}>Произошла ошибка при загрузке данных</h1>
    }
}

export default Loading;