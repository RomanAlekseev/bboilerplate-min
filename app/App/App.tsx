import * as React from 'react';
import './App.less';

/**
 * Основной класс приложения.
 */
export class App extends React.Component {

    state = {
        name: ''
    };

    /**
     * Обработчик авторизации пользователя.
     */
    handleLogin = () => this.setState({name:'admin', password:'1'});

    /**
     * Обработчик выхода из системы.
     */
    handleLogout = () => this.setState({name:'', password:''});

    render() {
        return (
            this.state.name !== 'admin' ?
                <div>
                    <input
                        className="btn btn-outline-primary"
                        type="button"
                        value="login"
                        onClick={this.handleLogin}
                    />
                    <input
                        className="btn btn-outline-warning"
                        type="button"
                        value="logout"
                        onClick={this.handleLogout}
                    />
                </div> :
                <div>
                    Таблица
                </div>
        );
    }
}
