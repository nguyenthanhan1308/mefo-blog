interface Props {
    children: React.ReactNode;
}

const Container= ({ children }: Props) => (
    <div className="max-w-7xl mx-auto relative transition duration-300">
        {children}
    </div>
)

export default Container;