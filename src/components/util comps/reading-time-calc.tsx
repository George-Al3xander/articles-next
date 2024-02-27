



const ReadingTimeCalc = ({text}:{text: string}) => {
    const wordsPerSeconds = 4;
   
    const words = text.split(" ").length

    const totalSeconds = Math.floor(words / wordsPerSeconds)
    
    if(totalSeconds < 60) return "less than 1min read"    
    if(totalSeconds < 3600) return `${Math.floor(totalSeconds / 60) + 1}min read`
    return `${Math.floor(totalSeconds / 3600)}hour read`
}

export default ReadingTimeCalc