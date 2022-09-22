import {Component} from "react";
import Scene from "../Components/Scene";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarUrl: null,
        }
    }

    setAvatarUrl = () => {
        const avatarUrlInput = document.getElementById('avatarUrl');
        this.setState({avatarUrl: avatarUrlInput.value});
    }

    render() {
        return (
            <>
                {
                    this.state.avatarUrl ? (<Scene path={this.state.avatarUrl} orbit="true" className="w-full h-screen"/>) : (
                        <div className="h-screen w-full flex relative">
                            <div className="w-full h-full flex flex-col justify-center items-center">
                                <div className="flex flex-col gap-y-4">
                        <span>Importer mon avatar depuis <a href="https://readyplayer.me/fr/hub">Ready Player Me</a>
                        </span>
                                    <div>
                                        <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="username">
                                            URL de l'avatar
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="avatarUrl" type="url" placeholder="Avatar Url"/>
                                    </div>
                                    <button className="button-gradient mx-auto" onClick={() => this.setAvatarUrl()}>Importer
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </>
        )
    }
}