import Filter  from 'bad-words'


export function checkProfanity(input: string | string[]) : boolean {
    const filter = new Filter()
  
    if(typeof input === "string") {
      return filter.isProfane(input)
    }
    
    return filter.isProfane(JSON.stringify(input))
  }