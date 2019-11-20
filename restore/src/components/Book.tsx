import * as React from 'react';

export interface Props {
    id: string;
    title: string;
    author: string;
}

const Book: React.FunctionComponent<Props> = props => {
    return (
        <React.Fragment key={props.id}>
            <span>{props.title}</span>
            <span>{props.author}</span>
        </React.Fragment>
    );
};

export default Book;
