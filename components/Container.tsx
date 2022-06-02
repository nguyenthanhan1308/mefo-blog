import React from 'react'

interface Props {
    children: React.ReactNode;
}

const Container= ({ children }: Props) => <div className="max-w-7xl mx-auto relative">
    {children}
</div>;

export default Container