import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import {Model} from "../Models/Model";
import {Component, Suspense} from "react";

export default class Scene extends Component {
    render() {
        return (
            <div {...this.props}>
                <Canvas style={{width: '100%'}} camera={{position: [2, 0, 12.25], fov: 10}}>
                    <ambientLight intensity={0.3}/>
                    <directionalLight position={[0, 200, 200]} intensity={1}/>
                    <Suspense fallback={null}>
                        <Model path={this.props.path} position={[0.025, -0.9, 0]}></Model>
                    </Suspense>
                    {this.props.orbit ? <OrbitControls/> : null}
                </Canvas>
            </div>
        )
    }
}