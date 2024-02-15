import ReactMarkdown from "react-markdown"
import  {Prism} from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const HighlightCode = ({ node, inline, className, children, ...props }: any) =>  {
    const match = /language-(\w+)/.exec(className || '');

    return !inline && match ? (
      <Prism style={dracula} PreTag="div" language={match[1]} {...props}>
        {String(children).replace(/\n$/, '')}
      </Prism>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
}

const MarkdownRender = ({children}:{children: string}) =>
(<ReactMarkdown children={children} components={{code: HighlightCode}}/>)

export default MarkdownRender





