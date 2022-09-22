import React from 'react'
import {useGLTF} from '@react-three/drei'

export function Model(props) {
    const {scene} = useGLTF(props.path);
    return (
        <primitive object={scene} {...props} />
    )
}

