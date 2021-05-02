const colors = {}

const randomColor = () =>{
    let color = "#"
    const possibleColors = [..."0123456789abcdef"]
    for(let i = 0; i<6; i++){
        color += possibleColors[Math.floor(Math.random() * possibleColors.length)]
    }
    return color
}

export const getColor = (name) => {
    if(!(name in colors)){
        colors[name] = randomColor()
    }
    return colors[name]
}