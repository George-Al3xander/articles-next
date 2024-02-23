import AccordionWrapper from "@/components/mui/accordion-wrapper";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";


type MarkdownEl = {element: string, syntax: string}


const MarkdownManual = () => {
    const markdownElements: MarkdownEl[] = [
        { element: 'Heading 1', syntax: '# H1' },
        { element: 'Heading 2', syntax: '## H2' },
        { element: 'Heading 3', syntax: '### H3' },
        { element: 'Heading 4', syntax: '#### H4' },
        { element: 'Heading 5', syntax: '##### H5' },
        { element: 'Heading 6', syntax: '###### H6' },
        { element: 'Bold', syntax: '**bold text**' },
        { element: 'Italic', syntax: '*italicized text*' },
        { element: 'Blockquote', syntax: '> blockquote' },
        { element: 'Ordered List', syntax: '1. First item\n2. Second item\n3. Third item' },
        { element: 'Unordered List', syntax: '- First item\n- Second item\n- Third item' },
        { element: 'Code', syntax: '`code`' },
        { element: 'Horizontal Rule', syntax: '---' },
        { element: 'Link', syntax: '[title](https://www.example.com)' },
        { element: 'Image', syntax: '![alt text](image.jpg)' }
    ];


    return(<AccordionWrapper title="How to format your post content">
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><Typography fontWeight={700}>Element</Typography></TableCell>
                        <TableCell><Typography fontWeight={700}>Syntax</Typography></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {markdownElements.map(({syntax,element}) => <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={element}>
                        <TableCell  component={"th"}>{element}</TableCell>
                        <TableCell >{syntax}</TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    </AccordionWrapper>)
}

export default MarkdownManual