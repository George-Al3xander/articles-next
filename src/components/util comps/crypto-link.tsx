import Link, { LinkProps } from "next/link";
import { FC, HTMLProps } from "react";
import { encode } from "../../../lib/crypto";


type TCryptoLink = LinkProps & HTMLProps<HTMLAnchorElement>


const CryptoLink : FC<TCryptoLink> = ({href, ...props}: LinkProps) => {
    const splitted = href.toString().split("/")
    const slug = splitted[splitted.length-1]
    const crypted = encode(slug)
    splitted.pop()
    const newHref = [...splitted, crypted].toLocaleString().replaceAll(",", "/")
   
    
   
    return <Link href={newHref} {...props}/>
}

export default CryptoLink